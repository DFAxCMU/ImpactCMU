import React from 'react'

import SectionTitle from './SectionTitle'


class Orgs extends React.Component {
    constructor(props) {
        super(props)
	console.log(props)
        this.images = props.images.edges.reduce((obj, edge) => {
            obj[edge.node.relativePath.substring(5)] = edge.node.publicURL
            return obj
        }, {})
        console.log(this.images)
    }
    render() {
        return <section id="orgs" className="main-container">
            <div className="container">
                <SectionTitle title="Organizations">
                    Student organizations are one of the drivers of social good projects at Carnegie Mellon.
                </SectionTitle>
                <div className="d-flex justify-content-center flex-wrap">
                    { 
                        this.props.data.edges.map((organization, i) => ( 
                            <div className="card m-2 position-relative" style={{ width: '18rem', }} key={ i }>
                                <img className="card-img-top p-2" src={ this.images[organization.node.logo]} alt="" />
                                <div className="card-body" style={{ paddingBottom: 52}}>
                                    <h2 className="card-title">{ organization.node.name}</h2>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    }
}

export default Orgs
