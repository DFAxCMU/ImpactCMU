import React from 'react'

import NavBar from "../components/NavBar";

import {BrowserRouter, Routes, Route} from "react-router-dom";

import 'popper.js'
import '../dist/css/bootstrap.min.css';
import '../styles/style.css';
import '../styles/page.css';
import '../styles/fonts.css';

import Hero from '../components/Hero';
import About from '../components/About';
import Submit from '../components/Submit';
import Schedule from '../components/Schedule';

function ImpactCMU() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Hero />} />
                <Route path="/About" element={<About />} />
                <Route path="/Schedule" element={<Schedule />} />
                <Route path="/Submit" element={<Submit />} />
            </Routes>
        </BrowserRouter>
    );
}

export default ImpactCMU;