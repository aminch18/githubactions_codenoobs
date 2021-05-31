import { render } from "@testing-library/react";
import { fireEvent } from "@testing-library/dom";
import { TasksTable } from "../components/TasksTable";
import React from "react";
import { deleteTask } from "../services/tasksServices";
import { v4 as uuidv4 } from "uuid";
import "@testing-library/jest-dom/extend-expect";

test("should render correctly mocked data", () => {
  let tasks = [
    {
      id: uuidv4().toString(),
      Priority: "Critical",
      AssignedTo: "Pedro",
      CreatedBy: "Amin",
      CreatedDateTime: new Date().toLocaleString(),
      State: "Completed",
    },
  ];

  let mockedHandler = jest.fn(deleteTask);
  const component = render(
    <TasksTable
      tasks={tasks}
      taskEdited={false}
      deleteHandler={mockedHandler}
    />
  );
  component.getByText(tasks[0].Priority);
  component.getByText(tasks[0].AssignedTo);
  component.getByText(tasks[0].CreatedBy);
  component.getByText(tasks[0].CreatedDateTime);
  component.getByText(tasks[0].State);
});

test("should click one time when deleting task", () => {
  let tasks = [
    {
      id: uuidv4().toString(),
      Priority: "Critical",
      AssignedTo: "Pedro",
      CreatedBy: "Amin",
      CreatedDateTime: new Date().toLocaleString(),
      State: "Completed",
    },
  ];

  let setEditMockedHandler = jest.fn();
  let deleteTaskMockedHandler = jest.fn();
  const component = render(
    <TasksTable
      tasks={tasks}
      taskEdited={setEditMockedHandler}
      deleteHandler={deleteTaskMockedHandler}
    />
  );
  const button = component.getByText("Edit");
  const button2 = component.getByText("Delete");
  fireEvent.click(button);
  fireEvent.click(button2);

  expect(deleteTaskMockedHandler).toHaveBeenCalledTimes(1);
  expect(setEditMockedHandler).toHaveBeenCalledTimes(0);
});
