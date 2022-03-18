import React from "react";
import poster1 from "../images/IXEDU_poster.png";
import poster2 from "../images/CMUEVAL_poster.png";
import poster3 from "../images/ArtToConnect_poster.png";
import poster4 from "../images/Tech4Society_poster.png";
import poster5 from "../images/GWB_poster.png";
import poster6 from "../images/GreenShift_poster.png";

const alt1 = "IXEDU poster";
const alt2 = "CMU EVAL poster";
const alt3 = "Art To Connect poster";
const alt4 = "Tech4Society poster";
const alt5 = "CMU Global Water Brigades poster";
const alt6 = "Green Shift poster";

const posters = [
    { image: poster1, alt: alt1  },
    { image: poster2, alt: alt2 },
    { image: poster3, alt: alt3 },
    { image: poster4, alt: alt4 },
    { image: poster5, alt: alt5 },
    { image: poster6, alt: alt6 }
]

const Resources = () => (
    <section id="resources">
        <div className="empty-box">Past ImpactCMU Posters</div>
        <div className="posters">
            { posters.map(poster => {
                return <a className="poster-row" href={ poster.image } target="_blank">
                    <img className="poster" src={poster.image} alt={poster.alt}/>
                </a>
            }) }
        </div>
    </section>
)

export default Resources
