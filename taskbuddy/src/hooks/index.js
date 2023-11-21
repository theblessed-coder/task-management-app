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
  }, [])

  return tasks;
}

export function useProjects(tasks) {
  const [projects, setProjects] = useState([]);

  function calculateNumOfTasks(projectName, tasks) {
    return tasks.filter((task) => task.projectName === projectName).length;
  }

  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection("projects")
      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          const projectName = doc.data().name;

          return {
            id: doc.id,
            name: projectName,
            numOfTasks: calculateNumOfTasks(projectName, tasks),
          };
        });
        setProjects(data);
      });

    return () => unsubscribe()
  }, [])

  return projects
}
