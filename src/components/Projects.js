import React from 'react'

import SectionTitle from './SectionTitle'

class Projects extends React.Component {
    constructor(props) {
    	super(props)
	console.log(props.data)
	this.projects = props.data.edges.map(edge => {
            return edge.node
        }).filter(project => {
            return project.organization !== "" || project.name !== "" 
        })
    }
    render() {
        return <section id="projects" className="main-container">
            <div className="container">
                <SectionTitle title="Projects">
                    The projects will be presenting expo style during ImpactCMU
                </SectionTitle>
                    {
                        this.projects.map((p, i) => (
                            <div className="row border-bottom p-3" key={ i }>
                                <div className="col-md-4">
                                    <h3>{p.name}</h3>
                                    <h4>{ p.organization }</h4>
                                    <span>
                                        { p.members }
                                    </span>
                                </div>
                                <span className="col-md-8">
                                    { p.description }
                                </span>
                            </div>
                        ))
                    }
            </div>
        </section>
    }
}

export default Projects
