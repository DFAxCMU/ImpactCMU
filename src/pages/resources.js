import React from 'react'

import 'popper.js'
import '../dist/css/bootstrap.min.css'
//import '../dist/js/bootstrap.bundle.js'
import '../styles/style.css'
import '../styles/page.css'

import Card from '../components/Card';
import Navbar from '../components/Navbar';

const ResourcesPage = () => (
    <div>
        <Navbar />
        <Card
            title='Coming Soon!'
            tilt='tilt-c'
        />
    </div>
)

export default ResourcesPage