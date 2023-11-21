import React, { useContext, useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import { TaskContext } from "../context";
import moment from "moment";
import firebase from "../firebase";

function EditTask() {
  // STATE
  const [text, setText] = useState("");
  const [day, setDay] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [taskProject, setTaskProject] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // CONTEXT
  const { selectedTask, projects } = useContext(TaskContext);

  useEffect(() => {
    if (selectedTask) {
      setText(selectedTask.text);
      setDay(moment(selectedTask.date, "MM/DD/YYYY").toDate());
      setTime(moment(selectedTask.time, "hh:mm A").toDate());
      setTaskProject(selectedTask.projectName);
    }
  }, [selectedTask]);

  useEffect(() => {
    if (selectedTask && !isLoading) {
      const updateTask = async () => {
        setIsLoading(true);
        try {
          await firebase
            .firestore()
            .collection("tasks")
            .doc(selectedTask.id)
            .update({
              text,
              date: moment(day).format("MM/DD/YYYY"),
              day: moment(day).format("d"),
              time: moment(time).format("hh:mm A"),
              projectName: taskProject,
            });
        } catch (error) {
          console.error("Error updating task:", error);
        } finally {
          setIsLoading(false);
        }
      };
      updateTask();
    }
  }, [text, day, time, taskProject, selectedTask, isLoading]);

  function handleSubmit(e) {
    e.preventDefault();
    // Additional handling, if needed
  }

  return (
    <div>
      {selectedTask && (
        <div className="EditTask">
          <div className="header">Edit Task</div>
          <div className="container">
            <TaskForm
              handleSubmit={handleSubmit}
              text={text}
              setText={setText}
              day={day}
              setDay={setDay}
              time={time}
              setTime={setTime}
              taskProject={taskProject}
              setTaskProject={setTaskProject}
              projects={projects}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default EditTask;
