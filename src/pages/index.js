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
                <a className="grid-item green-box" href="/about">About</a>
                <a className="grid-item green-box" href="/timeline">Timeline</a>
                <p className="grid-item green-box"></p>
                <p className="grid-item green-box"></p>
                <a className="grid-item green-box" href="https://www.google.com">Submit a Project</a>
                <a className="grid-item green-box" href="/resources">Resources</a>
                <p className="grid-item green-box"></p>
                <p className="grid-item green-box"></p>
                <a className="grid-item green-box" href="/pastprojects">Past Impact</a>
            </div>
        </div>
    </div>
)

export default IndexPage