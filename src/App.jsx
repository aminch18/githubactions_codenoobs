import { getAllTasks } from "./services/tasksServices";
import { Header } from "./components/Header";
import { TasksTable } from "./components/TasksTable";
import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const fetchData = useRef(() => {});

  fetchData.current = () => {
    const allTasks = getAllTasks();
    setTasks(allTasks);
  };

  useEffect(() => {
    fetchData.current();
  }, [fetchData]);

  return (
    <div className="App">
      <Header />
      <div className="row mrgnbtm">
        <TasksTable
          tasks={tasks}
        />
      </div>
    </div>
  );
};

export default App;
