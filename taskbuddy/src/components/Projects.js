import React, { useState } from "react"
import { CaretUp, Palette, PencilFill } from "react-bootstrap-icons"
import AddNewProject from "./AddNewProject"
import Project from "./Project"

function Projects() {
  const [showMenu, setShowMenu] = useState(true);
  const [edit, setEdit] = useState(false);
  const pencilColor = edit ? "var(--color-orange)" : "var(--text-color)";

  const projects = [
    { id: 1, name: "personal", numOfTasks: 0 },
    { id: 2, name: "work", numOfTasks: 1 },
    { id: 3, name: "other", numOfTasks: 2 },
  ]

  return (
    <div className="Projects">
      <div className="header">
        <div className="title">
          <Palette size="18" />
          <p>Projects</p>
        </div>
        <div className="btns">
          {
              showMenu && projects.length > 0 && (
              <span className="edit" onClick={() => setEdit((edit) => !edit)}>
                <PencilFill size="15" color={pencilColor} />
            </span>
          )}
          <AddNewProject />
          <span className="arrow">
            <CaretUp size="20" />
          </span>
        </div>
      </div>
      <div className="items">
        {projects.map((project) => (
          <Project
              project={project}
              key={project.id}
              edit={edit} />
        ))}
      </div>
    </div>
  );
}

export default Projects
