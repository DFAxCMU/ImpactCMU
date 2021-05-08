import React from 'react'
import Link from 'gatsby-link'
import {graphql} from 'gatsby'

import 'popper.js'
import '../dist/css/bootstrap.min.css'
//import '../dist/js/bootstrap.bundle.js'
import '../styles/style.css'
import '../styles/page.css'
import { Helmet } from 'react-helmet'

import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import Logistics from '../components/Logistics';
import Apply from '../components/Apply';
import Prizes from '../components/Prizes';
import Resources from '../components/Resources';
import Contact from '../components/Contact';

//import schedule from '../data/timeline.csv'

import favicon16 from '../images/favicon-16x16.png'
import favicon32 from '../images/favicon-32x32.png'

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

const IndexPage = ({ data }) => (
    <div>
        <Helmet>
            <title>ImpactCMU</title>
            <link rel="icon" type="image/png" sizes="32x32" href={ favicon16 } />
            <link rel="icon" type="image/png" sizes="16x16" href={ favicon32 } />
        </Helmet>
        <Hero />
	<Gallery data={ data.allSlidesCsv } />
        <Prizes />
        <Apply />
        <Logistics data={ data.allTimelineCsv } />
        <Resources />
        <Contact />
    </div>
)

export default IndexPage

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
      allSlidesCsv {
        edges {
	    node {
	        name
		contact
                numSlides
                folder
	    }
	}
      }
  }
`
