import { render } from "@testing-library/react";
import React from "react";
import ProjectList from "./ProjectList";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        
        <span>Rails</span>

        <span>Bootstrap CSS</span>

        <span>React</span>

        <span>redux</span>

      </div>
    </div>
  );
}

export default ProjectItem;
