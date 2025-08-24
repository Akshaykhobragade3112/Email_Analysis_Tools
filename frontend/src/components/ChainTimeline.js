import "./ChainTimeline.css";

export default function ChainTimeline({ chain = [] }) {
  return (
    <div className="timeline">
      <h4>🔗 Receiving Chain</h4>
      {chain.length === 0 ? (
        <p className="empty-chain">No chain available</p>
      ) : (
        <ul>
          {chain.map((step, index) => (
            <li key={index}>
              <span className="bullet">{index + 1}</span> {step}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
