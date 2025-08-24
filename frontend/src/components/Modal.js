import "./Modal.css";

export default function Modal({ show, onClose, title, children }) {
  if (!show) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{title}</h3>
          <button className="close-btn" onClick={onClose}>✖</button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}
