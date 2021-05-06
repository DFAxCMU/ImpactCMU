import React from 'react';
import { Carousel } from 'react-bootstrap';

var slidesArr = [];
const Gallery = ({ data }) => {
    return (<section id="gallery">
        <h1>Gallery</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', width: 848}}>
            { data.edges.map(({ node }, i) => {
                return (<Carousel 
                    style={{ width: 400, height: 400, margin: 12 }}
                    indicators={ true }
                    interval={ 0 }
                >
		{ slidesArr = JSON.parse(node.slides) }
		{ slidesArr.map(item => {
		    return (<Carousel.Item>
		        <img
			    width="100%"
			    height="100%"
			    src={ '../images/' + item.slide }
			    alt={ item.altText }
			/>
		    </Carousel.Item>
		    );
		})}
                </Carousel>
                );
	    })}
        </div>
    </section>
    );
}

export default Gallery
