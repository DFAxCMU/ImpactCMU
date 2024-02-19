import React from 'react'
import { Helmet } from 'react-helmet'
import favicon16 from '../images/favicon-16x16.png'
import favicon32 from '../images/favicon-32x32.png'
// import ImpactCMU from './impactcmu.js'
import NavBar from "../components/NavBar";
import Hero from './Hero';

const IndexPage = ({ data }) => (
    <div>
        <Helmet>
            <title>ImpactCMU</title>
            <link rel="icon" type="image/png" sizes="32x32" href={ favicon16 } />
            <link rel="icon" type="image/png" sizes="16x16" href={ favicon32 } />
        </Helmet>
        <NavBar/>
        <Hero/>
        {/* <ImpactCMU/> */}
    </div>
)

export default IndexPage