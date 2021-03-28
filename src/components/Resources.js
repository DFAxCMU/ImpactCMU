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

const Resources = () => (
    <section id="resources">
        <h1>Resources</h1>
        <a href="https://docs.google.com/presentation/u/1/d/1Zocjg_wUnLIr0VdOZsDVun5q_sSSAa0OEqYIj5TluLw/edit?usp=sharing">
	    <div className="button">
	        Start creating your carousel from our template!
	    </div>
	</a>
	<h4>Example Posters from Past Years:</h4>
        <div id="carouselExamples" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExamples" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExamples" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExamples" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExamples" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExamples" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExamples" data-bs-slide-to="5" aria-label="Slide 6"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
		    <img className="poster" src={poster1} alt={alt1}/>
                </div>
                <div class="carousel-item">
		    <img className="poster" src={poster2} alt={alt2}/>
                </div>
                <div class="carousel-item">
		    <img className="poster" src={poster3} alt={alt3}/>
                </div>
                <div class="carousel-item">
		    <img className="poster" src={poster4} alt={alt4}/>
                </div>
                <div class="carousel-item">
		    <img className="poster" src={poster5} alt={alt5}/>
                </div>
                <div class="carousel-item">
		    <img className="poster" src={poster6} alt={alt6}/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExamples" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExamples" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </section>
)

export default Resources
