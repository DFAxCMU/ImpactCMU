import React from 'react';
import schedule from '../components/2024img/Schedule.png';
import NavBar from "../components/NavBar";

import 'popper.js'
import '../dist/css/bootstrap.min.css';
import '../styles/style.css';
import '../styles/page.css';
import '../styles/fonts.css';

const Hero = () => (
    <>
        <NavBar />
        <section id="schedule">
            <div className="container-fluid">
                <div className="text-center omega">
                    <h4>EVENT SCHEDULE</h4>
                    <h5>DATE, TIME, LOCATION</h5>
                    {/* <div className="navbar-brand">
                        <img src={schedule} alt="title-img" class="title-img"/>
                    </div> */}
                </div>
                <div class="OMG">
                    {/* <center><h4 className="date-title">April 11 @ Cohon University Center</h4></center> */}
                    <div className="boxes1" style={{ display: 'flex'}}> 
                        {/* <div class="row1"> */}
                        <div className="timeline-container">
                            <div className="box3">
                                <h6>Event</h6>
                                <h5 class = "time">time</h5>
                                <p>desc</p>
                            </div>
                            <div className="box3">
                                <h6>Event</h6>
                                <h5 class = "time">time</h5>
                                <p>desc</p>
                            </div>
                        {/* </div> */}
                        {/* <div class="row2"> */}
                            <div className="box3">
                                <h6>Event</h6>
                                <h5 class = "time">time</h5>
                                <p>desc</p>
                            </div>
                            <div className="box3">
                                <h6>Event</h6>
                                <h5 class = "time">time</h5>
                                <p>desc</p>
                            </div>
                        </div>
                        {/* </div> */}

                        
                    </div>
                    <center>
                        <div className="box4">
                            <h4>RAFFLE PRIZES</h4>
                            <p>desc</p>
                        </div>
                    </center>
                    {/* <center><h4 className="proj-awards-title">Raffle Prizes</h4></center>
                        <div class = "award-boxes"> */}
                            {/* <div class="inner d-flex flex-row justify-content-between w-100 container-fluid"> */}
                                {/* <div class="boxKMS">
                                    <h2 class = "box-title1">🦆💡</h2>
                                    <p>Duck Light</p>
                                </div>
                                <div class="boxKMS">
                                    <h2 class = "box-title1">🦆🍌</h2>
                                    <p>Banana Duck Plushie</p>
                                </div>
                                <div class="boxKMS">
                                    <h2 class = "box-title1">🪿🔑</h2>
                                    <p>Goose Key Holder</p>
                                </div> */}
                            {/* </div> */}
                        {/* </div> */}
                </div>
                
            </div>
        </section>
    </>
)

export default Hero;
