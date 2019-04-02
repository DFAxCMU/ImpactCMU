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

const Logistics = ({ data }) => {
    console.log(data)
    return (    
    <section id="logistics" className="main-container">
        <div className="container">
            <SectionTitle title="Logistics"></SectionTitle>
            <div className="col-md-6 offset-md-3">
                {
                    data.edges.map((event, i) => (
                        <div className="event-item row" key={ i }>
                            <div className="col-md-3">
                                <div className="event-time">{ event.node.time }</div>
                            </div>
                            <div className="col-md-9">
                                <div className="event-name">{ event.node.name }</div>
                                <div className="event-speaker">{ event.node.detail }</div>
                                <div className="event-location">{ "Location: " + event.node.location }</div>
                            </div>
                            <div className="event-ball" />
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
)
}

export default Logistics
