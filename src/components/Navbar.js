import React, {useState} from 'react'

// import Contact from './Contact.js'
import hamburgerIcon from '../images/hamburger-menu.svg'

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }
    render() {
    return (
        <>
            <div id="navbar">
                <a className="logo green-box" href="/">
                    IMPACT CMU
                </a>
                <div onClick={() => this.setState({isOpen: !this.state.isOpen})}>
                    <div className="hamburger">
                    <svg viewBox="0 0 75 80" width="40" height="40">
                        <rect width="75" height="10"></rect>
                        <rect y="30" width="75" height="10"></rect>
                        <rect y="60" width="75" height="10"></rect>
                    </svg>
                    </div>
                </div>
                { this.state.isOpen ?
                <div className="open-menu">
                    <div className="cover"></div>
                    <a className="menu-item" href="/about">About</a>
                    <a className="menu-item" href="/timeline">Event Schedule</a>
                    <a className="menu-item" href="https://forms.gle/LMyKcb1ctstv5XUN6">Submit a Project</a>
                    <a className="menu-item" href="/resources">Resources</a>
                    <a className="menu-item" href="/projects">Past Impact</a>
                </div>
                :
                <div className="close-menu"></div>
                }
            </div>
        </>
    )
    }
} 

export default Navbar
