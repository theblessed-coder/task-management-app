import React, { useState } from "react";
import Modal from "./Modal";
import TaskForm from "./TaskForm";

function AddNewTask() {
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState("");
  const [day, setDay] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const projects = [
    { id: 1, name: "personal", numOfTasks: 0 },
    { id: 2, name: "work", numOfTasks: 1 },
    { id: 3, name: "other", numOfTasks: 2 },
  ];

  function handleSubmit(e) {}

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
          projects={projects}
          showButtons={true}
          setShowModal={setShowModal}
        />
      </Modal>
    </div>
  );
}

export default AddNewTask;
