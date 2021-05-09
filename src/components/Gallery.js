import React from 'react';
import GalleryItem from './GalleryItem.js';

var slidesArr = [];
const Gallery = ({ slideData, slideImages }) => {
    const images = slideImages.projects.reduce((images, next) => {
        return { 
            ...images,
            [next.dir.substring(8)]: next.edges,
        }
    }, {})
    console.log(images)
    return (<section id="gallery">
	<h1>Gallery</h1>
	<div style={{ display: 'flex', flexWrap: 'wrap', width: 848}}>
	    { slideData.edges.map(({ node }, i) => {
		return <GalleryItem node={ node } images={ images[node.folder] }/>
	    })}
	</div>
        <a href="https://forms.gle/aV7foVz5zqytMAuT6" target="_blank">
            <div className="gallery-button">
	        Vote!
            </div>
        </a>
    </section>
    );
}

export default Gallery
