import React, { useContext, useEffect, useState } from "react";
import Modal from "./Modal";
import TaskForm from "./TaskForm";
import { TaskContext } from "../context";

function AddNewTask() {
  //Context
  const { selectedProject } = useContext(TaskContext);

  //State
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState("");
  const [day, setDay] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [taskProject, setTaskProject] = useState(selectedProject);

  const projects = [
    { id: 1, name: "personal", numOfTasks: 0 },
    { id: 2, name: "work", numOfTasks: 1 },
    { id: 3, name: "other", numOfTasks: 2 },
  ];

  function handleSubmit(e) {}

  useEffect(() => {
    setTaskProject(selectedProject);
  }, [selectedProject]);

  return (
    <div className="AddNewTask">
      <div className="btn">
        <button onClick={() => setShowModal(true)}>+ New Task</button>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <TaskForm
          handleSubmit={handleSubmit}
          heading="Add new task!"
          text={text}
          setText={setText}
          day={day}
          setDay={setDay}
          time={time}
          setTime={setTime}
          taskProject={taskProject}
          setTaskProject={setTaskProject}
          projects={projects}
          showButtons={true}
          setShowModal={setShowModal}
        />
      </Modal>
    </div>
  );
}

export default AddNewTask;
