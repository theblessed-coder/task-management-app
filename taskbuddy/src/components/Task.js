import moment from "moment";
import React, { useContext, useState } from "react";
import {
  ArrowClockwise,
  CheckCircleFill,
  Circle,
  Trash,
} from "react-bootstrap-icons";
import { TaskContext } from "../context";
import firebase from "../firebase";

function Task({ task }) {
  // STATE
  const [hover, setHover] = useState(false);

  // CONTEXT
  const { selectedTask, setSelectedTask } = useContext(TaskContext);

  const handleDelete = (task) => {
    deleteTask(task);

    if (selectedTask === task) {
      setSelectedTask(undefined);
    }
  };

  const deleteTask = (task) => {
    firebase.firestore().collection("tasks").doc(task.id).delete();
  };

  const checkTask = (task) => {
    firebase.firestore().collection("tasks").doc(task.id).update({
      checked: !task.checked,
    });
  };

  const repeatNextDay = (task) => {
    const nextDayDate = moment(task.date, "MM/DD/YYYY").add(1, "days");

    const repeatedTask = {
      ...task,
      checked: false,
      date: nextDayDate.format("MM/DD/YYYY"),
      day: nextDayDate.format("d"),
    };

    delete repeatedTask.id;

    firebase.firestore().collection("tasks").add(repeatedTask);
  };

  return (
    <div className="Task">
      <div
        className="task-container"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="check-task" onClick={() => checkTask(task)}>
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
        <div className="text" onClick={() => setSelectedTask(task)}>
          <p style={{ color: task.checked ? "#bebebe" : "#000000" }}>
            {task.text}
          </p>
          <span>
            {task.time} - {task.projectName}
          </span>
          <div className={`line ${task.checked ? "line-through" : ""}`}></div>
        </div>
        <div className="add-to-next-day" onClick={() => repeatNextDay(task)}>
          {task.checked && (
            <span>
              <ArrowClockwise />
            </span>
          )}
        </div>
        <div className="delete-task" onClick={() => handleDelete(task)}>
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
