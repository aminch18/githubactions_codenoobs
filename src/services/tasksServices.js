import { v4 as uuidv4 } from "uuid";
let mockedTasks = [
  {
    id: uuidv4().toString(),
    Priority: "Critical ⚠",
    AssignedTo: "👩🏽‍🦰 Mari",
    CreatedBy: "Amin 👨🏻‍💼",
    CreatedDateTime: new Date(2021,4,15).toLocaleString(),
    State: "Completed ✅",
  },
  {
    id: uuidv4().toString(),
    AssignedTo: "Amin 👨🏻‍💼",
    Priority: "Major ☢",
    CreatedBy: "Amin 👨🏻‍💼",
    CreatedDateTime: new Date(2021,4,24).toLocaleString(),
    State: "In Progress 🕐",
  },
  {
    id: uuidv4().toString(),
    Priority: "Low 🟡",
    AssignedTo: "🧑🏼 Juan",
    CreatedBy: "Amin 👨🏻‍💼",
    CreatedDateTime: new Date().toLocaleString(),
    State: "To Do ❗❗",
  },
  {
    id: uuidv4().toString(),
    Priority: "High 🔴",
    AssignedTo: "👱🏽‍♂️ Jose",
    CreatedBy: "Amin 👨🏻‍💼",
    CreatedDateTime: new Date(2021,4,12).toLocaleString(),
    State: "Completed ✅",
  },
  {
    id: uuidv4().toString(),
    Priority: "Medium 🟠",
    AssignedTo: "👩🏻 Paula",
    CreatedBy: "Amin 👨🏻‍💼",
    CreatedDateTime: new Date(2021,4,22).toLocaleString(),
    State: "In Progress 🕐",
  }
];

export const getAllTasks = () => mockedTasks;

export const getTask = (data) =>
  mockedTasks.find((task) => task.id === data.id);

export const createTask = (data) => {
  data.CreatedDateTime = new Date().toLocaleString();
  mockedTasks.push(data);
};

export const updateTask = (data) => {
  const taskIndex = mockedTasks.findIndex((task) => task.id === data.id);
  mockedTasks[taskIndex] = data;
  return {
    isEdited: true,
    editedIncident: mockedTasks[taskIndex],
  };
};

export const deleteTask = (id) => {
  const taskIndex = mockedTasks.findIndex((task) => task.id === id);
  mockedTasks.splice(taskIndex, 1);
};
