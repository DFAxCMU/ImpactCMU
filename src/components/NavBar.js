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
    { label: "PROJECTS", disabled: true },
    { label: "2025 ARCHIVE", href: "https://dfaxcmu.notion.site/", external: true },
  ];
  
  export default function NavBarSimple() {
    const currentPath =
      typeof window !== "undefined" ? window.location.pathname : "/";
  
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
          <a
            href="/Hero"
            className={`nav-item nav-logo ${isHome ? "active" : ""}`}
          >
            <img src={unionStroke} alt="Home" />
          </a>
  
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
  
            return (
              <a
                key={item.label}
                href={item.href}
                className={`nav-item ${isActive ? "active" : ""}`}
              >
                <span className="text-wrapper">{item.label}</span>
              </a>
            );
          })}
        </div>
      </nav>
    );
  }
  
  
  