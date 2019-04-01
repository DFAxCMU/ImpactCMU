import React from 'react'
import {
    Jumbotron,
    Button
} from 'react-bootstrap'

const RSVP = () => ( 
    <Jumbotron id="rsvp">
        <h1 >
            Interested In Attending?
        </h1>
        <Button 
            href="https://www.facebook.com/events/592278967772521/"
        >
            RSVP
        </Button>
    </Jumbotron>
)

export default RSVP
