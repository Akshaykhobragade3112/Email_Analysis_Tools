import { useState } from "react";
import { submitEmail } from "../services/api";
import "./EmailForm.css";

export default function EmailForm({ onSuccess }) {
  const [subject, setSubject] = useState("");
  const [rawHeaders, setRawHeaders] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await submitEmail({ subject, rawHeaders });
      setMessage("Email submitted successfully!");
      setSubject("");
      setRawHeaders("");
      if (onSuccess) onSuccess(res.data); 
    } catch (err) {
      setMessage("Failed to submit email");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="email-form" onSubmit={handleSubmit}>
      <h3>✉️ Submit New Email</h3>

      <input
        type="text"
        placeholder="Enter subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
      />

      <textarea
        placeholder="Paste raw email headers here..."
        rows="6"
        value={rawHeaders}
        onChange={(e) => setRawHeaders(e.target.value)}
        required
      ></textarea>

      <button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit Email"}
      </button>

      {message && <p className="status-msg">{message}</p>}
    </form>
  );
}
