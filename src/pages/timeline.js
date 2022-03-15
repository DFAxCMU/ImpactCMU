import React from 'react'
import {graphql} from 'gatsby'

import 'popper.js'
import '../dist/css/bootstrap.min.css'
//import '../dist/js/bootstrap.bundle.js'
import '../styles/style.css'
import '../styles/page.css'

import Logistics from '../components/Logistics';
import Contact from '../components/Contact';

const TimelinePage = () => (
    <div>
        <Contact />
    </div>
)

export default TimelinePage