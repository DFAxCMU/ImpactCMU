import React from 'react'
import { Helmet } from 'react-helmet'

import 'popper.js'
import '../dist/css/bootstrap.min.css'
//import '../dist/js/bootstrap.bundle.js'
import '../styles/style.css'
import '../styles/page.css'
import Navbar from '../components/Navbar';
import Card from '../components/Card'
import Contact from '../components/Contact.js'

import favicon16 from '../images/favicon-16x16.png'
import favicon32 from '../images/favicon-32x32.png'
import plush1 from '../images/plush1.png'
import plush2 from '../images/plush2.png'
import plush3 from '../images/plush3.png'


const AboutPage = () => (
    <div>
        <Helmet>
            <title>ImpactCMU</title>
            <link rel="icon" type="image/png" sizes="32x32" href={ favicon16 } />
            <link rel="icon" type="image/png" sizes="16x16" href={ favicon32 } />
        </Helmet>
        <Navbar />
        <div className="body-about">
            <Card 
                title="About"
                body="Organized by Design for America, the goal of Impact CMU is to celebrate our successes and to create a culture of social good on campus."
                bodyClass="large"
                tilt="tilt-b"
            />
            <Card 
                title="Prizes"
                body="On April 22nd, we will have an in-person ImpactCMU gallery at the UC. Carnegie Mellon students and faculty will be able to vote for their favorite projects and help them win funding!"
                bodyClass="large"
                tilt="tilt-c"
            />
            <div className="body">
                <Card 
                    title="Project Prizes"
                    body="Each of the top 3 project submissions will receive $500 in funds to support the project."
                    bodyClass="medium"
                    tilt="tilt-a"
                />
                <div>
                <Card 
                    title="Voter Prizes"
                    body="Voters will be automatically entered in a raffle for a variety of prizes (bluetooth speaker, plushies, etc)."
                    bodyClass="medium"
                    tilt="tilt-d"
                />
                <div style={{display: "flex", justifyContent: "space-around"}}>
               <img className="tilt-c empty-box" src={plush1}/> 
               <img className="tilt-b empty-box" src={plush2}/> 
               <img className="tilt-c empty-box" src={plush3}/> 
                </div>
                </div>
            </div>
        </div>
        <Contact/>
    </div>
)

export default AboutPage