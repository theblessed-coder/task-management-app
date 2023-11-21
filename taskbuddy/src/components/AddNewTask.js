import React, { useContext, useEffect, useState } from "react";
import Modal from "./Modal";
import TaskForm from "./TaskForm";
import { TaskContext } from "../context";
import { calendarItems } from "../constants";
import firebase from "../firebase";
import moment from "moment";
import randomcolor from "randomcolor";

function AddNewTask() {
  const { projects, selectedProject } = useContext(TaskContext);

  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState("");
  const [day, setDay] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [taskProject, setTaskProject] = useState(selectedProject);

  function handleSubmit(e) {
    e.preventDefault();

    if (text && !calendarItems.includes(taskProject)) {
      firebase
        .firestore()
        .collection("tasks")
        .add({
          text: text,
          date: moment(day).format("MM/DD/YYYY"),
          day: moment(day).format("d"),
          time: moment(time).format("hh:mm A"),
          checked: false,
          color: randomcolor({luminosity :'dark'}),
          projectName: taskProject,
        });

      setShowModal(false);
      setText("");
      setDay(new Date());
      setTime(new Date());
    }
  }

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
