import React from 'react';
import logo from '../images/21lightlogo.png';

const Hero = () => (
    <section
        style={{
            width: '100%',
            height: '90vh',
            backgroundColor: '#04285a',
        }}
    >
        <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            backgroundImage: `url("${ logo }")`,
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            width: '100%',
        }}>
        </div>
        <div style={{
            width: '100%',
            maxWidth: 600,
            textAlign: 'center',
            color: '#fce4b5',
            }}>
            Impact CMU is an end-of-the-semester showcase of CMU student-led social impact projects. Organized by Design for America, the goal of Impact CMU is to celebrate our successes and to create a culture of social good on campus. Previously, this event was held as an exposition in the UC. This year, ImpactCMU will take the form of an Instagram gallery. Come browse the projects, vote for your favorites, and be inspired to make an impact!

        </div>
    </section>
)

export default Hero;
