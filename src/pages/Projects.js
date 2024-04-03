import React, { useState } from 'react';
import NavBar from "../components/NavBar";
import projectimg from '../components/2024img/Projects.png';

import 'popper.js';
import '../dist/css/bootstrap.min.css';
import '../styles/style.css';
import '../styles/page.css';
import '../styles/fonts.css';
import { graphql } from "gatsby";

const Projects = ({ data }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const projects = data.allProjectInfoCsv.edges.map(edge => edge.node);

  const openModal = (project) => {
    setModalContent(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const linksArray = modalContent.link ? modalContent.link.split(',') : [];
  // const linksArray = modalContent.link.split(','); //for links

  return (
    <>
      <NavBar />
      <section id="projects">
        <div className="container-fluid">
          <div className="text-center">
            <div className="navbar-brand">
                <img src={projectimg} alt="title-img" class="title-img"/>
            </div>
          </div>
          <div className = "allProjectBoxes">
            <div className="row">
                {projects.map(project => (
                <div className="col-md-3 mb-4">
                    {/* <div className="card h-100"> */}
                    <div 
                        className="boxKMS" 
                        onClick={() => openModal(project)}
                        role="button" 
                        tabIndex={0} 
                    >
                        <h5 className="card-title">{project.title}</h5>
                        <h6 className="card-subtitle text-muted">{project.org}</h6>
                        {/* <p className="card-text">{project.problem}</p> */}
                        {/* Add other project details here */}
                    </div>
                    {/* <div className="card-footer">
                        {project.link && (
                        <a href={project.link.startsWith('http') ? project.link : `http://${project.link}`} target="_blank" rel="noopener noreferrer">Learn More</a>
                        )}
                    </div> */}
                    {/* </div> */}
                </div>
                ))}
            </div>
            </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>&times;</span>
            <h10 className="card-title">{modalContent.title}</h10>
            <h9 className="card-subtitle text-muted">{modalContent.members}</h9>
            <h9 className="card-subtitle text-muted">{modalContent.timeframe}</h9>
            <div className="divider"></div>
            {/* ... more content here */}
            <h8 className="card-title">Problem Space</h8>
            <h9 className="card-subtitle text-muted">{modalContent.problem}</h9>
            <h8 className="card-title">Solution</h8>
            <h9 className="card-subtitle text-muted">{modalContent.solution}</h9>
            <h8 className="card-title">
                Learn more: {" "}
                {linksArray && linksArray.map((link, index) => (
                    <React.Fragment key={index}>
                        {index > 0 && ", "}
                        <h9 className="card-subtitle text-muted">
                          <a href={link.trim()} target="_blank" rel="noopener noreferrer">
                              {link.trim()}
                          </a>
                        </h9>
                    </React.Fragment>
                ))}
        </h8>

          </div>
        </div>
      )}
    </>
  );
}

export default Projects;

export const query = graphql`
  query ArchivedQuery {
    allProjectInfoCsv {
      edges {
        node {
          title
          org
          members
          timeframe
          problem
          solution
          link
        }
      }
    }
  }
`
