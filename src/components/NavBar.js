import React, { useState } from "react"; 
import unionStroke from "../components/2026img/union-stroke.svg"; 
 
const Navbar = () => { 
    const [active, setActive] = useState("ABOUT"); 
    
    const navItems = [ 
        "ABOUT", 
        "SUBMIT", 
        "SCHEDULE", 
        "PROJECTS", 
        "2025 ARCHIVE",
     ]; 
    return ( 
        <nav className="navbar"> 
        <div className="frame"> 
        {/* Union stroke/logo */} 
        <div className="logo-wrapper"> 
            <img className="union-stroke" src={unionStroke} alt="Union stroke" /> 
        </div> 

        {/* Navigation items */}
        {navItems.map((item) => (
          <div
            key={item}
            className={`nav-item ${active === item ? "active" : ""}`}
            onClick={() => setActive(item)}
          >
            <div className="text-wrapper">{item}</div>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
