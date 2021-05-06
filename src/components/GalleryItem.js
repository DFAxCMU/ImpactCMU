import React from 'react';
import { Carousel } from 'react-bootstrap';

const GalleryItem = ({ node }) => {
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
}

export default GalleryItem;
