import React from 'react'

import 'popper.js'
import '../dist/css/bootstrap.min.css'
import '../styles/style.css'
import '../styles/page.css'

import Navbar from '../components/Navbar';

const IndexPage = () => (
    <div id="page">
        <Navbar/>
        <div className="body">
            <h3 className="summary">
                Impact CMU is an end-of-the-semester showcase of CMU student-led social impact projects. 
            </h3>
            <div className="nav-grid">
                <p className="grid-item green-box">About</p>
                <p className="grid-item green-box">Timeline</p>
                <p className="grid-item green-box"></p>
                <p className="grid-item green-box"></p>
                <p className="grid-item green-box">Submit a Project</p>
                <p className="grid-item green-box">Resources</p>
                <p className="grid-item green-box"></p>
                <p className="grid-item green-box"></p>
                <p className="grid-item green-box">Past Impact</p>
            </div>
        </div>
    </div>
)

export default IndexPage