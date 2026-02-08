import React from "react";
import unionStroke from "../components/2026img/union-stroke.svg";

import slack from "../components/2026img/streamline-logos_slack-logo.svg";
import instagram from "../components/2026img/instagram-logo-2-solid.svg";
import email from "../components/2026img/fontisto_email.svg";
import calendar from "../components/2026img/quill_calendars.svg";

const NAV_ITEMS = [
  { label: "ABOUT", href: "/About" },
  { label: "SUBMIT", href: "/Submit" },
  { label: "SCHEDULE", href: "/Schedule" },
  { label: "PROJECTS", href: "/Projects" },
  { label: "2025 ARCHIVE", href: "https://dfaxcmu.notion.site/", external: true },
]
export default function NavBarSimple() {
    const currentPath =
      typeof window !== "undefined" ? window.location.pathname : "";
  
    const isHome =
      currentPath === "/" ||
      currentPath === "/Hero/" ||
      currentPath === "/Landing2026";
  
    return (
      <nav className="navbar">
        <div className="frame">
          {/* Logo */}
          <a
            href="/Hero"
            className={`nav-item nav-logo ${isHome ? "active" : ""}`}
          >
            <img src={unionStroke} alt="Home" />
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
  
