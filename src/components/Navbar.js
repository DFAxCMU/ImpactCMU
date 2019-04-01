import React from 'react'
import { 
    Navbar as N, 
    Nav
} from 'react-bootstrap';
import smallLogo from '../images/smalllogo.png'

class Navbar extends React.Component {
    render() {
        return (
            <N
                fixed="bottom"
                bg="white"
                expand="sm"
                collapseOnSelect={ true }
            >
                <N.Brand href="#">
                    <img
                        style={{ height: 48 }}
                        className="navbar-logo"
                        src={ smallLogo } 
                        alt="IMPACT CMU"  
                    />
                </N.Brand>
                <N.Toggle aria-controls="basic-navbar-nav" />
                <N.Collapse >
                    <Nav className="ml-auto">
                        <Nav.Link onClick={ this.scrollTo("about") }>
                            About
                        </Nav.Link>
                        <Nav.Link onClick={ this.scrollTo("logistics") }>
                            Logistics
                        </Nav.Link>
                        <Nav.Link onClick={ this.scrollTo("rsvp") }>
                                RSVP
                        </Nav.Link>
                        <Nav.Link onClick={ this.scrollTo("orgs") }>
                                Orgs
                        </Nav.Link>
                        <Nav.Link onClick={ this.scrollTo("projects") }>
                                Projects
                        </Nav.Link>
                        <Nav.Link onClick={ this.scrollTo("apply") }>
                                Apply
                        </Nav.Link>
                    </Nav>
                </N.Collapse>
            </N>
        )
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
