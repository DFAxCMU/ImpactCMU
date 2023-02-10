import React from 'react'
import { Helmet } from 'react-helmet'
import favicon16 from '../images/favicon-16x16.png'
import favicon32 from '../images/favicon-32x32.png'
import ImpactCMU from './impactcmu.js'
import { SEO } from "../components/seo"

const IndexPage = ({ data }) => (
    <div>
        <Helmet>
            <title>ImpactCMU</title>
            <link rel="icon" type="image/png" sizes="32x32" href={ favicon16 } />
            <link rel="icon" type="image/png" sizes="16x16" href={ favicon32 } />
        </Helmet>
        <ImpactCMU/>
    </div>
)

export default IndexPage

export const Head = () => (
    <>
      <title>Hello World</title>
      <meta name="description" content="Impact CMU 2023 is an annual showcase of CMU student-led social impact projects." />
    </>
  )