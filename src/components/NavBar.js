import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import unionStroke from "../components/2026img/union-stroke.svg";
import hamburgerImg from "../components/2026img/hamburger.svg";

export default function TopBar2026() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  const NAV_ITEMS = [
    { label: "ABOUT", href: "/About" },
    { label: "SUBMIT", href: "/Submit" },
    { label: "SCHEDULE", href: "/Schedule" },
    { label: "PROJECTS", disabled: true },
    { label: "2025 ARCHIVE", href: "https://dfaxcmu.notion.site/", external: true },
  ];

  const normalize = (path) => (path ? path.replace(/\/+$/, "") : "/");
  const currentPath =
    typeof window !== "undefined"
      ? normalize(window.location.pathname)
      : "/";

  const isHome = currentPath === "/" || currentPath === "/Hero";

  return (
    <Navbar className="topbar-2026">
      <div className={`frame ${isMenuOpen ? "dropdown-open" : ""}`}>

        {/* Logo */}
        <Nav.Link
          href="/Hero"
          className={`nav-item nav-logo ${isHome ? "active" : ""}`}
        >
          <img src={unionStroke} alt="Home" />
        </Nav.Link>

        {/* DESKTOP NAV */}
        <div className="desktop-nav">
          {NAV_ITEMS.map((item) => {
            const isActive =
              !item.external &&
              !item.disabled &&
              normalize(item.href) === currentPath;

            if (item.disabled) {
              return (
                <span
                  key={item.label}
                  className="nav-item nav-item-disabled"
                >
                  {item.label}
                </span>
              );
            }

            return (
              <Nav.Link
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className={`nav-item ${isActive ? "active" : ""}`}
              >
                {item.label}
              </Nav.Link>
            );
          })}
        </div>

        {/* MOBILE HAMBURGER */}
        <div
          className={`hamburger-wrapper ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <img src={hamburgerImg} alt="Menu" className="hamburger-img" />
        </div>

        {/* MOBILE DROPDOWN */}
        {isMenuOpen && (
          <div className="nav-items-container">
            {NAV_ITEMS.map((item) =>
              item.disabled ? (
                <span
                  key={item.label}
                  className="nav-item nav-item-disabled"
                >
                  {item.label}
                </span>
              ) : (
                <Nav.Link
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="nav-item"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Nav.Link>
              )
            )}
          </div>
        )}
      </div>
    </Navbar>
  );
}
