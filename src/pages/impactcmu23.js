import React from 'react'
import Link from 'gatsby-link'
import {graphql} from 'gatsby'

import 'popper.js'
import '../dist/css/bootstrap.min.css'
//import '../dist/js/bootstrap.bundle.js'
import '../styles/impactcmu21/style.css'
import '../styles/impactcmu21/page.css'

import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import Logistics from '../components/Logistics';
import Apply from '../components/Apply';
import Prizes from '../components/Prizes';
import Resources from '../components/Resources';
import Contact from '../components/Contact';

//import schedule from '../data/timeline.csv'


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

const OldIndexPage = ({ data }) => (
    <div>
        <Hero />
	    <Gallery />
        <Prizes />
        <Apply />
        <Logistics data={ data.allTimelineCsv } />
        <Resources />
        <Contact />
    </div>
)

export default OldIndexPage

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
