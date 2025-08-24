import { useEffect, useState } from "react";
import { fetchEmails } from "../services/api";
import ESPCard from "../components/ESPCard";
import ChainTimeline from "../components/ChainTimeline";
import EmailForm from "../components/EmailForm";
import Modal from "../components/Modal";
import "./Dashboard.css";

export default function Dashboard() {
  const [emails, setEmails] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const loadEmails = () => {
    fetchEmails()
      .then((res) => setEmails(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    loadEmails();
  }, []);


  const filteredEmails = emails.filter((email) => {
    const matchesSearch = email.subject.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || email.espType === filter;
    return matchesSearch && matchesFilter;
  });


  const espOptions = ["All", ...new Set(emails.map((e) => e.espType))];

  return (
    <div className="container">
      <h2 className="dashboard-title">📨 Processed Emails</h2>

      <EmailForm onSuccess={loadEmails} />

      <div className="toolbar">
        <input
          type="text"
          placeholder="🔍 Search by subject..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          {espOptions.map((esp) => (
            <option key={esp} value={esp}>
              {esp}
            </option>
          ))}
        </select>
      </div>

      {filteredEmails.length === 0 ? (
        <p className="no-data">No emails match your criteria.</p>
      ) : (
        <div className="email-grid">
          {filteredEmails.map((email) => (
            <div
              key={email._id}
              className="email-card"
              onClick={() => setSelectedEmail(email)}
              style={{ cursor: "pointer" }}
            >
              <ESPCard subject={email.subject} espType={email.espType} />
              <ChainTimeline chain={email.receivingChain || []} />
            </div>
          ))}
        </div>
      )}

      <Modal
        show={!!selectedEmail}
        onClose={() => setSelectedEmail(null)}
        title={selectedEmail?.subject || ""}
      >
        <h4>📜 Full Raw Headers</h4>
        <p>{selectedEmail?.rawHeaders}</p>
      </Modal>
    </div>
  );
}
