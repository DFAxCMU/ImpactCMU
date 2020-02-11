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

import logo from '../images/impactLogo_final_trans-tag.png'
import logo1 from '../images/newLogo1.png'
import logo2 from '../images/newLogo2.png'
//import logo3 from '../images/newLogo3.png'

import {
    Jumbotron,
    Button,
    Container,
    Row,
    Col,

} from 'react-bootstrap';

const custom_blue = '#2b6998'
//const custom_red = '#f3876f'
const custom_teal = '#c8e9e6' // original: #79c9c1
//const custom_orange = '#f1b584'

const IndexPage = ({ data }) => (
    <div>
        <Helmet>
            <title>ImpactCMU</title>
            <link rel="icon" type="image/png" sizes="32x32" href={ logo2 } />
            <link rel="icon" type="image/png" sizes="16x16" href={ logo2 } />
        </Helmet>
        <Container>
            <Row>
                <Col md={ 6 }>
                    <div style={{ backgroundSize: 'contain', width: '100%', height: '50vh', backgroundImage: 'url(' + logo1 + ')', minheight: 300, backgroundRepeat: 'no-repeat' }} />
                </Col>
                <Col md={ 6 }>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'center', height: '100%', backgroundPosition: 'center' }}>
                        <p>
                            Carnegie Mellon students are using their technical, art, business, and social science skills to solve problems at the local, national, and international levels.
                        </p>
                        <p>
                            ImpactCMU is a celebration and exhibition of this achievment.
                        </p>
                        <p>
                            Join us as we give visibility to the various projects going on around campus that are impacting lives around the world.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
        <Jumbotron id="apply" style={{ backgroundColor: custom_teal }}>
            <div className="container">
                <h1>
                    Interested in presenting?
                </h1>
                <p>
                    Fill out this form and apply with you and your team!
                    We love independent student social good projects and want them to have a space at ImpactCMU as well.
                </p>
                <Button
                    href="https://forms.gle/UQ4kwWpMi4Bss1Vb8"
		    style={{ backgroundColor: custom_blue }}
                >
                    Apply
                </Button>
            </div>
        </Jumbotron>

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
                location
            }
        }
      }
      allOrgsCsv {
        edges {
            node {
                name
                logo
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
