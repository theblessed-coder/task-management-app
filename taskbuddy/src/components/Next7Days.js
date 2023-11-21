import moment from "moment";
import React, { useEffect, useState } from "react";
import Task from "./Task";

function Next7Days({ tasks }) {
  const [weekTasks, setWeekTasks] = useState([]);

  useEffect(() => {
    const days = ["0", "1", "2", "3", "4", "5", "6"];

    const sortedTasksByDay = days.map((day) => {
      return {
        tasks: tasks.filter((task) => task.day === day),
        number: day,
      };
    });

    const today = parseInt(moment().format("d"));

    const arrangeDays = sortedTasksByDay
      .slice(today)
      .concat(sortedTasksByDay.slice(0, today));

    setWeekTasks(arrangeDays);
  }, [tasks]);

  return (
    <div className="Next7Days">
      {weekTasks.map((day) => (
        <div key={day.number}>
          <div className="day">
            <div className="name">
              {moment(day.number, "d").format("dddd")}
              {day.number === moment().format("d") && " (Today)"}
            </div>
            <div className="total-tasks">({day.tasks.length})</div>
          </div>
          <div className="tasks">
            {day.tasks.map((task) => (
              <Task key={task.id} task={task} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Next7Days;
