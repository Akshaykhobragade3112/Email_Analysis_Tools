import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">📧 Email Analyzer</div>
      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/dashboard" className="nav-link">Dashboard</Link>
      </nav>
    </header>
  );
}
