import { initStorage, getAllTasks, deleteTask } from "./services/tasksServices";
import { Header } from "./components/Header";
import { TasksTable } from "./components/TasksTable";
import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isTaskEdited, setTaskEdited] = useState(false);
  const [numberOfTasks, setNumberOfTasks] = useState(0);
  const fetchData = useRef(() => {});

  fetchData.current = () => {
    const allTasks = getAllTasks();
    setTasks(allTasks);
  };

  useEffect(() => {
    initStorage();
  }, []);

  useEffect(() => {
    fetchData.current();
  }, [fetchData, numberOfTasks, isTaskEdited]);

  const showEditModalHandler = (data) => setTaskEdited(data.isEdited);

  const taskCreated = () => setNumberOfTasks(numberOfTasks + 1);

  const deleteTaskHandler = (data) => {
    deleteTask(data);
    setNumberOfTasks(numberOfTasks - 1);
  };

  return (
    <div className="App">
      <Header />
      <div className="row mrgnbtm">
        <TasksTable
          tasks={tasks}
          showEditModalHandler={showEditModalHandler}
          deleteHandler={deleteTaskHandler}
        />
      </div>
    </div>
  );
};

export default App;
