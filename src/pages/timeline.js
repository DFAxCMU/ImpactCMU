import React from 'react'
import {graphql} from 'gatsby'

import 'popper.js'
import '../dist/css/bootstrap.min.css'
//import '../dist/js/bootstrap.bundle.js'
import '../styles/style.css'
import '../styles/page.css'

import Logistics from '../components/Logistics';
import Contact from '../components/Contact';

const TimelinePage = ({ data }) => (
    <div>
        <Logistics data={ data.timeline } />
        <Contact />
    </div>
)

export default TimelinePage

export const query = graphql`
    query ImageQuery {
      timeline: allTimelineCsv {
        edges {
            node {
                time
                name
                detail
            }
        }
      }
  }
`
