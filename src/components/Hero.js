import React from 'react';
import Draggable from "react-draggable";
import '../dist/css/bootstrap.min.css';
import NavBarHero from "../components/NavBarHero";

const Hero = () => {
    const handleButtonClick = (url) => {
        // console.log(`${boxName} button clicked`);
        window.open(url, '_blank');
        // Perform actions based on the boxName or specific logic for the button
    };

    return (
      <section id="about">
        <div className="content">
          <Draggable defaultPosition={{x: 350, y: 75}}>
            <div className="draggable-box">
              <h2 class = "box-title">About</h2>
              <p class = "box-text">Impact CMU 2024 is an end of year showcase of CMU student-led social impact projects.</p>
              <div className="ratio ratio-16x9">
                <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
              </div>
            </div>
          </Draggable>
          <Draggable defaultPosition={{x: -400, y: 100}}>
            <div className="draggable-box">
              <p class = "box-text">Enter in your social good project for a change to win $250!</p>
              <center>
                <button onClick={() => handleButtonClick('https://docs.google.com/forms/d/e/1FAIpQLSdXLtbzD7CaYo_54JB5bKdsDMDsQTxrx_Bg5YPVCwCc8WtdZQ/closedform')}>Submit</button>
              </center>
            </div>
          </Draggable>
          <div className="sketch-iframe">
            <iframe src="https://openprocessing.org/sketch/2178953/embed/" width="2000px" height="1200px"></iframe>
          </div>
        </div>
      </section>
    );
  };

export default Hero;