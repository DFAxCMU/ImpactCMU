import React from 'react';

import SectionTitle from './SectionTitle';
import dfaLogo from '../images/orange-header.jpg'

const About = () => ( 
    <section 
        id="about"
        className="main-container"
    >
        <div className="container">
            <SectionTitle title="ImpactCMU">
                We are showcasing the power Carnegie Mellon students have to make a positive change towards social good.
            </SectionTitle>
            <div className="row">
                <div className="col-md-6">
                    <p className="subtitle-larger">
                        Carnegie Mellon students are using their technical, art, business, and social science skills to solve problems at the local, national, and itnernational levels.
                    </p>
                    <p className="subtitle-larger">
                        ImpactCMU is a celebration and exhibition of this achievment.
                    </p>
                    <p className="subtitle-larger">
                        Join us as we give visibility to the various projects going on around campus that are impacting lives around the world.
                    </p>
                </div>
                <div className="sidebar col-md-6">
                    <div className="side vertical-divider-left" style={{ height: '100%'}}>
                        <div style={{ paddingTop: 50 }} className="block clearfix">
                            <h2 className="title margin-top-clear" style={{ textAlign: 'center', }}>Hosted By</h2>
                            <div className="container">
                                <a href="http://dfacmu.com">
                                    <img
                                        src={ dfaLogo } 
                                        alt="DFAxCMU" 
                                        style={{
                                            maxWidth: '100%',
                                        }}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default About
