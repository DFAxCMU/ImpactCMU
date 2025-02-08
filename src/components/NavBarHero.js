import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// const logo = "./2024img/logo.png";
import logo from './2024img/sticker3.svg';
import insta from './2024img/insta.svg';
import slack from './2024img/slack.svg';
import mail from './2024img/mail.svg';
import cal from './2024img/cal.svg';

/*  TopBar is the navigation bar at the top of every page */

export default function TopBar(props) {
    // Event listener to record the user's screen dimensions
    const [windowDimensions, setWindowDimensions] = useState({ width: 1000, height: 800 });
    
    useEffect(() => {
        function handleResize() {
            const { innerWidth: width, innerHeight: height } = window;
            setWindowDimensions({ width, height });
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // State to keep track of whether the hamburger menu and the project
    // dropdown for mobile has been clicked
    const [menuClicked, setMenuClicked] = useState(false);  

    return (
        <div>
        { (windowDimensions.width > 768) ? 
            // if the screen is wide, use a classic nav bar
        <Navbar>
            <div className="top navbar navbar-expand-md navbar-light fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/Hero">
                        <img src={logo} alt="logo" className="logo"/>
                    </a>
                    {/* <Nav className="inner d-flex flex-row justify-content-between w-100 container-fluid navbar-text"> */}
                    <Nav className="inner d-flex flex-row container-fluid navbar-text">
                        <Nav.Link href="/About" className="hover-underline-animation">ABOUT</Nav.Link>
                        <Nav.Link href="/Submit" className="hover-underline-animation">SUBMIT</Nav.Link>
                        <Nav.Link href="/Schedule" className="hover-underline-animation">SCHEDULE</Nav.Link>
                        {/* <Nav.Link href="/Projects" className="hover-underline-animation">PROJECTS</Nav.Link> */}
                        <Nav.Link href="https://dfaxcmu.notion.site/ecfaf84847754757bf0809df74a3253c?v=087d30146f574a93bc8b935ecb0f4560&pvs=4" className="hover-underline-animation" target="_blank_">
                            2024 ARCHIVE
                        </Nav.Link>
                    </Nav>
                </div>
            </div>
            <div className="navbar fixed-bottom navbar-light">
                <div className="w-100">
                    <Nav className="socials">
                        <a href="https://www.instagram.com/impact.cmu/" target="_blank" rel="noopener noreferrer">
                            <img src={insta} alt="insta" width="30" height="30" />
                        </a>
                        <a href="https://join.slack.com/t/impactcmu/shared_invite/zt-2d9yxiqk0-l0NwYeY6tqH2IcXoa98p8Q" target="_blank" rel="noopener noreferrer">
                            <img src={slack} alt="slack" width="30" height="30" />
                        </a>
                        <a href="mailto:impactcmu.dfa@gmail.com" target="_blank" rel="noopener noreferrer">
                            <img src={mail} alt="mail" width="30" height="30" />
                        </a>
                        <a href="https://calendar.google.com/calendar/u/1?cid=Y181NjI5MGVmNTYxOWZjYjEwM2ZjYzA5ZDBmZTNiODk4MzY0NzIwODNmODlmYmExNjk5NGI4NDg5ZWM4NDlkZWNlQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20" target="_blank" rel="noopener noreferrer">
                            <img src={cal} alt="cal" width="30" height="30" />
                        </a>
                    </Nav>
                </div>
            </div>
        </Navbar>
            :
            // if the screen is narrow, use a hamburger icon that triggers a
            // fullscreen menu
            <div>
                <div className="top-bar-small top-bar">
                    <a href="/">
                        <div className="logo">
                            <img src={logo} alt="logo" className="logo"/>
                        </div>
                    </a>
                    <button className="menu-icon" type="button" onClick={ () => setMenuClicked((!menuClicked)) }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    </button>
                </div>
                <ul className={menuClicked ? 'nav-menu active' : 'nav-menu'}>
                    {/* <button className="menu-icon" type="button" onClick={ () => setMenuClicked((!menuClicked)) }>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button> */}
                    <div className="nav-vertical">
                        <div className="top-bar-small top-bar">
                            <a href="/">
                                <div className="logo">
                                    <img src={logo} alt="logo" className="logo"/>
                                </div>
                            </a>
                            <button className="menu-icon" type="button" onClick={ () => setMenuClicked((!menuClicked)) }>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                            </button>
                        </div>
                        {/* <a className="navbar-brand" href="/Hero">
                            <img src={logo} alt="logo" className="logo"/>
                        </a> */}
                        <Nav.Link href="/About" className="navtext">ABOUT</Nav.Link>
                        <Nav.Link href="/Submit" className="navtext">SUBMIT</Nav.Link>
                        {/* <Nav.Link href="/Projects">PROJECTS</Nav.Link> */}
                        <Nav.Link href="/Schedule" className="navtext">SCHEDULE</Nav.Link>
                        <Nav.Link href="https://dfaxcmu.notion.site/ecfaf84847754757bf0809df74a3253c?v=087d30146f574a93bc8b935ecb0f4560&pvs=4" className="navtext" target="_blank_">
                            2024 ARCHIVE
                        </Nav.Link>
                        {/* <div className="bottom">
                            <a className="navbar-brand-mobile" href="/Hero">
                                <img src={logo} alt="logo" className="logo"/>
                            </a>
                        </div> */}
                    </div>
                </ul>
            </div>
        }
        </div>
    );
}