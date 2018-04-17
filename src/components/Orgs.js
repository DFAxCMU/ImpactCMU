import React from 'react'

import SectionTitle from './SectionTitle'

const organizations = [
    {
        name: "DFA@CMU",
        para: "Design for America @ CMU student-led teams work closely with local community organizations to identify challenging social issues. Through the process of ideating, prototyping, and iterating, we design and develop comprehensive solutions that benefit the broader community.",
        link: "dfacmu.com",
        logo: "orange-header.jpg",
    },
    {
        name: "Engineers Without Borders",
        para: "CMU-EWB is dedicated to understanding the challenges that face humanity today and implementing socially conscious and environmentally sustainable technologies to improve quality of life for local, national, and international communities.",
        link: "cmuewb.org/",
        logo: "ewb_logo.png",
    },
    {
        name: "Global Medical Brigades",
        para: "Global Medical Brigades develops sustainable health initiatives and provides relief where there is limited access to healthcare.",
        link: "https://www.globalbrigades.org/empowered/chapter/carnegie-mellon-medical-brigades-chapter",
        logo: "gmb_logo.png",
    },
    {
        name: "Global Business Brigades",
        para: "Carnegie Mellon University\'s chapter of Global Business Brigades provides financial literacy workshops and business consulting for several local businesses in rural communities in Panama. As a team of 15 students, we prepare workshop materials and language skills before the trip to ensure that we can provide the best services possible in Panama.",
        link: "https://www.globalbrigades.org/empowered/chapter/carnegie-mellon-business-brigades-chapter%20target=",
        logo: "gbb_logo.png",
    },
    {
        name: "College Against Cancer",
        para: "Colleges Against Cancer is the student arm of the American Cancer Society, with over 300 chapters nationwide. CAC focuses on four strategic directions: advocacy, cancer education, survivorship, and our main event, Relay For Life. All money raised supports cancer research, local cancer patient services, and public education.",
        link: "https://thebridge.cmu.edu/organization/colleges-against-cancer",
        logo: "cac_logo.jpg",
    },
    {
        name: "Tech4Society",
        para: "Tech for Society is a group of students interested in employing the skills we acquire as academics (such as technology, data science, and policy analysis) to bolster existing social initiatives conducted by local organizations.",
        link: "https://twitter.com/cmutech4society",
        logo: "t4s_logo.jpg",
    },
    {
        name: "Project Ignite",
        para: "Project Ignite is a student run outreach organization at Carnegie Mellon University offering an interdisciplinary project-based educational program for high school students in the greater Pittsburgh area. We provide a valuable opportunity for students to work in a team and gain hands-on experience planning and executing a project with funding for materials provided for each group.",
        link: "https://projectignitecmu.org/",
        logo: "pj_logo.png",
    },
    {
        name: "East End Youth Project",
        para: "We supply mentors to Higher Achievement, which is a national nonprofit middle-school enrichment program that operates in underprivileged areas. Our mentors meet with a group of Higher Achievement \"Scholars\" once a week to work on a curriculum of their choice.",
        link: "https://thebridge.cmu.edu/organization/east-end-youth-project",
        logo: "eeyp_logo.png",
    },
]

class Orgs extends React.Component {
    constructor(props) {
        super(props)
        this.images = props.data.allFile.edges.reduce((obj, edge) => {
            obj[edge.node.relativePath] = edge.node.publicURL
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
                        organizations.map((organization) => ( 
                            <div className="card m-2 position-relative" style={{ width: '18rem', }}>
                                <img className="card-img-top p-2" src={ this.images[organization.logo]} alt="" />
                                <div className="card-body" style={{ paddingBottom: 52}}>
                                    <h2 className="card-title">{ organization.name}</h2>
                                    <p className="card-text">{ organization.para }</p>
                                    <a 
                                        href={ organization.link } 
                                        className="btn-default btn position-absolute"
                                        style={{ bottom: 0, marginBottom: 20}}
                                    >
                                        Read More
                                    </a>
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
