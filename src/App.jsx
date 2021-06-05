import { getAllTasks, deleteTask } from "./services/tasksServices";
import { Header } from "./components/Header";
import { TasksTable } from "./components/TasksTable";
import { CreateTask } from "./components/CreateTask";
import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [numberOfTasks, setNumberOfTasks] = useState(0);
  const fetchData = useRef(() => {});

  fetchData.current = () => {
    const allTasks = getAllTasks();
    setTasks(allTasks);
    setNumberOfTasks(allTasks.length);
  };

  useEffect(() => {
    fetchData.current();
  }, [fetchData, numberOfTasks]);

  const taskCreated = () => setNumberOfTasks(numberOfTasks + 1);

  const deleteTaskHandler = (data) => {
    deleteTask(data);
    setNumberOfTasks(numberOfTasks - 1);
  };

  return (
    <div className="App">
      <Header />
      <div className="container mrgnbtm">
        <div className="row">
          <div className="col-md-12">
            <CreateTask taskCreated={taskCreated} />
          </div>
        </div>
      </div>
      <div className="row mrgnbtm">
        <TasksTable tasks={tasks} deleteHandler={deleteTaskHandler} />
      </div>
    </div>
  );
};

export default App;
