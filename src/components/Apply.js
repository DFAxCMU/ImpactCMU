import React from 'react'
import { 
    Jumbotron, 
    Button 
} from 'react-bootstrap';

const Apply = () => ( 
    <Jumbotron id="apply">
        <div className="container">
            <h1>
                Do you or your organization want to present?
            </h1>
            <p>
                Fill out this form an apply with you and your team! 
                We love indepedent student social good projects and want them to have a space at ImpactCMU as well.
            </p>
            <Button 
                href="https://forms.gle/x4Zb36XE2uMbYjBx9"
            >
                Apply
            </Button>

        </div>
    </Jumbotron>
)

export default Apply
