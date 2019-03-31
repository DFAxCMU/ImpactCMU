import React from 'react'
import Link from 'gatsby-link'
import {graphql} from 'gatsby'

import $ from 'jquery'
//window.$ = $

import 'popper.js'
import '../dist/css/bootstrap.min.css'
//import '../dist/js/bootstrap.bundle.js'
import '../styles/style.css'
import '../styles/page.css'
import { Helmet } from 'react-helmet'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Logistics from '../components/Logistics'
import RSVP from '../components/RSVP'
import Orgs from '../components/Orgs'
import Apply from '../components/Apply'
import Projects from '../components/Projects'

import favicon16 from '../images/favicon-16x16.png'
import favicon32 from '../images/favicon-32x32.png'

const IndexPage = ({ data }) => (
    <div>
        <Helmet>
            <title>ImpactCMU</title>
            <link rel="icon" type="image/png" sizes="32x32" href={ favicon32 } />
            <link rel="icon" type="image/png" sizes="16x16" href={ favicon16 } />

        </Helmet>
        <Navbar />
        <Hero />
        <About />
        <Apply />
        <Logistics />
        <RSVP />
        <Orgs data={ data.allFile }/>
        <Projects data={ data.allProjectsCsv } />
    </div>
)

export default IndexPage

export const query = graphql`
    query ImageQuery {
        allFile(filter:{relativeDirectory:{eq:"images/orgs"}}) {
            edges{
                node{
                    relativePath,
                    publicURL
                }
            }
        }
      allProjectsCsv {
        edges {
          node {
            name
            organization
            members
            description
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
