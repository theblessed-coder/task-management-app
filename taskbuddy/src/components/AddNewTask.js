import React, { useState } from "react";
import Modal from "./Modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import { Bell, CalendarDay, Clock, Palette, X } from "react-bootstrap-icons";

function AddNewTask() {
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("12:00");

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleTimeChange = newTime => {
    setTime(newTime);
  };

  return (
    <div className="AddNewTask">
      <div className="btn">
        <button onClick={() => setShowModal(true)}>+ New Task</button>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <form>
          <div className="text">
            <h3>Add new task!</h3>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Add task ..."
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
            <DatePicker selected={date} onChange={handleDateChange} />
          </div>
          <div className="pick-time">
            <div className="title">
              <Clock />
              <p>Choose time</p>
            </div>
            <TimePicker value={time} onChange={handleTimeChange} />
          </div>
          <div className="pick-project">
            <div className="title">
              <Palette />
              <p>Choose a project</p>
            </div>
            <div className="projects">
              <div className="project active">Personal</div>
              <div className="project">Work</div>
              <div className="project">Work</div>
            </div>
          </div>
          <div className="cancel" onClick={() => setShowModal(false)}>
            <X size="40" />
          </div>
          <div className="confirm">
            <button>+ Add Task</button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default AddNewTask
