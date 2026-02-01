import React from 'react';
import Draggable from "react-draggable";
import { useState, useEffect, useRef} from "react";
import herosphere from '../components/2025img/herosphere.svg';
import wordmark from '../components/2025img/wordmark.svg';
import imlazy from '../components/2025img/imlazy.svg';
import slice from '../components/2025img/slice.svg';

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
    // Perform actions based on the boxName or specific logic for the button
  };

  const [windowDimensions, setWindowDimensions] = useState({ width: 1000, height: 800 });
  const boxRef = useRef(null);

  useEffect(() => {
      function handleResize() {
          const { innerWidth: width, innerHeight: height } = window;
          setWindowDimensions({ width, height });
      };

      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
  }, []);

  // const handleDrag = (e) => {
  //     const box = boxRef.current;
  //     const { clientX, clientY } = e;
  //     const { width, height } = windowDimensions;

  //     // Ensure the box stays within the screen dimensions
  //     const boxWidth = box.offsetWidth;
  //     const boxHeight = box.offsetHeight;

  //     let newLeft = clientX - boxWidth / 2;
  //     let newTop = clientY - boxHeight / 2;

  //     if (newLeft < 0) newLeft = 0;
  //     if (newTop < 0) newTop = 0;
  //     if (newLeft + boxWidth > width) newLeft = width - boxWidth;
  //     if (newTop + boxHeight > height) newTop = height - boxHeight;

  //     box.style.left = `${newLeft}px`;
  //     box.style.top = `${newTop}px`;
  // };

  const handleDrag = (e) => {
    const box = boxRef.current;
    const { clientX, clientY } = e;
    const { width, height } = windowDimensions;
  
    // Ensure the box stays within the screen dimensions
    const boxWidth = box.offsetWidth;
    const boxHeight = box.offsetHeight;
  
    let newLeft = clientX - boxWidth / 2;
    let newTop = clientY - boxHeight / 2;
  
    // Prevent the box from going beyond the left or top edges
    if (newLeft < 0) newLeft = 0;
    if (newTop < 0) newTop = 0;
  
    // Prevent the box from going beyond the right or bottom edges
    if (newLeft + boxWidth > width) newLeft = width - boxWidth;
    if (newTop + boxHeight > height) newTop = height - boxHeight;
  
    box.style.left = `${newLeft}px`;
    box.style.top = `${newTop}px`;
  };
  


// const Hero = () => {
//     const handleButtonClick = (url) => {
//         // console.log(`${boxName} button clicked`);
//         window.open(url, '_blank');
//     };

//     // Event listener to record the user's screen dimensions
//     const [windowDimensions, setWindowDimensions] = useState({ width: 1000, height: 800 });
    
//     useEffect(() => {
//         function handleResize() {
//             const { innerWidth: width, innerHeight: height } = window;
//             setWindowDimensions({ width, height });
//         };

