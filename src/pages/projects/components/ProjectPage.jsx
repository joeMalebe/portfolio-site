import { ProjectCard } from "./ProjectCard";
import { projects } from "../data/Project";
import "../components/ProjectCards.scss";

const getProjects = (projects) => {
  var projectsList = Array();
  for (var i = 0; i < projects.length; i++) {
    projectsList.push(
      <div className="col col-lg" key={projects[i].projectId}>
          {ProjectCard(projects[i])}
      </div>
    );
  }
  return projectsList;
};

export const Projects = () => {
  return (
    <>
      <div className="container-fluid Page Scroll-Page">
        <div className="row mt-4">{getProjects(projects)}</div>
      </div>
    </>
  );
};

export default Projects;
