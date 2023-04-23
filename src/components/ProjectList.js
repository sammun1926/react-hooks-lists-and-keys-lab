import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        
        
        <ProjectItem id={1} name={"Reciplease"} about= {"A recipe tracking app"} technologies={["Rails", "Bootstrap CSS"]}></ProjectItem>

        <ProjectItem id={2} name={"Kibbles N Bitz"} about= {"Tinder for dogs"} technologies={["React", "Redux"]}></ProjectItem>

        <ProjectItem id={3} name={"Alienwares"} about= {"Etsy for aliens"} technologies={["React", "Redux", "Rails"]}></ProjectItem></div>
    </div>
  );
}

export default ProjectList;
