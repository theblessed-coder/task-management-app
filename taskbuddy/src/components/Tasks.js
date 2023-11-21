import React, { useContext } from "react"
import Task from "./Task"
import Next7Days from "./Next7Days"
import { TaskContext } from "../context"

function Tasks() {
  const { tasks, selectedProject } = useContext(TaskContext)

  return (
    <div className="Tasks">
      <div className="selected-project">
      {selectedProject}
      </div>
      <div className="tasks">
        {
          selectedProject === "next 7 days" ? (
          <Next7Days tasks={tasks} />
        ) : (
          tasks.map((task) => <Task task={task} key={task.id} />)
        )}
      </div>
    </div>
  );
}

export default Tasks
