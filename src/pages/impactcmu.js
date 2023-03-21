import React from 'react'

import 'popper.js'
import '../dist/css/bootstrap.min.css'
import '../styles/style.css'
import '../styles/page.css'
import { SEO } from "../components/seo"

import Hero from '../components/Hero';
import About from '../components/About';
import Timeline from '../components/Timeline';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import Projects from '../components/Projects';


const ImpactCMU = () => (
    <div>
        <Hero />
        <Timeline />
        <Projects />
        <Gallery />
        <Footer />
    </div>
)

export default ImpactCMU
