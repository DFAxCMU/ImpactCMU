import React from 'react'
import { Navbar as Nav } from 'react-bootstrap';
import smallLogo from '../images/smalllogo.png'

class Navbar extends React.Component {
    render() {
        console.log(Nav)
        return <Nav
            className="fixed-top navbar navbar-expand-sm navbar-light bg-light">
            <Nav.Brand className="navbar-brand" href="#">
                <img style={{
                    padding: 5,
                }} 
                src={ smallLogo } 
                alt="IMPACT CMU"  />
            </Nav.Brand>
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
                        <span className="nav-link" onClick={ this.scrollTo("about") }>
                            About
                        </span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link" onClick={ this.scrollTo("logistics") }>
                            Logistics
                        </span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link" onClick={ this.scrollTo("rsvp") }>
                            RSVP
                        </span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link" onClick={ this.scrollTo("orgs") }>
                            Orgs
                        </span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link" onClick={ this.scrollTo("projects") }>
                            Projects
                        </span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link" onClick={ this.scrollTo("apply") }>
                            Apply
                        </span>
                    </li>
                </ul>
            </div>
        </Nav>
    }
    scrollTo(id) {
        return () => {
            document.getElementById(id).scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }
} 

export default Navbar
