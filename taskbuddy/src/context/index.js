import React, { createContext, useState } from "react";
import {
  useTasks,
  useProjects,
  useFilterTasks,
  useProjectsWithStats,
} from "../hooks";

const TaskContext = createContext();

function TaskContextProvider({ children }) {
  const defaultProject = "today";
  const [selectedProject, setSelectedProject] = useState(defaultProject);
  const [selectedTask, setSelectedTask] = useState(undefined);

  const tasks = useTasks();
  const projects = useProjects(tasks);
  const projectsWithStats = useProjectsWithStats(tasks, projects);
  const filteredTasks = useFilterTasks(tasks, selectedProject);

  return (
    <TaskContext.Provider
      value={{
        defaultProject,
        selectedProject,
        setSelectedProject,
        tasks: filteredTasks,
        projects: projectsWithStats,
        selectedTask,
        setSelectedTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export { TaskContextProvider, TaskContext };
