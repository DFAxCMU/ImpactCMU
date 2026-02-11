import React from "react";
import Nav from "react-bootstrap/Nav";
import unionStroke from "../components/2026img/union-stroke.svg";

const NAV_ITEMS = [
  { label: "ABOUT", href: "/About" },
  { label: "SUBMIT", href: "/Submit" },
  { label: "SCHEDULE", href: "/Schedule" },
  { label: "PROJECTS", disabled: true },
  { label: "2025 ARCHIVE", href: "https://dfaxcmu.notion.site/", external: true },
];

export default function NavBarSimple() {
  const currentPath =
    typeof window !== "undefined"
      ? window.location.pathname.replace(/\/+$/, "").toLowerCase()
      : "/";

  const normalizePath = (path) => {
    if (!path) return "/";
    const cleaned = path.replace(/\/+$/, "").toLowerCase();
    return cleaned === "" ? "/" : cleaned;
  };

  const normalizedPath = normalizePath(currentPath);

  const isHome =
    normalizedPath === "/" ||
    normalizedPath === "/hero" ||
    normalizedPath === "/landing2026";

  return (
    <nav className="navbar">
      <div className="frame">
        
        {/* Logo */}
        <Nav.Link
          href="/Hero"
          className={`nav-item nav-logo ${isHome ? "active" : ""}`}
        >
          <img src={unionStroke} alt="Home" />
        </Nav.Link>

        {/* Nav Items */}
        {NAV_ITEMS.map((item) => {
          if (item.disabled) {
            return (
              <span
                key={item.label}
                className="nav-item nav-item-disabled"
              >
                <span className="text-wrapper">{item.label}</span>
              </span>
            );
          }

          const isActive =
            !item.external &&
            item.href &&
            normalizedPath.startsWith(
              normalizePath(item.href)
            );

          if (item.external) {
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-item"
              >
                <span className="text-wrapper">{item.label}</span>
              </a>
            );
          }

          return (
            <Nav.Link
              key={item.label}
              href={item.href}
              className={`nav-item ${isActive ? "active" : ""}`}
            >
              <span className="text-wrapper">{item.label}</span>
            </Nav.Link>
          );
        })}
      </div>
    </nav>
  );
}
