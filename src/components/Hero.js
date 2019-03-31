import React from 'react';

import backgroundImage from '../images/banner.svg'

const Hero = () => (
    <div 
        className="jumbotron jumbotron-fluid"
        style={{ padding: 0, marginTop: 48 }}
    >
        <img width="100%" src={ backgroundImage } alt="" />
    </div>
)

export default Hero;
