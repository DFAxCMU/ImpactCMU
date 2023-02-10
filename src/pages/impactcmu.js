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


const ImpactCMU = () => (
    <div>
        <Hero />
        <About />
        <Timeline />
        <Gallery />
        <Footer />
    </div>
)

export default ImpactCMU

export const Head = () => (
    <SEO title="ImpactCMU" description="Impact CMU 2023 is an annual showcase of CMU student-led social impact projects. Organized by Design for America, the goal of Impact CMU is to celebrate our successes and to create a culture of social good on campus."/>
  )
