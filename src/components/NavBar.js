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
                    <Nav className="inner d-flex flex-row container-fluid navbar-text">
                        <Nav.Link href="/About" className="hover-underline-animation">ABOUT</Nav.Link>
                        <Nav.Link href="/Submit" className="hover-underline-animation">SUBMIT</Nav.Link>
                        <Nav.Link href="/Schedule" className="hover-underline-animation">SCHEDULE</Nav.Link>
                        <Nav.Link href="/Projects" className="hover-underline-animation">PROJECTS</Nav.Link>
                        <Nav.Link href="https://dfaxcmu.notion.site/ecfaf84847754757bf0809df74a3253c?v=087d30146f574a93bc8b935ecb0f4560&pvs=4" className="hover-underline-animation" target="_blank_">
                            2024 ARCHIVE
                        </Nav.Link>
                    </Nav>
                

                    {/* <Nav className="ml-auto">
                        <div className="row">
                            <a href="https://www.instagram.com/impact.cmu/" target="_blank" rel="noopener noreferrer">
                                <img src={insta} alt="insta" width="20" height="20" />
                            </a>
                            <a href="https://join.slack.com/t/impactcmu/shared_invite/zt-2d9yxiqk0-l0NwYeY6tqH2IcXoa98p8Q" target="_blank">
                                <div className="col-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-slack" viewBox="0 0 16 16">
                                    <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z"/>
                                    </svg>
                                </div>
                            </a>
                            <a href="https://calendar.google.com/calendar/u/1?cid=Y181NjI5MGVmNTYxOWZjYjEwM2ZjYzA5ZDBmZTNiODk4MzY0NzIwODNmODlmYmExNjk5NGI4NDg5ZWM4NDlkZWNlQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20" target="_blank">
                                <div className="col-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-calendar-plus" viewBox="0 0 16 16">
                                        <path d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"/>
                                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                                    </svg>
                                </div>
                            </a>
                            <a href="mailto:impactcmu.dfa@gmail.com">
                                <div className="col-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope-open-heart" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l3.235 1.94a2.76 2.76 0 0 0-.233 1.027L1 7.384v5.733l3.479-2.087c.15.275.335.553.558.83l-4.002 2.402A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738l-4.002-2.401c.223-.278.408-.556.558-.831L15 13.117V7.383l-3.002 1.801a2.76 2.76 0 0 0-.233-1.026L15 6.217V5.4a1 1 0 0 0-.53-.882l-6-3.2ZM7.06.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </Nav> */}
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
                        <Nav.Link href="/Schedule" className="navtext">SCHEDULE</Nav.Link>
                        <Nav.Link href="/Projects" className="navtext">PROJECTS</Nav.Link>
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