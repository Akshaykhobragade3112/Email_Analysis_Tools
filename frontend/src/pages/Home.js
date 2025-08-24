import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="hero">
        <h1>📧 Email Analyzer</h1>
        <p>
          Analyze email headers in seconds. Detect <b>Receiving Chains</b> and identify 
          <b> ESP types</b> with clarity.
        </p>
        <Link to="/dashboard" className="cta-btn">
           Get Started
        </Link>
      </div>

      <div className="features">
        <h2>✨ Why Choose Email Analyzer?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <span className="feature-icon">🔍</span>
            <h3>Parse Headers</h3>
            <p>
              Extract every detail from raw email headers with structured formatting.
            </p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">📊</span>
            <h3>Detect ESP</h3>
            <p>
              Instantly recognize whether the email came from Gmail, Outlook, Yahoo, or others.
            </p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">⚡</span>
            <h3>Real-Time Analysis</h3>
            <p>
              Submit and analyze emails instantly — results appear on your dashboard in seconds.
            </p>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>📧 Email Analyzer — Built for analyzing email headers with ease.</p>
        <p>
          <a
            href="https://github.com/Akshaykhobragade3112/Email_Analysis_Tools"
            target="_blank"
            rel="noopener noreferrer"
          >
            🌐 View on GitHub
          </a>
        </p>
        <p>© {new Date().getFullYear()} Email Analyzer. All rights reserved. Akshay Khobragade</p>
      </footer>
    </div>
  );
}
