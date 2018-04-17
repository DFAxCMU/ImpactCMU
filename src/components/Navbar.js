import React from 'react'

import smallLogo from '../images/smalllogo.png'

const Navbar = () => ( 
        <nav className="fixed-top navbar navbar-expand-sm navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <img style={{
                    backgroundColor: '#E84C3D',
                    height: 40,
                    padding: 5,
                }} 
                src={ smallLogo } 
                alt="IMPACT CMU"  />
            </a>
            <button 
                className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            Logistics
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            RSVP
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            Orgs
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            Apply
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            Projects
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
)

export default Navbar
