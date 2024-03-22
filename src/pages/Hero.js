import React from 'react';
import Draggable from "react-draggable";
import { useState, useEffect } from "react";

import '../dist/css/bootstrap.min.css';
import NavBarHero from "../components/NavBarHero";
import Nav from "react-bootstrap/Nav";

import 'popper.js'
import '../dist/css/bootstrap.min.css';
import '../styles/style.css';
import '../styles/page.css';
import '../styles/fonts.css';


const Hero = () => {
    const handleButtonClick = (url) => {
        // console.log(`${boxName} button clicked`);
        window.open(url, '_blank');
    };

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

    return (
      <>
        { (windowDimensions.width > 768) ? 
        <div>
          <NavBarHero />
        <section id="about">
          <div className="content">
            <Draggable defaultPosition={{x: 350, y: -36}}>
              <div className="draggable-box">
                <h2 class = "box-title">About</h2>
                <p class = "box-text">Impact CMU 2024 is an end of year showcase of CMU student-led social impact projects.</p>
              </div>
            </Draggable>
            <Draggable defaultPosition={{x: -400, y: 64}}>
              <div className="draggable-box">
                <p class = "box-text">Enter in your social good project for a chance to win $250!</p>
                <center>
                  <button><Nav.Link href="/Submit">Submit</Nav.Link></button>
                </center>
              </div>
            </Draggable>
            <div className="sketch-iframe">
              <iframe src="https://openprocessing.org/sketch/2185428/embed/" width="2400px" height="1224px"></iframe>
            </div>
          </div>
        </section>
        </div>
        :
        <div>
        <NavBarHero />
        <section id="about">
          <div className="content">
             <div className="draggable-box1">
                <p class = "box-text">Impact CMU 2024 is an end of year showcase of CMU student-led social impact projects.</p>
            </div>

            <div className="draggable-box2">
                <p class = "box-text">Enter in your social good project for a chance to win $250!</p>
                <center>
                  <button class="submit-button"><Nav.Link href="/Submit">Submit</Nav.Link></button>
                </center>
            </div>

            <div className="sketch-iframe">
              <iframe src="https://openprocessing.org/sketch/2187973/embed/" width="800px" height="1224px"></iframe>
            </div>
          </div>
        </section>
        </div>
        }
      </>
    );
  };

export default Hero;