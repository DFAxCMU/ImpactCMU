import React, { useState } from "react";
import { Link } from "gatsby";
import "../styles/navbar-mobile.css";
import logo from "./2026img/landing.svg";

export default function NavBarMobile() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="navm-wrap">
        <div className="navm-pill">
          <Link to="/" className="navm-logo" aria-label="Go to home">
            <img src={logo} alt="" />
          </Link>

          <button
            className="navm-burger"
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <div className="navm-overlay" role="dialog" aria-modal="true">
          <button
            className="navm-close"
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>

          <nav className="navm-menu">
            <Link to="/about" onClick={() => setOpen(false)}>About</Link>
            <Link to="/submit" onClick={() => setOpen(false)}>Submit</Link>
            <Link to="/schedule" onClick={() => setOpen(false)}>Schedule</Link>
            <Link to="/projects" onClick={() => setOpen(false)}>Projects</Link>
            <a href="/2025" onClick={() => setOpen(false)}>2025 Archive</a>
          </nav>
        </div>
      )}
    </>
  );
}
