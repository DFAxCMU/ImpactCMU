import React, { useState, useRef } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { graphql } from "gatsby";
import "../dist/css/bootstrap.min.css";
import "../styles/style.css";
import "../styles/page.css";
import "../styles/fonts.css";
import vector3 from "../components/2025img/Vector-3.svg";
import leftarrow from "../components/2026img/leftarrowbut.svg";
import rightarrow from "../components/2026img/rightarrow.svg";
import gradient from "../components/2026img/gradient-bg.png";
import group3 from "../components/2026img/group-3.svg";
import cube1 from "../components/2026img/cubegradients/cube1.svg";
import cube2 from "../components/2026img/cubegradients/cube12.svg";
import cube3 from "../components/2026img/cubegradients/cube1.svg";
import cube4 from "../components/2026img/cubegradients/cube12.svg";
import cube5 from "../components/2026img/cubegradients/cube1.svg";
import cube6 from "../components/2026img/cubegradients/cube12.svg";
import cube7 from "../components/2026img/cubegradients/cube1.svg";
import cube8 from "../components/2026img/cubegradients/cube12.svg";
import cube9 from "../components/2026img/cubegradients/cube1.svg";
import cube10 from "../components/2026img/cubegradients/cube12.svg";
import cube11 from "../components/2026img/cubegradients/cube1.svg";
import cube12 from "../components/2026img/cubegradients/cube12.svg";
import cube13 from "../components/2026img/cubegradients/cube1.svg";
import cube14 from "../components/2026img/cubegradients/cube12.svg";
import cube15 from "../components/2026img/cubegradients/cube1.svg";
import cube16 from "../components/2026img/cubegradients/cube12.svg";
import cube17 from "../components/2026img/cubegradients/cube1.svg";
import cube18 from "../components/2026img/cubegradients/cube12.svg";
import cube19 from "../components/2026img/cubegradients/cube1.svg";
import cube20 from "../components/2026img/cubegradients/cube12.svg";
import cube21 from "../components/2026img/cubegradients/cube1.svg";
import cube22 from "../components/2026img/cubegradients/cube12.svg";
import cube23 from "../components/2026img/cubegradients/cube1.svg";
import cube24 from "../components/2026img/cubegradients/cube12.svg";


const Projects = ({ data }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const projects = data.allProjectInfoCsv.edges.map((edge) => edge.node);
  const cubeImages = [
    cube1, cube2, cube3, cube4, cube5, cube6, cube7, cube8, 
    cube9, cube10, cube11, cube12, cube13, cube14, cube15, cube16, 
    cube17, cube18, cube19, cube20, cube21, cube22, cube23, cube24
  ];
  

  const containerRef = useRef(null);

  // const openModal = (project, cubeImage) => {
  //   setModalContent(project);
  //   setModalOpen(true);
  // };

  const openModal = (project, cubeImage) => {
    setModalContent({ ...project, cubeImage });
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
      <div className="project-header">
            <h4>PROJECTS</h4>
      </div>
      <section id="projects">

        {/* Scrollable container */}
        <div className="projects-container">
          <button className="scroll-button left" onClick={() => scrollProjects("left")}>
            {/* &#9665; */}
            <img src={leftarrow} alt="" />
          </button>

          <div className="scroll-wrapper" ref={containerRef}>
            {projects.map((project, index) => {
              const cubeImage = cubeImages[index % cubeImages.length];

              return (
                <div
                  key={index}
                  className="project-box"
                  // onClick={() => openModal(project)}
                  onClick={() => openModal(project, cubeImage)}
                >
                  {/* Cube image */}
                  <div className="project-image">
                    <img src={cubeImage} alt="" />
                  </div>

                  {/* Title BELOW image */}
                  <h5 className="project-title">{project.title}</h5>
                </div>
              );
            })}
          </div>
          <button className="scroll-button right" onClick={() => scrollProjects("right")}>
            {/* &#9655; */}
            <img src={rightarrow} alt="" />
          </button>
        </div>

      </section>
      {/* footer icons */}
      {/* <div>
        <Footer />
      </div> */}

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-backdrop">
          <div className="modal-frame">
            
            {/* Header and close button*/}
            <div className="modal-header">
              <div className="modal-project-name">
                {modalContent.title}
              </div>
              <button
                className="modal-close"
                onClick={closeModal}
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>
            {/* Cube gradient picture*/}
            <div className="modal-cube-wrapper">
              <img
                src={modalContent.cubeImage}
                alt=""
                className="modal-cube"
              />
            </div>
            {/* Org name*/}
            <div className="modal-org">
              {modalContent.org}
            </div>
            {/* Members */}
            <div className="modal-members">
              {modalContent.members}
            </div>
            {/* Problem */}
            <div className="modal-problem">
              {modalContent.problem}
            </div>
          </div>
        </div>
      )}

      {/* <Footer /> */}
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
