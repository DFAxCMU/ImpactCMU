import React, {useState} from 'react'

import Contact from './Contact.js'
import hamburgerIcon from '../images/hamburger-menu.svg'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div id="navbar">
                <a className="logo green-box" href="/">
                    IMPACT CMU
                </a>
                <Contact />
                <div onClick={() => setIsOpen(!isOpen)}>
                    <img className="hamburger" src={ hamburgerIcon } alt="menu icon"/>
                </div>
                { isOpen ?
                <div className="open-menu">
                    <a className="menu-item" href="/about">About</a>
                    <a className="menu-item" href="/timeline">Timeline</a>
                    <a className="menu-item" href="/resources">Resources</a>
                    <a className="menu-item" href="https://forms.gle/LMyKcb1ctstv5XUN6">Submit a Project</a>
                    <a className="menu-item" href="/projects">Past Impact</a>
                </div>
                :
                <div></div>
                }
            </div>
        </>
    )
} 

export default Navbar
