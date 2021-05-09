import React from 'react';
import logoDynamic from '../images/spinner_dynamic.png';
import logoStatic from '../images/spinner_static.png';

const Hero = () => (
    <section
        style={{
            width: '100%',
            height: '87vh',
            backgroundColor: '#04285a',
        }}
    >
        <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            display: 'block',
            position: 'relative',
            overflow: 'hidden',
        }}>
            <div id="spinner" style={{
                backgroundImage: `url("${ logoDynamic }")`,
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                height: '100%',
                width: '100%',
                position: 'absolute',
            }} />
            <div style={{
                backgroundImage: `url("${ logoStatic }")`,
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                height: '100%',
            }} />
        </div>
        <div style={{
            width: '100%',
            maxWidth: 600,
            color: '#fce4b5',
            margin: 24,
            }}>
            Impact CMU is an end-of-the-semester showcase of CMU student-led social impact projects. Organized by Design for America, the goal of Impact CMU is to celebrate our successes and to create a culture of social good on campus. Previously, this event was held as an exposition in the UC. This year, ImpactCMU will take the form of a gallery on social media and our own website. Come browse the projects, vote for your favorites, and be inspired to make an impact!

        </div>
        <a href="https://forms.gle/aV7foVz5zqytMAuT6" target="_blank">
            <div className="hero-button">
	        Vote!
            </div>
        </a>
    </section>
)

export default Hero;
