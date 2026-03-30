import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { graphql } from "gatsby";
import "../dist/css/bootstrap.min.css";
import "../styles/style.css";
import "../styles/page.css";
import "../styles/fonts.css";
import "../styles/projects-mobile.css";
import vector3 from "../components/2025img/Vector-3.svg";
import leftarrow from "../components/2026img/leftarrowbut.svg";
import rightarrow from "../components/2026img/rightarrow.svg";
import gradient from "../components/2026img/gradient-bg.png";
import group3 from "../components/2026img/group-3.svg";
import cube1 from "../components/2026img/cubegradients/cube1.svg";
import cube2 from "../components/2026img/cubegradients/cube2.svg";
import cube3 from "../components/2026img/cubegradients/cube3.svg";
import cube4 from "../components/2026img/cubegradients/cube4.svg";
import cube5 from "../components/2026img/cubegradients/cube5.svg";
import cube6 from "../components/2026img/cubegradients/cube6.svg";
import cube7 from "../components/2026img/cubegradients/cube7.svg";
import cube8 from "../components/2026img/cubegradients/cube8.svg";
import cube9 from "../components/2026img/cubegradients/cube9.svg";
import cube10 from "../components/2026img/cubegradients/cube10.svg";
import cube11 from "../components/2026img/cubegradients/cube11.svg";
import cube12 from "../components/2026img/cubegradients/cube12.svg";
import cube13 from "../components/2026img/cubegradients/cube13.svg";
import cube14 from "../components/2026img/cubegradients/cube14.svg";
import cube15 from "../components/2026img/cubegradients/cube15.svg";
import cube16 from "../components/2026img/cubegradients/cube16.svg";
import cube17 from "../components/2026img/cubegradients/cube17.svg";
import cube18 from "../components/2026img/cubegradients/cube18.svg";
import cube19 from "../components/2026img/cubegradients/cube19.svg";
import cube20 from "../components/2026img/cubegradients/cube20.svg";
import cube21 from "../components/2026img/cubegradients/cube21.svg";
import cube22 from "../components/2026img/cubegradients/cube22.svg";
import cube23 from "../components/2026img/cubegradients/cube23.svg";
import cube24 from "../components/2026img/cubegradients/cube24.svg";


const MOBILE_MAX = 768;




const Projects = ({ data }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const projects = data.allProjectInfoCsv.edges.map((edge) => edge.node);
  const cubeImages = [
    cube1, cube2, cube3, cube4, cube5, cube6, cube7, cube8, 
    cube9, cube10, cube11, cube12, cube13, cube14, cube15, cube16, 
    cube17, cube18, cube19, cube20, cube21, cube22, cube23, cube24
  ];

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < MOBILE_MAX);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);



  // const itemCount = isMobile ? 1 : 6;
  const getItemCount = () => {
    // if (isMobile) return 1;
    if (typeof window === "undefined") return 6;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 4;  // tablet
    return 6;                                // desktop
  };

  // const [itemCount, setItemCount] = useState(getItemCount());
  // const [itemCount, setItemCount] = useState(6);
  const [itemCount, setItemCount] = useState(getItemCount);

  useEffect(() => {
    const handleResize = () => setItemCount(getItemCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  const [startIndex, setStartIndex] = useState(0);
  // const visibleProjects = projects.slice(startIndex, startIndex + itemCount);

  const visibleProjects = projects.slice(startIndex, startIndex + itemCount);
  const maxStart = Math.max(projects.length - itemCount, 0);
  

  useEffect(() => {
    const maxStart = Math.max(projects.length - itemCount, 0);
    setStartIndex((prev) => Math.min(prev, maxStart));
    console.log(maxStart);
  }, [itemCount, projects.length]);


  const openModal = (project, cubeImage) => {
    setModalContent({ ...project, cubeImage });
    setModalOpen(true);
  };
  

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    cubeImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // const maxStart = Math.max(projects.length - itemCount, 0);

  /*for graying out the arrows*/
  const canGoLeft = startIndex > 0;
  // const canGoRight = startIndex < maxStart;
  const canGoRight = startIndex < (projects.length - itemCount);

  const scrollProjects = (direction) => {
    // const step = isMobile ? 1 : itemCount;
    const step = itemCount;
    const currentMaxStart = Math.max(projects.length - itemCount, 0);
    console.log("currenMaxStart");
    console.log(currentMaxStart);
  
    if (direction === "right") {
      setStartIndex(prev => Math.min(prev + step, currentMaxStart));
    } else {
      setStartIndex(prev => Math.max(prev - step, 0));
    }
  };

  const mobileCurrent = isMobile && visibleProjects.length > 0 ? visibleProjects[0] : null;

  return (
    <>
    <div className="projects-page">
        {/* <img className="bg-group" src={group3} alt="" />
        <img className="bg-gradient" src={gradient} alt="" /> */}
      <NavBar />
      <div className="project-header">
            <h4>Projects</h4>
      </div>
      <section id="projects">
        <div className="projects-main">
          <div className="projects-container">
            <button
              type="button"
              className="scroll-button left"
              onClick={() => scrollProjects("left")}
              disabled={!canGoLeft}
            >
              <img src={leftarrow} alt="Previous projects" />
            </button>

            <div className="scroll-wrapper" style={{ "--items": itemCount }}>
              {visibleProjects.map((project, i) => {
                const index = startIndex + i;
                const cubeImage = cubeImages[index % cubeImages.length];

                return (
                  <div
                    key={i}
                    className="project-box"
                    onClick={() => {
                      if (!isMobile) openModal(project, cubeImage);
                    }}
                    onKeyDown={(e) => {
                      if (!isMobile && (e.key === "Enter" || e.key === " ")) {
                        e.preventDefault();
                        openModal(project, cubeImage);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="project-image">
                      <img src={cubeImage} alt="" />
                    </div>
                    <h5 className="project-title">{project.title}</h5>
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              className="scroll-button right"
              onClick={() => scrollProjects("right")}
              disabled={!canGoRight}
            >
              <img src={rightarrow} alt="Next projects" />
            </button>
          </div>

          {mobileCurrent && (
            <div className="projects-mobile-detail" aria-live="polite">
              <h2 className="projects-mobile-name">{mobileCurrent.title}</h2>
              <p className="projects-mobile-problem">{mobileCurrent.problem}</p>
            </div>
          )}
        </div>
      </section>
      <Footer />
     </div>

      {/*modal*/}
      {isModalOpen && (
        <div className="modal-backdrop">
          <div className="modal-frame">
            
            {/*header and close button*/}
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
            {/*cube gradient pic*/}
            <div className="modal-cube-wrapper">
              <img
                src={modalContent.cubeImage}
                alt=""
                className="modal-cube"
              />
            </div>
            {/*org name*/}
            <div className="modal-org">
              {modalContent.org}
            </div>
            {/*members */}
            <div className="modal-members">
              {modalContent.members}
            </div>
            {/*problem */}
            <div className="modal-problem">
              {modalContent.problem}
            </div>
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
          problem
        }
      }
    }
  }
`;
