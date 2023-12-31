import React from "react";
import { Bell, CalendarDay, Clock, Palette, X } from "react-bootstrap-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

function TaskForm({
  handleSubmit,
  heading,
  text,
  setText,
  day,
  setDay,
  time,
  setTime,
  taskProject,
  setTaskProject,
  projects,
  showButtons,
  setShowModal,
}) {
  return (
    <form onSubmit={handleSubmit} className="TaskForm">
      {heading && <h3>{heading}</h3>}
      <div className="text">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Task ..."
          autoFocus
        />
      </div>
      <div className="remind">
        <Bell />
        <p>Remind Me!</p>
      </div>
      <div className="pick-day">
        <div className="title">
          <CalendarDay />
          <p>Choose a day</p>
        </div>
        <DatePicker selected={day} onChange={(date) => setDay(date)} />
      </div>
      <div className="pick-time">
        <div className="title">
          <Clock />
          <p>Choose time</p>
        </div>
        <TimePicker value={time} onChange={(newTime) => setTime(newTime)} />
      </div>
      <div className="pick-project">
        <div className="title">
          <Palette />
          <p>Choose a project</p>
        </div>
        <div className="projects">
          {projects.length > 0 ? (
            projects.map((project) => (
              <div
                className={`project ${
                  taskProject === project.name ? "active" : ""
                }`}
                onClick={() => setTaskProject(project.name)}
                key={project.id}
              >
                {project.name}
              </div>
            ))
          ) : (
            <div style={{ color: "var(--color-orange)" }}>
              Please add a project before proceeding
            </div>
          )}
        </div>
      </div>
      {showButtons && (
        <div>
          <div className="cancel" onClick={() => setShowModal(false)}>
            <X size="40" />
          </div>
          <div className="confirm">
            <button>+ Add task</button>
          </div>
        </div>
      )}
    </form>
  );
}

export default TaskForm;
