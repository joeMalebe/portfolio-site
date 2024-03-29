import { ProjectCard } from "./ProjectCard";
import { projects } from "../data/Project";

const getProjects = (projects) => {
  var projectsList = Array();
  for (var i = 0; i < projects.length; i++) {
    projectsList.push(
      <div className="col-4" key={projects[i].projectId}>
        {" "}
        {ProjectCard(projects[i])}{" "}
      </div>
    );
  }
  return projectsList;
};

export const Projects = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">{getProjects(projects)}</div>
      </div>
    </>
  );
};

export default Projects;
