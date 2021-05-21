const STORAGE_KEY = "tasksList.storage";

const setItemOnStorage = (data) =>
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

export const initStorage = () =>
  localStorage.setItem(STORAGE_KEY, JSON.stringify([]));

export const getAllTasks = () => JSON.parse(localStorage.getItem(STORAGE_KEY));

export const createTask = (data) => {
  data.CreatedDateTime = new Date().toLocaleString();
  let allTasks = getAllTasks();
  allTasks.push(data);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(allTasks));
};

export const updateTask = (data) => {
  const allTasks = getAllTasks();
  const taskIndex = allTasks.findIndex((task) => task.id === data.id);
  allTasks[taskIndex] = data;
  setItemOnStorage(allTasks);
  return {
    isEdited: true,
    editedIncident: allTasks[taskIndex],
  };
};

export const deleteTask = (id) => {
  const allTasks = getAllTasks();
  const taskIndex = allTasks.findIndex((task) => task.id === id);
  allTasks.splice(taskIndex, 1);
  setItemOnStorage(allTasks);
};

export const cleanStorage = () => localStorage.clear();
