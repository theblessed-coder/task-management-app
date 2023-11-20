import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { TaskContextProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </React.StrictMode>
);
