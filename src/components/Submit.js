import React from 'react';
import submit from './2024img/Submit.png';

const Submit = () => {
    const handleButtonClick = (url) => {
        // console.log(`${boxName} button clicked`);
        window.open(url, '_blank');
        // Perform actions based on the boxName or specific logic for the button
    };

    return (
        <section id="submit">
            <div className="container-fluid">
                <div className=" text-center">
                    <a className="navbar-brand" href="/home">
                        <img src={submit} alt="title-img" class="title-img"/>
                    </a>
                </div>
                <div class="boxes">
                    <div class="inner d-flex flex-row justify-content-between w-100 container-fluid">
                        <h4>Project Awards</h4>
                        <div class="box">
                            <h3>Board Award: $250</h3>
                            <p>Decided by DFA board</p>
                        </div>
                        <div class="box">
                            <h3>Most Impactful: $250</h3>
                            <p>General student vote</p>
                        </div>
                        <div class="box">
                            <h3>Faculty Favorite: $250</h3>
                            <p>Decided by guest faculty judges</p>
                        </div>
                    </div>
                </div>
                <div className="boxes1" style={{ display: 'flex'}}> 
                    <h4>Timeline</h4>
                    <div class="row1">
                        <div className="box1">
                            <h3>March 3</h3>
                            <p>Project submission form due</p>
                        </div>
                        <div className="box1">
                            <h3>March 26</h3>
                            <p>Mandatory information session</p>
                        </div>
                    </div>
                    <div class="row2">
                        <div className="box1">
                            <h3>April 2</h3>
                            <p>Optional poster session</p>
                        </div>
                        <div className="box1">
                            <h3>April 9</h3>
                            <p>Poster submission due</p>
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
