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
    <>
      <title>Impact CMU</title>
      <meta name="description" content="Impact CMU 2023 is an annual showcase of CMU student-led social impact projects." />
    </>
  )
