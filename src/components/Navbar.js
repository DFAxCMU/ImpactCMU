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
                    <div className="logo green-box">
                        IMPACT CMU
                    </div>
                    <Contact />
                </div>
            </>
        )
    }
} 

export default Navbar
