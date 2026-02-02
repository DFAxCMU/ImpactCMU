import React, { useState, useEffect } from "react";
import "../styles/submit_style.css";

import gradient from "../components/2026img/gradient-bg.png";
import gradient2 from "../components/2026img/submit-grad-mi.png";
import gradient3 from '../components/2026img/submit-grad-ff.png';
import image from "../components/2026img/submit-grad-ba.png";
import group3 from "../components/2026img/group-3.svg";

import slack from "../components/2026img/streamline-logos_slack-logo.svg";
import instagram from "../components/2026img/instagram-logo-2-solid.svg";
import email from "../components/2026img/fontisto_email.svg";
import calendar from "../components/2026img/quill_calendar.svg";
import NavBar from "../components/NavBar";

const Submit = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
      const checkScreenSize = () => {
        setIsSmallScreen(window.innerWidth < 769);
      };
  
      checkScreenSize();
      window.addEventListener("resize", checkScreenSize);
  
      return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    const Award = ({ gradient, title, subtitle, amount }) => (
        <div className="card">
            <img className="card-gradient" src={gradient} alt="" />
            <h3>{title}</h3>
            <p>{subtitle}</p>
            <strong>{amount}</strong>
        </div>
        );
        
        const TimelineItem = ({ date, location, description }) => (
        <div className="card timeline-card">
            <h3>{date}</h3>
            <p className="location">{location}</p>
            <p>{description}</p>
        </div>
        );
    return (
    <div className="submit">
        {/* background visuals */}
        <img className="bg-group" src={group3} alt="" />
        <img className="bg-gradient" src={gradient} alt="" />
        <NavBar />
        {/* awards */}
        <section className="submit-section">
            <h2 className="section-title">Project Awards</h2>

            <div className={isSmallScreen ? "card-column" : "card-row"}>
                <Award gradient={image} title="Board Award" subtitle="Decided by DFA Board" amount="$250" />
                <Award gradient={gradient2} title="Most Impactful" subtitle="General Student Vote" amount="$250" />
                <Award gradient={gradient3} title="Faculty Favorite" subtitle="Decided by faculty judges" amount="$250" />
            </div>
        </section>

        {/* <h2 className="section-title">Timeline</h2> */}
        <section className="submit-section">
            <h2 className="section-title">Timeline</h2>

            <div className={isSmallScreen ? "timeline-column" : "timeline-row"}>
                <TimelineItem
                date="March 16, 2-3 PM"
                location="Tepper 3801"
                description="Impact CMU Info Session (Project Registration Due Friday 3/21, 11:59 PM)"
                />
                <TimelineItem
                date="March 23, 3-4 PM"
                location="Tepper 3801"
                description="Make-up Info Session"
                />
                <TimelineItem
                date="March 30, 1-3 PM"
                location="Tepper 3801"
                description="Impact Poster Workshop (Poster Submissions Due Sunday 3/30, 11:59 PM)"
                />
                <TimelineItem
                date="April 3, 11-4 PM"
                location="Cohon University Center (Danforth Lounge)"
                description="Impact CMU Date!"
                />
            </div>
        </section>


        {/* footer icons */}
        <footer className="footer">
            <img src={instagram} alt="Instagram" />
            <img src={calendar} alt="Calendar" />
            <img src={email} alt="Email" />
            <img src={slack} alt="Slack" />
        </footer>
    </div>
    );
};

export default Submit;







// import React, { useState, useEffect } from 'react';
// import submit from '../components/2024img/Submit.png';
// import vector1 from '../components/2025img/Vector.svg';
// import vector2 from '../components/2025img/Vector-2.svg';
// import NavBar from "../components/NavBar";

// import 'popper.js'
// import '../dist/css/bootstrap.min.css';
// import '../styles/style.css';
// import '../styles/page.css';
// import '../styles/fonts.css';

