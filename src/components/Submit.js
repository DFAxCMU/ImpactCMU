import React from 'react';
import submit from './2024img/Submit.png';

const Submit = () => {
    const handleButtonClick = (url) => {
        // console.log(`${boxName} button clicked`);
        window.open(url, '_blank');
        // Perform actions based on the boxName or specific logic for the button
    };

    return (
        <section id="submit" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className="container-fluid">
                <div className=" text-center">
                    <a className="navbar-brand" href="/home">
                        <img src={submit} alt="title-img" class="title-img"/>
                    </a>
                </div>
                <div class="OMG">
                    <div class="boxes">
                    {/* <h4 className="left-aligned-title">Project Awards</h4> */}
                        <div class="inner d-flex flex-row justify-content-between w-100 container-fluid">
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
                        </div>
                    </div>
                    <div className="timeline-container">
                    {/* <h4 className="timeline-title">Timeline</h4> */}
                        <div className="boxes" style={{ display: 'flex'}}> 
                            <div class="row1">
                                <div className="box2">
                                    <h5>March 3</h5>
                                    <p>Project submission form due</p>
                                </div>
                                <div className="box2">
                                    <h5>March 26</h5>
                                    <p>Mandatory information session</p>
                                </div>
                            </div>
                            <div class="row2">
                                <div className="box2">
                                    <h5>April 2</h5>
                                    <p>Optional poster session</p>
                                </div>
                                <div className="box2">
                                    <h5>April 9</h5>
                                    <p>Poster submission due</p>
                                </div>
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
    );
};

export default Submit;
