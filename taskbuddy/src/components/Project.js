import React, { useContext, useState } from "react";
import { Pencil, XCircle } from "react-bootstrap-icons";
import Modal from "./Modal";
import RenameProject from "./RenameProject";
import { TaskContext } from "../context";
import firebase from "../firebase";

function Project({ project, edit }) {
  // CONTEXT
  const { defaultProject, selectedProject, setSelectedProject } =
    useContext(TaskContext);

  // STATE
  const [showModal, setShowModal] = useState(false);

  const deleteProject = (project) => {
    firebase
      .firestore()
      .collection("projects")
      .doc(project.id)
      .delete()
      .then(() => {
        firebase
          .firestore()
          .collection("tasks")
          .where("projectName", "==", project.name)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              doc.ref.delete();
            });
          });
      })
      .then(() => {
        if (selectedProject === project.name) {
          setSelectedProject(defaultProject);
        }
      });
  };

  return (
    <div className="Project">
      <div className="name" onClick={() => setSelectedProject(project.name)}>
        {project.name}
      </div>
      <div className="btns">
        {edit ? (
          <div className="edit-delete">
            <span className="edit" onClick={() => setShowModal(true)}>
              <Pencil size="13" />
            </span>
            <span className="delete" onClick={() => deleteProject(project)}>
              <XCircle size="13" />
            </span>
          </div>
        ) : project.numOfTasks === 0 ? (
          ""
        ) : (
          <div className="total-tasks">{project.numOfTasks}</div>
        )}
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <RenameProject project={project} setShowModal={setShowModal} />
      </Modal>
    </div>
  );
}

export default Project;
