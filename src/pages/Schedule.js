
import React from 'react';
import NavBar from "../components/NavBar";
// import lamp from '../components/2026img/cat-lamp.png';
// import plush from '../components/2026img/cat-plush.png';
// import mug from '../components/2026img/cat-mug.png';

import lamp from '../components/2026img/cat-lamp.svg';
import plush from '../components/2026img/cat-plush.svg';
import mug from '../components/2026img/cat-mug.svg';

import 'popper.js'
import '../dist/css/bootstrap.min.css';
import '../styles/style.css';
import '../styles/page.css';
import '../styles/fonts.css';
import gradient from '../components/2026img/gradient-bg.png';
import group3 from '../components/2026img/group-3.svg';
import Footer from "../components/Footer";


const Hero = () => (
    <>
        <img className="bg-group-schedule" src={group3} alt="" />
        <img className="bg-gradient-schedule" src={gradient} alt="" />
        <NavBar />
        <div className="schedule-page">
        <section className="schedule">
            <div className="container-fluid">
                <div className="text-center omega">
                    <h4>Event Schedule</h4>
                    <h5 style={{fontWeight: 300}}>April 3rd @ the UC (Danforth Lounge), 11-4 PM</h5>
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
                                <h6>Lunch</h6>
                                <p class = "schedule-time">11AM - 12PM</p>
                                <p class = "schedule-desc">Enjoy free food and connect with other presenting teams.</p>
                            </div>
                            <div className="box3">
                                <h6>Kickoff</h6>
                                <p class = "schedule-time">12 - 12:30PM</p>
                                <p class = "schedule-desc">Get introduced to our projects and faculty judges. Project voting starts.</p>
                            </div>
                        {/* </div> */}
                        {/* <div class="row2"> */}
                            <div className="box3">
                                <h6>Open House + Voting</h6>
                                <p class = "schedule-time">12:30 - 3:30PM</p>
                                <p class = "schedule-desc">Vote for your favorite project and enter into our raffles to earn special prizes!</p>
                            </div>
                            <div className="box3">
                                <h6>Closing</h6>
                                <p class = "schedule-time">3:45 - 4PM</p>
                                <p class = "schedule-desc">Find out who the project and raffle winners are.</p>
                            </div>
                            {/* <center>
                                <img src={submitline} alt="title-img" class="submitline"/>  
                            </center> */}
                        </div>
                        {/* </div> */}
                        
                    </div>
                    <div className="box4">
                        <h4>Raffle Prizes</h4>
                            <div className="newcatimg">
                                <img src={lamp} alt="Cat Lamp" />
                                <img src={plush} alt="Cat Plush" />
                                <img src={mug} alt="Cat Mug" />
                            </div>
                    </div>
                </div>
                
            </div>
        </section>
        <Footer />
        </div>
    </>
)

export default Hero;
