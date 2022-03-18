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
        <Navbar />
        <div>
            <Card 
                title="Timeline"
                body=""
                bodyClass="large"
            />
            <Timeline />
        </div>
    </div>
)

export default TimelinePage
