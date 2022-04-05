import React from 'react'
import { Helmet } from 'react-helmet'

import 'popper.js'
import '../dist/css/bootstrap.min.css'
//import '../dist/js/bootstrap.bundle.js'
import '../styles/style.css'
import '../styles/page.css'

import Card from '../components/Card';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact.js'


import favicon16 from '../images/favicon-16x16.png'
import favicon32 from '../images/favicon-32x32.png'


const ResourcesPage = () => (
    <div>
        <Helmet>
            <title>ImpactCMU</title>
            <link rel="icon" type="image/png" sizes="32x32" href={ favicon16 } />
            <link rel="icon" type="image/png" sizes="16x16" href={ favicon32 } />
        </Helmet>
        <Navbar />
        <Card 
            title="Resources"
            tilt="tilt-c"
        />
        <div className="body">
            <div className="summary">
            <h3>
                For participating projects, check out the slides from our presenters workshop or the project poster template provided for your convenience!
            </h3>
            <h3>
                Make sure to submit your poster before the submission deadline, and we'll handle the printing.
            </h3>
            </div>
            <div className="nav-grid">
                <a className="grid-item green-box" href="https://docs.google.com/presentation/d/1dU9skh6-5CM-VSSUwPlrhZl1r0R7ZgpBos3oBh0aqOM/edit#slide=id.g12060692642_0_0">Workshop Slides</a>
                <a className="grid-item green-box" href="https://www.figma.com/file/le5xvR8H4ya6Aa5GmyyYLY/Impact-CMU-Poster-Template?node-id=0%3A1">Poster Template</a>
            </div>
        </div>
    </div>
)

export default ResourcesPage