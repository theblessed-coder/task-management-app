import React, { createContext, useState } from "react";

const TaskContext = createContext();

function TaskContextProvider({ children }) {
  const defaultProject = "today";
  const [selectedProject, setSelectedProject] = useState(defaultProject);

  return (
    <TaskContext.Provider
      value={{
        selectedProject,
        setSelectedProject,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export { TaskContextProvider, TaskContext };
