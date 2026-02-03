import React from "react";
import unionStroke from "../components/2026img/union-stroke.svg";

const NAV_ITEMS = [
  { label: "ABOUT", href: "/About" },
  { label: "SUBMIT", href: "/Submit" },
  { label: "SCHEDULE", href: "/Schedule" },
  { label: "PROJECTS", href: "/Projects" },
  { label: "2025 ARCHIVE", href: "https://dfaxcmu.notion.site/", external: true },
];

export default function NavBarSimple() {
  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "";

  return (
    <nav className="navbar">
      <div className="frame">
        <a href="/Hero" className="logo-wrapper">
          <img src={unionStroke} alt="Union stroke" />
        </a>

        {NAV_ITEMS.map((item) => {
          const isActive =
            !item.external && currentPath.startsWith(item.href);

          return (
            <a
              key={item.label}
              href={item.href}
              className={`nav-item ${isActive ? "active" : ""}`}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
            >
              <span className="text-wrapper">{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
