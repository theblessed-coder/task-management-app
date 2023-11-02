import React, { useState } from "react";
import Modal from "./Modal";

function AddNewTask() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="AddNewTask">
      <div className="btn">
        <button onClick={() => setShowModal(true)}>+ New Todo</button>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div>
          Hello World
          <button onClick={() => setShowModal(false)}>hide</button>
        </div>
      </Modal>
    </div>
  );
}

export default AddNewTask;
