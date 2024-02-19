import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const logo = "./2024img/logo.png";

/*  TopBar is the navigation bar at the top of every page */

export default function TopBar(props) {

    return (
        <div>
            <Navbar>
                <div className="navContainer">
                <div className="top-bar-wide top-bar">
                    <a href="/">
                        <div className="logoContainer">
                            <img src={logo} alt="logo" className="logo"/>
                        </div>
                    </a>
                    <Nav className="nav-pages">
                        <Nav.Link href="/About">About</Nav.Link>
                        <Nav.Link href="/Schedule">Schedule</Nav.Link>
                        <Nav.Link href="/Submit">Submit</Nav.Link>
                        <Nav.Link href="https://www.impactcmu.com" target="_blank_">
                            ImpactCMU
                        </Nav.Link>
                    </Nav>
                </div>
                </div>
            </Navbar>
        </div>
    );
}