import React, {useState} from 'react'

// import Contact from './Contact.js'
import hamburgerIcon from '../images/hamburger-menu.svg'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div id="navbar">
                <a className="logo green-box" href="/">
                    IMPACT CMU
                </a>
                <div onClick={() => setIsOpen(!isOpen)}>
                    <div className="hamburger">
                    <svg viewBox="0 0 75 80" width="40" height="40">
                        <rect width="75" height="10"></rect>
                        <rect y="30" width="75" height="10"></rect>
                        <rect y="60" width="75" height="10"></rect>
                    </svg>
                    </div>
                </div>
                { isOpen ?
                <div className="open-menu">
                    <div className="cover"></div>
                    <a className="menu-item" href="/about">About</a>
                    <a className="menu-item" href="/timeline">Timeline</a>
                    <a className="menu-item" href="/resources">Resources</a>
                    <a className="menu-item" href="https://forms.gle/LMyKcb1ctstv5XUN6">Submit a Project</a>
                    <a className="menu-item" href="/projects">Past Impact</a>
                </div>
                :
                <div className="close-menu"></div>
                }
            </div>
        </>
    )
} 

export default Navbar
