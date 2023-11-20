import React, { useState } from "react"
import TaskForm from "./TaskForm"

function EditTask() {

  const [text, setText] = useState();
  const [day, setDay] = useState();
  const [time, setTime] = useState();

  const projects = [
    { id: 1, name: "personal", numOfTasks: 0 },
    { id: 2, name: "work", numOfTasks: 1 },
    { id: 3, name: "other", numOfTasks: 2 },
  ];

  function handleSubmit(e) {}
  return (
    <div className="EditTask">
      <div className="header">
        Edit Task
      </div>
      <div className="container">
        <TaskForm
          handleSubmit={handleSubmit}
          text={text}
          setText={setText}
          day={day}
          setDay={setDay}
          time={time}
          setTime={setTime}
          projects={projects}
        />
      </div>
    </div>
  );
}

export default EditTask
