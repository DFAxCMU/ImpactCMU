// import React, { useState, useEffect } from "react";
// import unionStroke from "../components/2026img/union-stroke.svg";

// const NAV_ITEMS = [
//   { label: "ABOUT", href: "/About" },
//   { label: "SUBMIT", href: "/Submit" },
//   { label: "SCHEDULE", href: "/Schedule" },
//   { label: "PROJECTS", disabled: true },
//   { label: "2025 ARCHIVE", href: "https://dfaxcmu.notion.site/", external: true },
// ];

// export default function NavBarSimple() {
//   const normalize = (path) => {
//     if (!path) return "/";
//     return path.replace(/\/+$/, "") || "/";
//   };

//   const [currentPath, setCurrentPath] = useState(
//     typeof window !== "undefined"
//       ? normalize(window.location.pathname)
//       : "/"
//   );

//   useEffect(() => {
//     const handleLocationChange = () => {
//       setCurrentPath(normalize(window.location.pathname));
//     };

//     window.addEventListener("popstate", handleLocationChange);

//     // also update after clicks
//     handleLocationChange();

//     return () => {
//       window.removeEventListener("popstate", handleLocationChange);
//     };
//   }, []);

//   const isHome =
//     currentPath === "/" ||
//     currentPath === "/Hero" ||
//     currentPath === "/Landing2026";

//   return (
//     <nav className="navbar">
//       <div className="frame">

//         <a
//           href="/Hero"
//           className={`nav-item nav-logo ${isHome ? "active" : ""}`}
//         >
//           <img src={unionStroke} alt="Home" />
//         </a>

//         {NAV_ITEMS.map((item) => {
//           if (item.disabled) {
//             return (
//               <span
//                 key={item.label}
//                 className="nav-item nav-item-disabled"
//               >
//                 <span className="text-wrapper">{item.label}</span>
//               </span>
//             );
//           }

//           const isActive =
//             !item.external &&
//             normalize(item.href) === currentPath;

//           return (
//             <a
//               key={item.label}
//               href={item.href}
//               className={`nav-item ${isActive ? "active" : ""}`}
//               target={item.external ? "_blank" : undefined}
//               rel={item.external ? "noopener noreferrer" : undefined}
//             >
//               <span className="text-wrapper">{item.label}</span>
//             </a>
//           );
//         })}
//       </div>
//     </nav>
//   );
// }


import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import unionStroke from "../components/2026img/union-stroke.svg"; // update path

export default function TopBar2026() {
  const [windowDimensions, setWindowDimensions] = useState({ width: 1000, height: 800 });
  const [menuOpen, setMenuOpen] = useState(false);

  const NAV_ITEMS = [
    { label: "ABOUT", href: "/About" },
    { label: "SUBMIT", href: "/Submit" },
    { label: "SCHEDULE", href: "/Schedule" },
    { label: "PROJECTS", href: "/Projects" },
    { label: "2025 ARCHIVE", href: "https://dfaxcmu.notion.site/", external: true },
  ];

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
    const handleResize = () => {
      setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isHome =
    currentPath === "/" ||
    currentPath === "/Hero" ||
    currentPath === "/Landing2026";

  return (
    <div>
      {windowDimensions.width > 768 ? (
        // Desktop navbar
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

        

        
      ) : (
        // Mobile navbar
        <div className="topbar-mobile">
            <div className="mobile-nav-pill">
                <a href="/Hero" className="logo-link">
                    <img src={unionStroke} alt="Union Stroke" className="logo" />
                </a>
                <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                {menuOpen && (
                    <Nav className="nav-links-mobile">
                    {NAV_ITEMS.map((item) => (
                        <Nav.Link
                        key={item.label}
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="nav-link-item"
                        >
                        {item.label}
                        </Nav.Link>
                    ))}
                    </Nav>
                )}
            </div>
        </div>
      )}
    </div>
  );
}

