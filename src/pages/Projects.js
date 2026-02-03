import React, { useState, useRef } from "react";
import NavBar from "../components/NavBar";
import { graphql } from "gatsby";
import "../dist/css/bootstrap.min.css";
import "../styles/style.css";
import "../styles/page.css";
import "../styles/fonts.css";
import vector3 from "../components/2025img/Vector-3.svg";
import gradient from "../components/2026img/gradient-bg.png";
import group3 from "../components/2026img/group-3.svg";

import slack from "../components/2026img/streamline-logos_slack-logo.svg";
import instagram from "../components/2026img/instagram-logo-2-solid.svg";
import email from "../components/2026img/fontisto_email.svg";
import calendar from "../components/2026img/quill_calendars.svg";

const Projects = ({ data }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const projects = data.allProjectInfoCsv.edges.map((edge) => edge.node);

  const containerRef = useRef(null);

  const openModal = (project) => {
    setModalContent(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const scrollProjects = (direction) => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const projectWidth = containerRef.current.querySelector(".project-box").offsetWidth;
      const projectsPerRow = Math.floor(containerWidth / projectWidth);
      const scrollAmount = projectWidth * projectsPerRow;

      if (direction === "right") {
        containerRef.current.scrollLeft += scrollAmount;
      } else if (direction === "left") {
        containerRef.current.scrollLeft -= scrollAmount;
      }
    }
  };

  return (
    <>
        <img className="bg-group" src={group3} alt="" />
        <img className="bg-gradient" src={gradient} alt="" />
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

            <div className="scroll-wrapper" ref={containerRef}>
              {projects.map((project, index) => (
                <div key={index} className="project-box" onClick={() => openModal(project)} style={{ backgroundImage: `url(${vector3})` }}>
                  <div className="project-image-container">
                    <div className="project-name-overlay">
                      <h5 className="card-title">{project.title}</h5>
                      {/* <h11 className="card-subtitle text-muted">{project.org}</h11> */}
                    </div>
                  </div>
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
            <h5 className="card-title">{modalContent.title}</h5>
            <h11 className="card-subtitle text-muted">{modalContent.org}</h11>
            <h12 className="card-subtitle text-muted">{modalContent.members}</h12>
            {/* <h11 className="card-subtitle text-muted">{modalContent.timeframe}</h11> */}
            <div className="divider"></div>
            {/* <h5 className="card-title">Problem Space</h5> */}
            <p className="card-subtitle">{modalContent.problem}</p>
            {/* <h5 className="card-title">Solution</h5>
            <p className="card-subtitle text-muted">{modalContent.solution}</p> */}
          </div>
        </div>
      )}
      {/* footer icons */}
      <footer className="footer">
        <a href="https://www.instagram.com/impact.cmu/" target="_blank">
            <img src={instagram} alt="Instagram" />
        </a>
        <a href="https://calendar.google.com/calendar/u/4?cid=Y2FybmVnaWVtZWxsb25AZGVzaWduZm9yYW1lcmljYS5jb20" target="_blank">
            <div className="col">
                <img src={calendar} alt="Calendar" id="quill-calendar" />
            </div>
        </a>
        <a href="mailto:impactcmu.dfa@gmail.com">
            <img src={email} alt="Email" />
        </a>
        <a href="https://join.slack.com/t/impactcmu/shared_invite/zt-2d9yxiqk0-l0NwYeY6tqH2IcXoa98p8Q" target="_blank">
            <img src={slack} alt="Slack" />
        </a>
    </footer>
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
          problem
        }
      }
    }
  }
`;
