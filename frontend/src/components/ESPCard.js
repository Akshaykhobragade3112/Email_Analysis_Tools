import "./ESPCard.css";

export default function ESPCard({ subject, espType }) {
  // Color map for ESP badges
  const colors = {
    Gmail: "bg-red",
    "Outlook/Microsoft 365": "bg-blue",
    Yahoo: "bg-purple",
    "Amazon SES": "bg-orange",
    Zoho: "bg-green",
    Unknown: "bg-gray"
  };

  const badgeClass = colors[espType] || "bg-gray";

  return (
    <div className="esp-card">
      <h3>📌 {subject}</h3>
      <span className={`badge ${badgeClass}`}>{espType || "Unknown"}</span>
    </div>
  );
}
