import React from 'react';
import { Carousel } from 'react-bootstrap';
import GalleryItem from './GalleryItem.js';

var slidesArr = [];
const Gallery = ({ data }) => {
    return (<section id="gallery">
        <h1>Gallery</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', width: 848}}>
            { data.edges.map(({ node }, i) => {
                return <GalleryItem node={ node } />
	    })}
        </div>
    </section>
    );
}

export default Gallery
