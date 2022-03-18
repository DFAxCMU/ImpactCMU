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
        <div className="body">
            <Card 
                title="About"
                body="Organized by Design for America, the goal of Impact CMU is to celebrate our successes and to create a culture of social good on campus."
                bodyClass="large"
            />
            
        </div>
    </div>
)

export default AboutPage