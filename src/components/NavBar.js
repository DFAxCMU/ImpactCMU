import React, { useState, useEffect } from "react";
import unionStroke from "../components/2026img/union-stroke.svg";

const NAV_ITEMS = [
  { label: "ABOUT", href: "/About" },
  { label: "SUBMIT", href: "/Submit" },
  { label: "SCHEDULE", href: "/Schedule" },
  { label: "PROJECTS", disabled: true },
  { label: "2025 ARCHIVE", href: "https://dfaxcmu.notion.site/", external: true },
];

export default function NavBarSimple() {
  const normalize = (path) => {
    if (!path) return "/";
    return path.replace(/\/+$/, "") || "/";
  };

  const [currentPath, setCurrentPath] = useState(
    typeof window !== "undefined"
      ? normalize(window.location.pathname)
      : "/"
  );

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(normalize(window.location.pathname));
    };

    window.addEventListener("popstate", handleLocationChange);

    // also update after clicks
    handleLocationChange();

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  const isHome =
    currentPath === "/" ||
    currentPath === "/Hero" ||
    currentPath === "/Landing2026";

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
            normalize(item.href) === currentPath;

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
