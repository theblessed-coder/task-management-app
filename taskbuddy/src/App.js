import "./App.css";
import "./index.css";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import User from "./components/User";
import AddNewTask from "./components/AddNewTask";
import Calendar from "./components/Calendar";
import Projects from "./components/Projects";
import Tasks from "./components/Tasks";
import EditTask from "./components/EditTask";

 function App() {
  return (
    <div className="App">
      <SideBar>
        <User />
        <AddNewTask />
        <Calendar />
        <Projects />
      </SideBar>

      <Main>
        <Tasks />
        <EditTask />
      </Main>
    </div>
  );
}

export default App