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
                />
                <Card 
                    title="April 03"
                    body="Poster Submissions Due"
                    bodyClass="medium"
                />
                <Card 
                    title="April 22"
                    body="In-person ImpactCMU event!"
                    bodyClass="medium"
                />
            </div>
            <div className="timeline-line"></div>
        </div>
    )
}

export default Timeline
