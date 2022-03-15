import React from 'react'
import {graphql} from 'gatsby'

import 'popper.js'
import '../dist/css/bootstrap.min.css'
//import '../dist/js/bootstrap.bundle.js'
import '../styles/style.css'
import '../styles/page.css'

import Gallery from '../components/Gallery';
import Contact from '../components/Contact';

const ProjectsPage = ({ data }) => (
    <div>
	      <Gallery slideData={ data.slides } slideImages={ data.gallery }/>
        <Contact />
    </div>
)

export default ProjectsPage

export const query = graphql`
    query ImageQuery {
      slides: allSlidesCsv {
        edges {
	    node {
	        name
		contact
                numSlides
                folder
	    }
	}
      }
    gallery: allFile(filter:{relativeDirectory:{regex:"/gallery/"}}){
	projects:group(field: relativeDirectory) {
	  dir: fieldValue
	  edges {
	    node {
	      childImageSharp {
		fluid {
		    ...GatsbyImageSharpFluid
		}
	      }
	    }
	  }
	}
      }
  }
`