// const Submit = () => {
//     const handleButtonClick = (url) => {
//         // console.log(`${boxName} button clicked`);
//         window.open(url, '_blank');
//         // Perform actions based on the boxName or specific logic for the button
//     };

    // const [isSmallScreen, setIsSmallScreen] = useState(false);

    // useEffect(() => {
    //     const checkScreenSize = () => {
    //         setIsSmallScreen(window.innerWidth < 769);
    //     };

    //     // check the screen size on component mount
    //     checkScreenSize();

    //     // event listener for window resize
    //     window.addEventListener('resize', checkScreenSize);

    //     // unnecessary cleanup :P
    //     return () => window.removeEventListener('resize', checkScreenSize);
    // }, []);

//     return (
//         <>
//         <NavBar />
//         {isSmallScreen ? (
//             <section id="submit">
//                 <div class="grids_container">
//                     <h3>PROJECT AWARDS</h3>
//                     <hr class="line1" width="100%" color="black" size="5"></hr>
//                     <div class="pSubmit"><p class="changef1">Board Award</p></div>
//                     <div class="submit_desc">
//                         <p class="pSubmit3">Decided by DFA Board</p>
//                         <h8>$250</h8>
//                     </div>
//                     <div class="pSubmit"><p class="changef1">Most Impactful</p></div>
//                     <div class="submit_desc">
//                         <p class="pSubmit3">General Student Vote</p>
//                         <h8>$250</h8>
//                     </div>
//                     <div class="pSubmit"><p class="changef1">Faculty Favorite</p></div>
//                     <div class="submit_desc">
//                         <p class="pSubmit3">Decided by guest faculty judges</p>
//                         <h8>$250</h8>
//                     </div>
//                     <center>
//                         <img src={vector1} alt="title-img" class="vector"/>  
//                     </center>
//                     <h3>TIMELINE</h3>
//                     <hr class="line1" width="100%" color="black" size="5"></hr>
//                     <div class="pSubmit"><p class="changef">March 16, 2-3 PM @ TEP 3801</p></div>
//                     {/* <p className="lFont">Tepper 3801</p> */}
//                     <p class="pSubmit2point5">Impact CMU Info Session (Project Registration Due Friday 3/21, 11:59 PM)</p>

//                     <div class="pSubmit"><p class="changef">March 23, 3-4 PM @ TEP 3801</p></div>
//                     {/* <p className="lFont">Tepper 3801</p> */}
//                     <p class="pSubmit2point5">Make-up Info Session</p>

//                     <div class="pSubmit"><p class="changef">March 30, 1-3 PM @ TEP 3801</p></div>
//                     {/* <p className="lFont">Tepper 3801</p> */}
//                     <p class="pSubmit2point5">Impact Poster Workshop (Poster Submissions Due Sunday 3/30, 11:59 PM)</p>

