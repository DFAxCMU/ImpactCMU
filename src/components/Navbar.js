import React from 'react'
import { 
    Navbar as N, 
    Nav
} from 'react-bootstrap';

import Contact from './Contact.js'

class Navbar extends React.Component {
    render() {
        return (
            <>
                <div id="navbar">
                    <a className="logo green-box" href="/">
                        IMPACT CMU
                    </a>
                    <Contact />
                </div>
            </>
        )
    }
} 

export default Navbar
