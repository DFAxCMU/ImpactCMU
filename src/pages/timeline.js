import React from 'react'
// import {graphql} from 'gatsby'

import 'popper.js'
import '../dist/css/bootstrap.min.css'
//import '../dist/js/bootstrap.bundle.js'
import '../styles/style.css'
import '../styles/page.css'

import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Timeline from '../components/Timeline';

const TimelinePage = () => (
    <div>
        <Helmet>
            <title>ImpactCMU</title>
            <link rel="icon" type="image/png" sizes="32x32" href={ favicon16 } />
            <link rel="icon" type="image/png" sizes="16x16" href={ favicon32 } />
        </Helmet>
        <Navbar />
        <div>
            <Card 
                title="Timeline"
                body=""
                bodyClass="large"
                tilt="tilt-c"
            />
            <Timeline />
        </div>
    </div>
)

export default TimelinePage
