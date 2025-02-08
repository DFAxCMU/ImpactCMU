import React, { useState, useEffect } from 'react';
import submit from '../components/2024img/Submit.png';
import vector1 from '../components/2025img/Vector.svg';
import vector2 from '../components/2025img/Vector-2.svg';
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

    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth < 769);
        };

        // check the screen size on component mount
        checkScreenSize();

        // event listener for window resize
        window.addEventListener('resize', checkScreenSize);

        // unnecessary cleanup :P
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return (
        <>
        <NavBar />
        {isSmallScreen ? (
            <section id="submit">
                <div class="grids_container">
                    <h3>PROJECT AWARDS</h3>
                    <hr class="line1" width="100%" color="black" size="5"></hr>
                    <h8>Board Award</h8>
                    <div class="submit_desc">
                        <p>Decided by DFA Board</p>
                        <h8>$250</h8>
                    </div>
                    <h8>Most Impactful</h8>
                    <div class="submit_desc">
                        <p>General Student Vote</p>
                        <h8>$250</h8>
                    </div>
                    <h8>Faculty Favorite</h8>
                    <div class="submit_desc">
                        <p>Decided by guest faculty judges</p>
                        <h8>$250</h8>
                    </div>
                    <center>
                        <img src={vector1} alt="title-img" class="vector"/>  
                    </center>
                    <h3>TIMELINE</h3>
                    <hr class="line1" width="100%" color="black" size="5"></hr>
                    <div class="pSubmit"><p>Date Time Location</p></div>
                    <p class="pSubmit2">desc.</p>
                    <div class="pSubmit"><p>Date Time Location</p></div>
                    <p class="pSubmit2">desc.</p>
                    <center>
                        <img src={vector2} alt="title-img" class="vector2"/>  
                    </center>
                </div>
                    <center>
                        <div class="buttoncenter">
                            <button onClick={() => handleButtonClick('https://docs.google.com/forms/d/e/1FAIpQLSdXLtbzD7CaYo_54JB5bKdsDMDsQTxrx_Bg5YPVCwCc8WtdZQ/viewform?usp=sf_link')} class = "submit-button">Submit your project
                            </button>
                        </div>
                    </center>
{/* 
                    <div><h8>Board Award</h8></div>
                    <div><h8>Most Impactful</h8></div>
                    <div><h8>Faculty Favorite</h8></div>
                    <hr class="line1" width="100%" color="black" size="5"></hr>
                    <img src={vector1} alt="title-img" class="vector"/>  
                        <div><p>Decided by DFA Board</p>
                        <h8>$250</h8></div>
                    <div class="awardsub2">
                        <div><p>General Student Vote</p>
                        <h8>$250</h8></div>
                    </div>
                    <div class="awardsub3">
                        <div><p>Decided by guest faculty judges</p>
                        <h8>$250</h8></div>
                    </div>
                    <div><h8>TIMELINE</h8></div>
                    <div class="autop"><p>Date Time Location</p></div>
                    <div class="autop"><p>Date Time Location</p></div>
                    <div class="autop"><p>Date Time Location</p></div>
                    <hr class="line1" width="100%" color="black" size="5"></hr>
                    <img src={vector2} alt="title-img" class="vector2"/>  
                    <div class="awardsub1">
                        <div><p>desc.</p></div>
                    </div>
                    <div class="awardsub2">
                        <div><p>desc.</p></div>
                    </div>
                    <div class="awardsub3">
                        <div><p>desc.</p></div>
                    </div>
                </div>
                    <center>
                        <div>
                            <button onClick={() => handleButtonClick('https://docs.google.com/forms/d/e/1FAIpQLSdXLtbzD7CaYo_54JB5bKdsDMDsQTxrx_Bg5YPVCwCc8WtdZQ/viewform?usp=sf_link')} class = "submit-button">Submit your project
                            </button>
                        </div>
                    </center> */}
            </section>
        ) : (
            <section id="submit">
                <div className="text-center omega">
                    <h4>SUBMIT</h4>
                </div>
                <div class="grids_container">
                    <div><h8>PROJECT AWARDS</h8></div>
                    <div><h8>Board Award</h8></div>
                    <div><h8>Most Impactful</h8></div>
                    <div><h8>Faculty Favorite</h8></div>
                    <hr class="line1" width="100%" color="black" size="5"></hr>
                    <img src={vector1} alt="title-img" class="vector"/>  
                    <div class="awardsub1">
                        <div><p>Decided by DFA Board</p>
                        <h8>$250</h8></div>
                    </div>
                    <div class="awardsub2">
                        <div><p>General Student Vote</p>
                        <h8>$250</h8></div>
                    </div>
                    <div class="awardsub3">
                        <div><p>Decided by guest faculty judges</p>
                        <h8>$250</h8></div>
                    </div>
                    <div><h8>TIMELINE</h8></div>
                    <div class="autop"><p>Date Time Location</p></div>
                    <div class="autop"><p>Date Time Location</p></div>
                    <div class="autop"><p>Date Time Location</p></div>
                    <hr class="line1" width="100%" color="black" size="5"></hr>
                    <img src={vector2} alt="title-img" class="vector2"/>  
                    <div class="awardsub1">
                        <div><p>desc.</p></div>
                    </div>
                    <div class="awardsub2">
                        <div><p>desc.</p></div>
                    </div>
                    <div class="awardsub3">
                        <div><p>desc.</p></div>
                    </div>
                </div>
                    <center>
                        <div>
                            <button onClick={() => handleButtonClick('https://docs.google.com/forms/d/e/1FAIpQLSdXLtbzD7CaYo_54JB5bKdsDMDsQTxrx_Bg5YPVCwCc8WtdZQ/viewform?usp=sf_link')} class = "submit-button">Submit your project
                            </button>
                        </div>
                    </center>
            </section>
        )}
        </>
    );
};

export default Submit;
