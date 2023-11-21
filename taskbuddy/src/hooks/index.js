import moment from "moment";
import { useState, useEffect } from "react";
import firebase from "../firebase";

export function useTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection("tasks")
      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setTasks(data);
      });

    return () => unsubscribe();
  }, []);

  return tasks;
}

export function useFilterTasks(tasks, selectedProject) {
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    let data;
    const todayDateFormated = moment().format("MM/DD/YYYY");

    if (selectedProject === "today") {
      data = tasks.filter((task) => task.date === todayDateFormated);
    } else if (selectedProject === "next 7 days") {
      data = tasks.filter((task) => {
        const taskDate = moment(task.date, "MM/DD/YYYY");
        const todayDate = moment(todayDateFormated, "MM/DD/YYYY");

        const diffDays = taskDate.diff(todayDate, "days");

        return diffDays >= 0 && diffDays < 7;
      });
    } else if (selectedProject === "all days") {
      data = tasks;
    } else {
      data = tasks.filter((task) => task.projectName === selectedProject);
    }

    setFilteredTasks(data);
  }, [tasks, selectedProject]);

  return filteredTasks;
}

export function useProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection("projects")
      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            name: doc.data().name,
          };
        });
        setProjects(data);
      });

    return () => unsubscribe();
  }, []);

  return projects;
}

export function useProjectsWithStats(tasks, projects) {
  const [projectsWithStats, setProjectsWithStats] = useState([]);

  useEffect(() => {
    const data = projects.map((project) => {
      return {
        numOfTasks: tasks.filter(
          (task) => task.projectName === project.name && !task.checked
        ).length,
        ...project,
      };
    });

    setProjectsWithStats(data);
  }, [tasks, projects]);

  return projectsWithStats;
}
