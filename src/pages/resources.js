import React from 'react'

import 'popper.js'
import '../dist/css/bootstrap.min.css'
//import '../dist/js/bootstrap.bundle.js'
import '../styles/style.css'
import '../styles/page.css'

import Resources from '../components/Resources';
import Navbar from '../components/Navbar';

const ResourcesPage = () => (
    <div>
        <Navbar />
        <Resources />
    </div>
)

export default ResourcesPage