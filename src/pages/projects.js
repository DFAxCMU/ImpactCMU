import React from 'react'

import 'popper.js'
import '../dist/css/bootstrap.min.css'
//import '../dist/js/bootstrap.bundle.js'
import '../styles/style.css'
import '../styles/page.css'

import Resources from '../components/Resources';
import Navbar from '../components/Navbar';
import Card from '../components/Card';


const ResourcesPage = () => (
    <div>
        <Navbar />
        <Card 
            title="Past ImpactCMU Posters"
            tilt="tilt-c"
        />

        <Resources />
    </div>
)

export default ResourcesPage