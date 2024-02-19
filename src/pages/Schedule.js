import React from 'react';
import schedule from '../components/2024img/Schedule.png';
import NavBar from "../components/NavBar";

const Hero = () => (
    <>
        <NavBar />
        <section id="schedule" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className="container-fluid">
                <div className=" text-center">
                    <div className="navbar-brand">
                        <img src={schedule} alt="title-img" class="title-img"/>
                    </div>
                </div>
                <div className="boxes1" style={{ display: 'flex'}}> 
                    {/* <div class="row1"> */}
                    <div className="timeline-container">
                        <div className="box3">
                            <h3>Kickoff Ceremony</h3>
                            <h3 class = "time">12PM</h3>
                            <p>Listen to the opening ceremony with a special guest speaker. Project voting starts.</p>
                        </div>
                        <div className="box3">
                            <h3>Project Showcase</h3>
                            <h3 class = "time">12-4PM</h3>
                            <p>View impactful projects from our participants and learn about their work.</p>
                        </div>
                    {/* </div> */}
                    {/* <div class="row2"> */}
                        <div className="box3">
                            <h3>Voting Closes</h3>
                            <h3 class = "time">4PM</h3>
                            <p>Enter into raffles to earn prizes and eat free pizza and popcorn!</p>
                        </div>
                        <div className="box3">
                            <h3>Closing Ceremony</h3>
                            <h3 class = "time">4:30PM</h3>
                            <p>Listen to the closing ceremony. Project voting ends.</p>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </section>
    </>
)

export default Hero;