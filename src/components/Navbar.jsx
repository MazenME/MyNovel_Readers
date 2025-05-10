// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Unseen Tone</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Chapters</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}
