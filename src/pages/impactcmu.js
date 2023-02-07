import React from 'react'
import Link from 'gatsby-link'
import {graphql} from 'gatsby'

import 'popper.js'
import '../dist/css/bootstrap.min.css'
import '../styles/style.css'
import '../styles/page.css'

import Hero from '../components/Hero';
import About from '../components/About';
import Timeline from '../components/Timeline';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';


import Logistics from '../components/Logistics';
import Apply from '../components/Apply';
import Prizes from '../components/Prizes';
import Resources from '../components/Resources';
import Contact from '../components/Contact';

// import schedule from '../data/timeline.csv'


import {
    Jumbotron,
    Button,
    ButtonGroup,
    Container,
    Row,
    Col
} from 'react-bootstrap';

const impactBlue = '#04285a';
const impactLightBlue = '#2b7095';
const impactRed = '#c44536';
const impactYellow = '#fce4b5';
const impactBrown = '#772e25';

const ImpactCMU = ({ data }) => (
    <div>
        <Hero />
        <About />
        <Timeline />
        <Gallery />
        <Footer />
        
        {/* <Prizes />
        <Apply />
        <Logistics data={ data.allTimelineCsv } />
        <Resources />
        <Contact /> */}
    </div>
)

export default ImpactCMU

export const query = graphql`
    query ImageQuery {
        allFile(filter:{relativeDirectory:{eq:"orgs"}}) {
            edges{
                node{
                    relativePath,
                    publicURL
                }
            }
        }
      allTimelineCsv {
        edges {
            node {
                time
                name
                detail
            }
        }
      }
}`
