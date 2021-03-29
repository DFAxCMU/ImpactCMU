import React from 'react'
import { 
    Jumbotron, 
    Button 
} from 'react-bootstrap';
import Resources from './Resources';

const Apply = () => ( 
    <section id="apply">
        <h1>Apply</h1>
        <p>
            If you would like to submit a project to ImpactCMU, we ask that you pre-register with a brief description of your project and your project category by April 12th.

        </p>
        <a href="https://forms.gle/Rk5FmfFnrmScMyJt5" target="_blank">
            <div className="button">
                Registration Form
            </div>
        </a>
        <p>
The materials for your project’s social media post must be submitted by April 26th. Each project will have 1 dedicated post, in which you may add a carousel of up to 10 photos and videos. Below are some examples of what a post can look like, and templates that you may use. These templates are optional. There are no strict guidelines for what your post should look like- we only ask that it tells a compelling narrative about your project. Feel free to be creative!

        </p>
        <a href="https://forms.gle/ztnsPYCcQhiaM4Wq7" target="_blank">
            <div className="button">
                Submission Form
            </div>
        </a>
    </section>
)

export default Apply
