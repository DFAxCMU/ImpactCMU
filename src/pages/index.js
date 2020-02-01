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
import {
    Jumbotron,
    Button,
    Container,
    Row,
    Col,

} from 'react-bootstrap';

const IndexPage = ({ data }) => (
    <div>
        <Helmet>
            <title>ImpactCMU</title>
            <link rel="icon" type="image/png" sizes="32x32" href={ favicon32 } />
            <link rel="icon" type="image/png" sizes="16x16" href={ favicon16 } />
        </Helmet>
        <Container>
            <Row>
                <Col md={ 6 }>
                    <div style={{ backgroundSize: 'contain', width: '100%', height: '50vh', backgroundImage: 'url(' + logo + ')', minheight: 300, backgroundRepeat: 'no-repeat' }} />
                </Col>
                <Col md={ 6 }>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundPosition: 'center' }}>
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
        <Jumbotron id="apply">
            <div className="container">
                <h1>
                    Interested in presenting?
                </h1>
                <p>
                    Fill out this form an apply with you and your team!
                    We love indepedent student social good projects and want them to have a space at ImpactCMU as well.
                </p>
                <Button
                    href="https://forms.gle/UQ4kwWpMi4Bss1Vb8"
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
