import projectData from "./projectsData.json";
import Project from "../../components/Project";
import PageHeader from "../../components/PageHeader";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import UseProject from "../../Hooks/UseProject";
import './portfolio.css'


const Portfolio = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(0)

  const [clickProject, setClickProject] = useState('')
  // const [allProject, pageNumbers, pageLoading] = UseProject(currentPage)
  // console.log('loading', pageLoading)
  // const [isAdmin] = useAdmin();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const ProjectList = () =>
    projectData.map((project, i) => (
      <Project
        key={i}
        id={project.id}
        title={project.title}
        technologies={project.technologies}
        image={project.image}
        color={project.bgcolor}
        github={project.github}
        deployed={project.deployed}
        description={project.description}
      />
    ));

  const handleClickID = (id) => {
    console.log('clickId', id)
    setClickProject(id);
  }

  return (
    <>
      <section className="portfolio container">
        <PageHeader title="Portfolio" description="View my work" />
        <div className="row">
          {/* <ProjectList /> */}
          {
            // allProject.map dile online theke data niye asbe
            projectData.map((data, i) => <Project
              key={data._id}
              ProjectList= {ProjectList}
              data={data}
              handleClickID={handleClickID}
            ></Project>)
          }
        </div>
          {/* online theke data nile  nicher page number ta deyo lagbe */}
        {/* <div className=" join text-align:center margin:50px">
          {
            pageNumbers.map(number => <button
              key={number}
              className={currentPage === number ? 'm-1 p-2 join-item btn-xs btn-active' : 'm-1 p-1 btn-sm'}
              onClick={() => setCurrentPage(number)}
            > 
            {number + 1}
            </button>)
          }
        </div> */}

      </section>
    </>
  );
};

export default Portfolio;
