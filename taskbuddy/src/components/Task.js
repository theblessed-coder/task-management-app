import React, { useState } from "react";
import {
  ArrowClockwise,
  CheckCircleFill,
  Circle,
  Trash,
} from "react-bootstrap-icons";
import firebase from "../firebase";

function Task({ task }) {
  const [hover, setHover] = useState(false);

  const deleteTask = (task) => {
    firebase.firestore().collection("tasks").doc(task.id).delete();
  };

  return (
    <div className="Task">
      <div
        className="task-container"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="check-task">
          {task.checked ? (
            <span className="checked">
              <CheckCircleFill color="#bebebe" />
            </span>
          ) : (
            <span className="unchecked">
              <Circle color={task.color} />
            </span>
          )}
        </div>
        <div className="text">
          <p style={{ color: task.checked ? "#bebebe" : "#000000" }}>
            {task.text}
          </p>
          <span>
            {task.time} - {task.projectName}
          </span>
          <div className={`line ${task.checked ? "line-through" : ""}`}></div>
        </div>
        <div className="add-to-next-day">
          {task.checked && (
            <span>
              <ArrowClockwise />
            </span>
          )}
        </div>
        <div className="delete-task" onClick={() => deleteTask(task)}>
          {(hover || task.checked) && (
            <span>
              <Trash />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Task;
