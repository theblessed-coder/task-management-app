import React from "react";
import Task from "./Task";
import Next7Days from "./Next7Days";

function Tasks() {
  return (
    <div className="Task">
      <Task />
      <Next7Days />
    </div>
  );
}

export default Tasks