import React from 'react'

import SectionTitle from './SectionTitle'

const events = [ 
    {
        time: "12:00 PM",
        name: "Opening Ceremony",
        speaker: "Provost Laurie Weingart and Student speaker Nick Wilson",
        location: "UC Black Chairs",
    },
    {
        time: "12:30 PM",
        name: "Project Expo",
        speaker: "Poster Presentations",
        location: "UC Kirr Commons",
    }
]

const Logistics = () => (    
    <section id="logistics" className="main-container">
        <div className="container">
            <SectionTitle title="Logistics"></SectionTitle>
            <div className="col-md-6 offset-md-3">
                {
                    events.map((event) => (
                        <div className="event-item row">
                            <div className="col-md-3">
                                <div className="event-time">{ event.time }</div>
                            </div>
                            <div className="col-md-9">
                                <div className="event-name">{ event.name }</div>
                                <div className="event-speaker">{ event.speaker }</div>
                                <div className="event-location">{ "Location: " + event.location }</div>
                            </div>
                            <div className="event-ball" />
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
)

export default Logistics
