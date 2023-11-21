import React, { createContext, useState } from "react"
import { useTasks, useProjects } from '../hooks'

const TaskContext = createContext();

function TaskContextProvider({ children }) {
  const defaultProject = "today";
  const [selectedProject, setSelectedProject] = useState(defaultProject);

  const tasks = useTasks()
  const projects = useProjects(tasks)

  return (
    <TaskContext.Provider
      value={{
        selectedProject,
        setSelectedProject,
        tasks,
        projects
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export { TaskContextProvider, TaskContext };