//         window.addEventListener('resize', handleResize);
//         handleResize();
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

    return (
      <>
        { (windowDimensions.width > 768) ? 
        <div>
        <NavBarHero />
        <section id="hero">
          {/* <div className="centercontent"> */}
            <div className="content">
              <img src={imlazy} alt="title-img" className="imlazy" />
              {/* <div className="draggable-container" style={{ position: "relative", width: "100%", height: "100vh" }}> */}
                {/* <div className="heroBack"> */}
                  {/* <div class="column column-1">
                    <img src={wordmark} alt="title-img" className="wordmark" />
                    <div><h3>is an end of year showcase of CMU student-led social impact projects.</h3></div>
                  </div>
                  <div class="column column-2">
                    <img src={herosphere} alt="title-img" className="herosphere" />
                  </div> */}

                  {/* <Draggable bounds="parent">
                    <div className="draggable-box">
                      <h2 className="box-title">About</h2>
                      <p className="box-text">Impact CMU 2024 is an end-of-year showcase of CMU student-led social impact projects.</p>
                    </div>
                  </Draggable> */}
                {/* </div> */}
            </div>
            {/* </div> */}
              
              <Draggable bounds="parent">
                <div className="draggable-box poop1" style={{ position: "absolute", left: "53vw", top: "60vh" }}>
                  {/* <h2 className="box-title">About</h2> */}
                  <p className="box-text boxy">Come join us!</p>
                  <p className="box-text">Info sessions on March 16th (2-3 PM) and 23rd (3-4 PM) @ TEP 3801!</p>
                </div>
              </Draggable>
              <Draggable bounds="parent">
                <div className="draggable-box poop2" style={{ position: "absolute", left: "66vw", top: "41vh" }}>
                  {/* <h2 className="box-title">About</h2> */}
                  <p className="box-text"><center>Submit your work!</center></p>
                  <div>
                    <center>
                      <button onClick={() => handleButtonClick('https://forms.gle/z4EY2FSj4785bZYG6')} class = "herobutton">Submit
                      </button>
                    </center>
                  </div>
                </div>
              </Draggable>
            {/* </div> */}

            {/* <Draggable bounds="parent" defaultPosition={{x: 350, y: -36}}>
              <div className="draggable-box">
                <h2 class = "box-title">About</h2>
                <p class = "box-text">Impact CMU 2024 is an end of year showcase of CMU student-led social impact projects.</p>
              </div>
            </Draggable>
            <Draggable defaultPosition={{x: -400, y: 64}}>
              <div className="draggable-box">
                <h2 class = "box-title1"><bold>COME SEE IMPACT!!!</bold></h2>
                <p class = "box-text">April 11 @ Cohon University, 12-4 PM</p>
                <p class = "box-text">Free popcorn and enter raffles for prizes!</p> */}
                {/* <p class = "box-text">FREE FOOD PROVIDED</p> */}
                {/* <center>
                  <button><Nav.Link href="/Submit">Submit</Nav.Link></button>
                </center> */}
              {/* </div>
            </Draggable> */}
            {/* <div className="sphere">
              <iframe src="https://openprocessing.org/sketch/2529022/embed/" width="400" height="400"></iframe>
            </div> */}
            {/* <div className="sketch-iframe">
              <iframe src="https://openprocessing.org/sketch/2185428/embed/" width="2400px" height="1224px"></iframe>
            </div> */}
        </section>
        </div>
        :
        <div>
        <NavBarHero />
        <section id="hero">
          {/* <img src={herosphere} alt="title-img" className="herosphere" /> */}
          <div className="content">
            {/* <img src={herosphere} alt="title-img" className="herosphere" /> */}
            {/* <img src={slice} alt="title-img" className="slice" /> */}
            <div className="heromobcontent">
              {/* <img src={herosphere} alt="title-img" className="herosphere" /> */}
              <div className="slicemove"><img src={slice} alt="title-img" className="slice" /></div>
              <div className="imtired">
                <img src={wordmark} alt="title-img" className="wordmark" />
                <p className="heromaintxt">is an end-of-year showcase of CMU student-led social impact projects.</p>
                <div className="draggable-box poop2">
                  {/* <h2 className="box-title">About</h2> */}
                  <p className="box-text"><center>Submit your work!</center></p>
                  <div>
                    <center>
                      <button onClick={() => handleButtonClick('https://forms.gle/z4EY2FSj4785bZYG6')} class = "herobutton">Submit
                      </button>
                    </center>
                  </div>
                </div>
                <div className="draggable-box poop1">
                  {/* <h2 className="box-title">About</h2> */}
                  <p className="box-text boxy">Come join us!</p>
                  <p className="box-text">Info sessions on March 16th (2-3 PM) and 23rd (3-4 PM) @ TEP 3801!</p>
                </div>
              </div>
            </div>
            {/* <div className="sketch-iframe">
              <iframe src="https://openprocessing.org/sketch/2187973/embed/" width="800px" height="1224px"></iframe>
            </div> */}
          </div>
        </section>
        </div>
        }
      </>
    );
  };

export default Hero;
