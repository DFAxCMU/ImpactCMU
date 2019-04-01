import React from 'react';
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';

import SectionTitle from './SectionTitle';
import dfaLogo from '../images/orange-header.jpg'

const About = () => ( 
    <section 
        id="about"
        className="main-container"
    >
        <Container>
            <SectionTitle title="About">
                We are showcasing the power Carnegie Mellon students have to make a positive change towards social good.
            </SectionTitle>
            <Row>
                <Col md={ 6 }>
                    <p>
                        Carnegie Mellon students are using their technical, art, business, and social science skills to solve problems at the local, national, and international levels.
                    </p>
                    <p>
                        ImpactCMU is a celebration and exhibition of this achievment.
                    </p>
                    <p>
                        Join us as we give visibility to the various projects going on around campus that are impacting lives around the world.
                    </p>
                </Col>
                <Col md={ 6 }>
                    <h2 className="text-center">Hosted By</h2>
                    <div className="container">
                        <a href="http://dfacmu.com">
                            <img
                                src={ dfaLogo } 
                                alt="DFAxCMU" 
                                style={{
                                    width: '100%',
                                    marginBottom: 24,
                                }}
                            />
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)

export default About
