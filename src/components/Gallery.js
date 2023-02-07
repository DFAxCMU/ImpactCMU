import React from 'react';
import poster1 from "../images/examples/KindnessFirstPenguin.png";
import poster2 from "../images/examples/GMB.png";
import poster3 from "../images/examples/SWSG.png";
import poster4 from "../images/examples/DiningServices.png";
import poster5 from "../images/examples/OBB.png";
import poster6 from "../images/examples/SustainCMU.png";
import poster7 from "../images/examples/WLSE.png";
import poster8 from "../images/examples/YMCAChangemakers.png";


const alt1 = "Kindness First Penguin poster";
const alt2 = "Global Medical Brigades poster";
const alt3 = "Strong Women Strong Girls poster";
const alt4 = "CMU Dining poster";
const alt5 = "Operation Better Block poster";
const alt6 = "Sustain CMU poster";
const alt7 = "Women Leaders of Science and Engineering poster";
const alt8 = "YMCA Changemakers poster";

const posters = [
    { image: poster1, alt: alt1  },
    { image: poster2, alt: alt2 },
    { image: poster3, alt: alt3 },
    { image: poster4, alt: alt4 },
    { image: poster5, alt: alt5 },
    { image: poster6, alt: alt6 },
    { image: poster7, alt: alt7 },
    { image: poster8, alt: alt8 }  
]

const Gallery = () => (
    <section id="gallery">
        <div className="content">
            <div className="center">
                <h1>Gallery</h1>
            </div>

            <div className="posters">
                { posters.map(poster => {
                    return <a className="poster-row" href={ poster.image } target="_blank">
                        <img className="poster" src={poster.image} alt={poster.alt}/>
                    </a>
                }) }
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
    </section>
)

export default Gallery
