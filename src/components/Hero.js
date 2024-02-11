import React from 'react';
import Draggable from "react-draggable";

const Hero = () => {
    const handleButtonClick = (boxName) => {
        console.log(`${boxName} button clicked`);
        // Perform actions based on the boxName or specific logic for the button
    };

    return (
      <section id="about">
        <div className="content">
          <Draggable defaultPosition={{x: 350, y: 75}}>
            <div className="draggable-box">
              <h2 class = "box-title">About</h2>
              <p class = "box-text">Impact CMU 2024 is an end of year showcase of CMU student-led social impact projects.</p>
            </div>
          </Draggable>
          <Draggable defaultPosition={{x: -400, y: 100}}>
            <div className="draggable-box">
              <p class = "box-text">Enter in your social good project for a change to win $250!</p>
              <center>
                <button onClick={() => handleButtonClick('aboutBox')}>Submit</button>
              </center>
            </div>
          </Draggable>
        </div>
      </section>
    );
  };

export default Hero;