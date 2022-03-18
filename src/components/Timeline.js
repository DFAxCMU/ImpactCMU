import React from 'react'
import Card from './Card'

const Timeline = (props) => {
    return (    
        <div className="timeline">
            <div className="timeline-items">
                <Card 
                    title="March 27"
                    body="Project Submissions Due"
                    bodyClass="medium"
                    tilt="tilt-c"
                />
                <Card 
                    title="April 03"
                    body="Poster Workshop"
                    bodyClass="medium"
                    tilt="tilt-a"
                />
                <Card 
                    title="April 10"
                    body="Poster Submissions Due"
                    bodyClass="medium"
                    tilt="tilt-d"
                />
                <Card 
                    title="April 22"
                    body="In-person ImpactCMU event!"
                    bodyClass="medium"
                    tilt="tilt-b"
                />
            </div>
            <div className="timeline-line"></div>
        </div>
    )
}

export default Timeline
