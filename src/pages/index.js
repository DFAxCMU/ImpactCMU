import React from 'react'
import Link from 'gatsby-link'
import graphql from 'graphql'

import $ from 'jquery'
import 'popper.js'
import '../dist/css/bootstrap.min.css'
import '../styles/style.css'
import '../styles/page.css'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Logistics from '../components/Logistics'
import RSVP from '../components/RSVP'
import Orgs from '../components/Orgs'
import Apply from '../components/Apply'
import Projects from '../components/Projects'

const IndexPage = ({ data }) => (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Logistics />
        <RSVP />
        <Orgs data={ data }/>
        <Apply />
        <Projects />
    </div>
)

export default IndexPage

export const query = graphql`
    query ImageQuery {
        allFile {
            edges{
                node{
                    relativePath,
                    publicURL
                }
            }
        }
}`

/*
            <div
                style={{ 
                    width: '100%',
                    height: '512',
                    maxHeight: '100vh',
                    backgroundImage: 'url(\'' + backgroundImage + '\')',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }} />
 *
 * */
