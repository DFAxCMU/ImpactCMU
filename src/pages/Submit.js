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
                        <center><h4 className="proj-awards-title">Project Awards</h4></center>
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
                                <div className="box2">
                                    <h7>Important Links</h7>
                                    <a href="https://docs.google.com/presentation/d/15YQqN-r2izFn0XULLUpGix7AEn2SNAvM6uAaPI4aUnc/edit?usp=sharing"><small><p>Google Slides Template</p></small></a>
                                    <a href="https://www.figma.com/file/mfdoOWE3afaPEkxm8JPPRm/Poster-Template-2024?type=design&node-id=0%3A1&mode=design&t=Lc18MaRvxX3ONLPu-1"><small><p>Figma Template</p></small></a>
                                    <spacer></spacer>
                                    <p>Poster Templates</p>
                                    <a href="https://join.slack.com/t/impactcmu/shared_invite/zt-2d9yxiqk0-l0NwYeY6tqH2IcXoa98p8Q"><small><p>Join our Slack for reminders</p></small></a>
                                    <a href="https://drive.google.com/file/d/1dPr3J99kGOLjPJIUQJsZv2nI_3VU-W-l/view?usp=sharing"><small><p>Information Session Slides</p></small></a>
                                </div>
                                {/* <div className="box2">
                                    <h7>March 17</h7>
                                    <h6 class="time2">2-3PM</h6>
                                    <small><p>Tepper 2700</p></small>
                                    <spacer></spacer>
                                    <p>Information Session</p>
                                    <a href="https://join.slack.com/t/impactcmu/shared_invite/zt-2d9yxiqk0-l0NwYeY6tqH2IcXoa98p8Q"><small><p>Join our Slack for reminders</p></small></a>
                                </div> */}
                                <div className="box2">
                                    <h7>March 24</h7>
                                    <h6 class="time2">11:59PM</h6>
                                    <a href="https://docs.google.com/forms/d/1O4bAKdea37MeLood33SRPoDxVhQg_HnvssN0jZ5c6dU/edit"><small><p>Registration Form</p></small></a>
                                    <spacer></spacer>
                                    <p>Project Registration Due</p>
                                </div>
                                <div className="box2">
                                    <h7>March 31</h7>
                                    <h6 class="time2">1-3PM</h6>
                                    <small><p>Tepper 2700</p></small>
                                    <spacer></spacer>
                                    <p>Impact Poster Office Hours / Make-up Info Session</p>
                                </div>
                                <div className="box2">
                                    <h7>April 7</h7>
                                    <h6 class="time2">1-3PM</h6>
                                    <small><p>Tepper 2700</p></small>
                                    <p>Impact Poster Office Hours</p>
                                    <spacer></spacer>

                                    <h6 class="time3">11:59PM</h6>
                                    <p>Deadline for Poster Submissions</p>
                                    <a href="https://drive.google.com/drive/folders/1-KZ0eXliaa2ia_h_EX6i8c_sRmZsD93R?usp=sharing"><small><p>Poster Submissions Drive</p></small></a>
                                    
                                </div>
                                <div className="box2">
                                    <h7>April 11</h7>
                                    <h6 class="time2">12-4PM</h6>
                                    <small><p>Cohon University Center</p></small>
                                    <spacer></spacer>
                                    <p>Impact CMU Date!!</p>
                                </div>
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
