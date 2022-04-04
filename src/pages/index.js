import React from 'react'
import { Helmet } from 'react-helmet'

import 'popper.js'
import '../dist/css/bootstrap.min.css'
import '../styles/style.css'
import '../styles/page.css'
import favicon16 from '../images/favicon-16x16.png'
import favicon32 from '../images/favicon-32x32.png'

import Navbar from '../components/Navbar';
import Contact from '../components/Contact.js'


const IndexPage = () => (
    <>
        <Helmet>
            <title>ImpactCMU</title>
            <link rel="icon" type="image/png" sizes="32x32" href={ favicon16 } />
            <link rel="icon" type="image/png" sizes="16x16" href={ favicon32 } />
        </Helmet>
        <Navbar/>
        <div className="spacer"></div>
        <div className="body">
            <h3 className="summary">
                Impact CMU is an end-of-the-semester showcase of CMU student-led social impact projects. 
            </h3>
            <div className="nav-grid">
                <a className="grid-item green-box" href="/about">About</a>
                <a className="grid-item green-box" href="/timeline">Event Schedule</a>
                <p className="grid-item green-box"></p>
                <p className="grid-item green-box"></p>
                <a className="grid-item green-box" href="https://forms.gle/LMyKcb1ctstv5XUN6" target="_blank">Submit a Project</a>
                <a className="grid-item green-box" href="/resources">Resources</a>
                <p className="grid-item green-box"></p>
                <p className="grid-item green-box"></p>
                <a className="grid-item green-box" href="/projects">Past Impact</a>
            </div>
        </div>
        <Contact/>

    </>
)

export default IndexPage