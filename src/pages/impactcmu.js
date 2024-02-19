import React from 'react'
// import React, { useState, useEffect } from "react";

import NavBar from "../components/NavBar";


// import {HashRouter as Router, Routes, Route} from "react-router-dom";
// import { createBrowserHistory } from "history";


import 'popper.js'
import '../dist/css/bootstrap.min.css';
import '../styles/style.css';
import '../styles/page.css';
import '../styles/fonts.css';

import Hero from './Hero';
// import About from '../components/About';
// import Submit from '../components/Submit';
// import Schedule from '../components/Schedule';

// const history = createBrowserHistory();

function ImpactCMU() {
    return (
        <div>
            <Hero/>
        </div>
        

        // <Router baseline="/">
        //     <Routes>
        //         <Route exact path="/" element={<Hero />} />
        //         <Route path="/About" element={<About />} />
        //         <Route path="/Schedule" element={<Schedule />} />
        //         <Route path="/Submit" element={<Submit />} />
        //     </Routes>
        // </Router>
    );
}

export default ImpactCMU;