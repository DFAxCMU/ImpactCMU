import React from 'react'
import { Helmet } from 'react-helmet'

import 'popper.js'
import '../dist/css/bootstrap.min.css'
//import '../dist/js/bootstrap.bundle.js'
import '../styles/style.css'
import '../styles/page.css'

import Card from '../components/Card';
import Navbar from '../components/Navbar';

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
            title='Coming Soon!'
            tilt='tilt-c'
        />
    </div>
)

export default ResourcesPage