//                     <div class="pSubmit"><p class="changef">April 3, 11-4 PM @ Danforth Lounge</p></div>
//                     {/* <p className="lFont">Cohon University Center</p> */}
//                     <p class="pSubmit2">Impact CMU Date!</p>
//                     <center>
//                         <img src={vector2} alt="title-img" class="vector2"/>  
//                     </center>
//                 </div>
//                     <center>
//                         <div class="buttoncenter">
//                             <button onClick={() => handleButtonClick('https://forms.gle/z4EY2FSj4785bZYG6')} class = "submit-button">Submit your project
//                             </button>
//                         </div>
//                     </center>
// {/* 
//                     <div><h8>Board Award</h8></div>
//                     <div><h8>Most Impactful</h8></div>
//                     <div><h8>Faculty Favorite</h8></div>
//                     <hr class="line1" width="100%" color="black" size="5"></hr>
//                     <img src={vector1} alt="title-img" class="vector"/>  
//                         <div><p>Decided by DFA Board</p>
//                         <h8>$250</h8></div>
//                     <div class="awardsub2">
//                         <div><p>General Student Vote</p>
//                         <h8>$250</h8></div>
//                     </div>
//                     <div class="awardsub3">
//                         <div><p>Decided by guest faculty judges</p>
//                         <h8>$250</h8></div>
//                     </div>
//                     <div><h8>TIMELINE</h8></div>
//                     <div class="autop"><p>Date Time Location</p></div>
//                     <div class="autop"><p>Date Time Location</p></div>
//                     <div class="autop"><p>Date Time Location</p></div>
//                     <hr class="line1" width="100%" color="black" size="5"></hr>
//                     <img src={vector2} alt="title-img" class="vector2"/>  
//                     <div class="awardsub1">
//                         <div><p>desc.</p></div>
//                     </div>
//                     <div class="awardsub2">
//                         <div><p>desc.</p></div>
//                     </div>
//                     <div class="awardsub3">
//                         <div><p>desc.</p></div>
//                     </div>
//                 </div>
//                     <center>
//                         <div>
//                             <button onClick={() => handleButtonClick('https://docs.google.com/forms/d/e/1FAIpQLSdXLtbzD7CaYo_54JB5bKdsDMDsQTxrx_Bg5YPVCwCc8WtdZQ/viewform?usp=sf_link')} class = "submit-button">Submit your project
//                             </button>
//                         </div>
//                     </center> */}
//             </section>
//         ) : (
//             <section id="submit">
//                 <div className="text-center omega">
//                     <h4>SUBMIT</h4>
//                 </div>
//                 <div class="grids_container">
//                     <div><h8>PROJECT AWARDS</h8></div>
//                     <div><h8>Board Award</h8></div>
//                     <div><h8>Most Impactful</h8></div>
//                     <div><h8>Faculty Favorite</h8></div>
//                     <hr class="line1" width="100%" color="black" size="5"></hr>
//                     <img src={vector1} alt="title-img" class="vector"/>  
//                     <div class="awardsub1">
//                         <div><p>Decided by DFA Board</p>
//                         <h8>$250</h8></div>
//                     </div>
//                     <div class="awardsub2">
//                         <div><p>General Student Vote</p>
//                         <h8>$250</h8></div>
//                     </div>
//                     <div class="awardsub3">
//                         <div><p>Decided by guest faculty judges</p>
//                         <h8>$250</h8></div>
//                     </div>
//                     <div class="timelineposition"><h8>TIMELINE</h8></div>
//                     <div class="autop"><p className="changefont">March 16, 2-3 PM</p></div>
//                     <div class="autop"><p className="changefont">March 23, 3-4 PM</p></div>
//                     <div class="autop"><p className="changefont">March 30, 1-3 PM</p></div>
//                     <div class="autop"><p className="changefont">April 3, 11-4 PM</p></div>
//                     <hr class="line1" width="100%" color="black" size="5"></hr>
//                     <img src={vector2} alt="title-img" class="vector2"/>  
//                     <div class="awardsub1">
//                         <div class="miniBox">
//                             <p className="locationfont">Tepper 3801</p>
//                             <p>Impact CMU Info Session (Project Registration Due Friday 3/21, 11:59 PM)</p>
//                             {/* <p></p> */}
//                         </div>
//                     </div>
//                     <div class="awardsub2">
//                         <div>
//                             <p className="locationfont">Tepper 3801</p>
//                             <p>Make-up Info Session</p>
//                         </div>
//                     </div>
//                     <div class="awardsub3">
//                         <div>
//                             <p className="locationfont">Tepper 3801</p>
//                             <p>Impact Poster Workshop (Poster Submissions Due Sunday 3/30, 11:59 PM)</p>
//                         </div>
//                     </div>
//                     <div class="awardsub4">
//                         <div>
//                             <p className="locationfont">Cohon University Center (Danforth Lounge)</p>
//                             <p>Impact CMU Date!</p>
//                         </div>
//                     </div>
//                 </div>
//                     <center>
//                         <div>
//                             <button onClick={() => handleButtonClick('https://forms.gle/z4EY2FSj4785bZYG6')} class = "submit-button">Submit your project
//                             </button>
//                         </div>
//                     </center>
//             </section>
//         )}
//         </>
//     );
// };

// export default Submit;
