import React from 'react';
import submit from '../components/2024img/Submit.png';
import NavBar from "../components/NavBar";

import 'popper.js'
import '../dist/css/bootstrap.min.css';
import '../styles/style.css';
import '../styles/page.css';
import '../styles/fonts.css';

const Submit = () => {
    const handleButtonClick = (url) => {
        // console.log(`${boxName} button clicked`);
        window.open(url, '_blank');
        // Perform actions based on the boxName or specific logic for the button
    };

    return (
        <>
        <NavBar />
            <section id="submit" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <div className="container-fluid">
                    <div className=" text-center">
                        <div className="navbar-brand">
                            <img src={submit} alt="title-img" class="title-img"/>
                        </div>
                    </div>
                    <div class="OMG">
                        {/* <div class="boxes"> */}
                        {/* <h4 className="left-aligned-title">Project Awards</h4> */}
                            <div class = "award-boxes">
                                {/* <div class="inner d-flex flex-row justify-content-between w-100 container-fluid"> */}
                                    <div class="boxKMS">
                                        <h5>Board Award: $250</h5>
                                        <p>Decided by DFA board</p>
                                    </div>
                                    <div class="boxKMS">
                                        <h5>Most Impactful: $250</h5>
                                        <p>General student vote</p>
                                    </div>
                                    <div class="boxKMS">
                                        <h5>Faculty Favorite: $250</h5>
                                        <p>Decided by guest faculty judges</p>
                                    </div>
                                {/* </div> */}
                            </div>
                        {/* </div> */}
                        <center><h4 className="timeline-title">Timeline</h4></center>
                        <div className="timeline-container">
                            <div className="boxes33" style={{ display: 'flex'}}> 
                                {/* <div class="row1"> */}
                                    <div className="box2">
                                        <h5>March 17</h5>
                                        <h6 class="time2">2-3PM</h6>
                                        <p>Information Session</p>
                                    </div>
                                    <div className="box2">
                                        <h5>March 24</h5>
                                        <p>Project Registration Due</p>
                                    </div>
                                {/* </div> */}
                                {/* <div class="row2"> */}
                                    <div className="box2">
                                        <h5>March 31</h5>
                                        <h6 class="time2">1-3PM</h6>
                                        <p>Impact Poster Office Hours/Make-up Info Session</p>
                                    </div>
                                    <div className="box2">
                                        <h5>April 7</h5>
                                        <h6 class="time2">1-3PM</h6>
                                        <p>Impact Poster Office Hours (optional)</p>
                                    </div>
                                    <div className="box2">
                                        <h5>April 11</h5>
                                        <p>Impact CMU Date!! (first day of Carnival)</p>
                                    </div>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                    <center>
                        <div>
                            <button onClick={() => handleButtonClick('https://docs.google.com/forms/d/e/1FAIpQLSdXLtbzD7CaYo_54JB5bKdsDMDsQTxrx_Bg5YPVCwCc8WtdZQ/viewform?usp=sf_link')} class = "submit-button">Submit a project
                            </button>
                        </div>
                    </center>
                </div>
            </section>
    </>
    );
};

export default Submit;
