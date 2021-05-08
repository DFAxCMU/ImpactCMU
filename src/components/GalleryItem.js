import React from 'react';
import { Carousel } from 'react-bootstrap';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

const GalleryItem = (props) => {
    console.log("TICK");
    console.log(props);
    const images = props.query.project("../images/" + props.node.folder);
    return (<Carousel 
        style={{ width: 400, height: 400, margin: 12 }}
        indicators={ true }
        interval={ null }
        key={ props.node.folder }
    >
        { images.edges.map((edge, i) => {
            return (<Carousel.Item key={ props.node.folder + i }>
                <Img
		    fluid={ edge.node.childImageSharp.fluid }
                    alt={ "Alt text" }
                />
            </Carousel.Item>
            );
        })}
    </Carousel>
    );
    
/*
    const r = [...Array(parseInt(node.numSlides)).keys()];
    return (<Carousel 
        style={{ width: 400, height: 400, margin: 12 }}
        indicators={ true }
        interval={ null }
        key={ node.folder }
    >
        { r.map(i => {
            return (<Carousel.Item key={ node.folder + i }>
                <img
                    width="100%"
                    height="100%"
                    src={ require('../images/' + node.folder + '/slide' + i + '.jpg') }
                    alt={ "Alt text" }
                />
            </Carousel.Item>
            );
        })}
    </Carousel>
    );
    */
}

export default GalleryItem;

export const query = graphql`
    query SlideQuery($folder: String) {
        allFile(filter: {relativeDirectory:{ eq: $folder }}) {
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
`
