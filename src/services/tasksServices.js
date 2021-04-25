import { v4 as uuidv4 } from "uuid";
let mockedTasks = [
  {
    id: uuidv4().toString(),
    Priority: "Critical",
    AssignedTo: "Pedro",
    CreatedBy: "Amin",
    CreatedDateTime: new Date().toLocaleString(),
    State: "Completed",
  },
  {
    id: uuidv4().toString(),
    AssignedTo: "",
    Priority: "Major",
    CreatedBy: "Amin",
    CreatedDateTime: new Date().toLocaleString(),
    State: "To Do",
  },
  {
    id: uuidv4().toString(),
    Priority: "Low",
    AssignedTo: "Jorge",
    CreatedBy: "Amin",
    CreatedDateTime: new Date().toLocaleString(),
    State: "In Progress",
  },
  {
    id: uuidv4().toString(),
    Priority: "High",
    AssignedTo: "Amin",
    CreatedBy: "Amin",
    CreatedDateTime: new Date().toLocaleString(),
    State: "Completed",
  },
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
