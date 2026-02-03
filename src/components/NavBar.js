import React, { useState, useEffect } from "react";
import unionStroke from "../components/2026img/union-stroke.svg";

const NAV_ITEMS = [
  { label: "ABOUT", href: "/About" },
  { label: "SUBMIT", href: "/Submit" },
  { label: "SCHEDULE", href: "/Schedule" },
  { label: "PROJECTS", href: "/Projects" },
  { label: "2025 ARCHIVE", href: "https://dfaxcmu.notion.site/", external: true },
];

export default function NavBar() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // track screen size
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // get current path for active state
  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "";

  const renderNavItems = (onClick) =>
    NAV_ITEMS.map((item) => {
      const isActive =
        !item.external && currentPath.startsWith(item.href);

      return (
        <a
          key={item.label}
          href={item.href}
          className={`nav-item ${isActive ? "active" : ""}`}
          target={item.external ? "_blank" : undefined}
          rel={item.external ? "noopener noreferrer" : undefined}
          onClick={onClick}
        >
          <span className="text-wrapper">{item.label}</span>
        </a>
      );
    });

  /* ---------------- DESKTOP ---------------- */
  if (!isMobile) {
    return (
      <nav className="navbar">
        <div className="frame">
          <a href="/Hero" className="logo-wrapper">
            <img src={unionStroke} alt="Union stroke" />
          </a>
          {renderNavItems()}
        </div>
      </nav>
    );
  }

  /* ---------------- MOBILE ---------------- */
  return (
    <>
      <nav className="navbar">
        <div className="frame">
          <a href="/Hero" className="logo-wrapper">
            <img src={unionStroke} alt="Union stroke" />
          </a>

          <button
            className="menu-icon"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          {renderNavItems(() => setMenuOpen(false))}
        </div>
      )}
    </>
  );
}
