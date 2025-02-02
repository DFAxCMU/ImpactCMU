import React, { useState, useRef } from "react";
import NavBar from "../components/NavBar";
import { graphql } from "gatsby";
import "../dist/css/bootstrap.min.css";
import "../styles/style.css";
import "../styles/page.css";
import "../styles/fonts.css";
import vector3 from '../components/2025img/Vector-3.svg';

const Projects = ({ data }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const projects = data.allProjectInfoCsv.edges.map((edge) => edge.node);

  const containerRef = useRef(null); // Reference for scrollable container

  const openModal = (project) => {
    setModalContent(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // Scroll to the next or previous "page"
  const scrollProjects = (direction) => {
    if (containerRef.current) {
      // const projectWidth = 250 + 20;
      // const scrollAmount = projectWidth * 4;
      const containerWidth = containerRef.current.offsetWidth;
      const projectWidth = containerRef.current.querySelector(".project-box").offsetWidth; // Get project box width
    
      const projectsPerPage = Math.floor(containerWidth / projectWidth); // Calculate how many fit
      const scrollAmount = projectWidth * projectsPerPage; 
      // const projectWidth = containerRef.current.querySelector(".project-box").offsetWidth; // Get width of a project box
      // const projectsPerPage = 8; // Show 8 projects at a time
      // const scrollAmount = projectWidth * projectsPerPage; // Calculate scroll amount (width of 8 projects)
      if (direction === "right") {
        containerRef.current.scrollLeft += scrollAmount; // Move scroll position to the right
      } else if (direction === "left") {
        containerRef.current.scrollLeft -= scrollAmount; // Move scroll position to the left
      }
      // containerRef.current.scrollBy({
      //   left: direction === "right" ? scrollAmount : -scrollAmount,
      //   behavior: "smooth",
      // });
    }
  };

  return (
    <>
      <NavBar />
      <section id="projects">
        <div className="container-fluid">
          <div className="text-center omega">
            <h4>PROJECTS</h4>
          </div>

          {/* Scrollable container */}
          <div className="projects-container">
            <button className="scroll-button left" onClick={() => scrollProjects("left")}>
              &#9665;
            </button>

            <button className="scroll-button right" onClick={() => scrollProjects("right")}>
              &#9655;
            </button>

            <div className="scroll-wrapper" ref={containerRef}>
              {projects.map((project, index) => (
                <div key={index} className="project-box" onClick={() => openModal(project)} style={{ backgroundImage: `url(${vector3})` }}>
                  <div className="project-image-container">
                    <div className="project-name-overlay">
                      <h5 className="card-title">{project.title}</h5>
                      <h6 className="card-subtitle text-muted">{project.org}</h6>
                    </div>
                  </div>
                  {/* <h5 className="card-title">{project.title}</h5>
                  <h6 className="card-subtitle text-muted">{project.org}</h6> */}
                </div>
              ))}
            </div>

            <button className="scroll-button right" onClick={() => scrollProjects("right")}>
              &#9655;
            </button>
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
            <h8 className="card-title">Problem Space</h8>
            <h9 className="card-subtitle text-muted">{modalContent.problem}</h9>
            <h8 className="card-title">Solution</h8>
            <h9 className="card-subtitle text-muted">{modalContent.solution}</h9>
          </div>
        </div>
      )}
    </>
  );
};

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
        }
      }
    }
  }
`;
