import React from 'react';
import { Carousel } from 'react-bootstrap';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const GalleryItem = ({ node, images }) => {
    console.log(images)
    return <Carousel 
            style={{ width: 400, height: 400, margin: 12 }}
            indicators={ true }
            interval={ null }
            key={ node.folder }
        >
            { images.map((image, i) => {
                return (<Carousel.Item key={ node.folder + i }>
                    <Img
                        fluid={ image.node.childImageSharp.fluid }
                        alt={ "Alt text" }
                    />
                </Carousel.Item>
                );
            })}
        </Carousel>
}

export default GalleryItem;
