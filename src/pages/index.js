import React from 'react'

import 'popper.js'
import '../dist/css/bootstrap.min.css'
import '../styles/style.css'
import '../styles/page.css'
import { Helmet } from 'react-helmet'

import Contact from '../components/Contact';

import favicon16 from '../images/favicon-16x16.png'
import favicon32 from '../images/favicon-32x32.png'

const IndexPage = () => (
    <div>
        <Helmet>
            <title>ImpactCMU</title>
            <link rel="icon" type="image/png" sizes="32x32" href={ favicon16 } />
            <link rel="icon" type="image/png" sizes="16x16" href={ favicon32 } />
        </Helmet>
        <Contact />
    </div>
)

export default IndexPage