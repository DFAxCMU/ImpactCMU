import React from 'react';
import slide from '../images/test_slide.jpg';
import { Carousel } from 'react-bootstrap';

const Gallery = () => (
    <section id="gallery">
        <h1>Gallery</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', width: 848}}>
            { [1, 2, 3, 4, 5, 6, 7].map(i => {
                return <Carousel 
                    style={{ width: 400, height: 400, margin: 12 }}
                    indicators={ true }
                    interval={ 0 }
                >
                    <Carousel.Item>
                        <img width="100%" height="100%" src={ slide } alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" height="100%" src={ slide } alt="" />
                    </Carousel.Item>
                </Carousel>
            })}
        </div>
    </section>
)

export default Gallery
