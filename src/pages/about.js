import React from 'react'

import 'popper.js'
import '../dist/css/bootstrap.min.css'
//import '../dist/js/bootstrap.bundle.js'
import '../styles/style.css'
import '../styles/page.css'
import Navbar from '../components/Navbar';
import Card from '../components/Card'

const AboutPage = () => (
    <div>
        <Navbar />
        <div className="body-about">
            <Card 
                title="About"
                body="Organized by Design for America, the goal of Impact CMU is to celebrate our successes and to create a culture of social good on campus."
                bodyClass="large"
            />
            <Card 
                title="Prizes"
                body="Until May 11th at 11:59 PM, the ImpactCMU gallery will be open for public browsing. Carnegie Mellon students and faculty will also be able to vote for their 3 favorite projects and help them win funding!"
                bodyClass="large"
            />
            <div className="body">
                <Card 
                    title="Project Prizes"
                    body="Each of the top 5 project submissions will receive $1000 in funds to support your project."
                    bodyClass="medium"
                />
                <Card 
                    title="Voter Prizes"
                    body="Voters will be automatically entered in a raffle for a variety of prizes (bluetooth speaker, plushies, etc)."
                    bodyClass="medium"
                />
            </div>
        </div>
        <div className="spacer"></div>
    </div>
)

export default AboutPage