import { render } from "@testing-library/react";
import { CreateTask } from "../components/CreateTask";
import React from "react";
import "@testing-library/jest-dom/extend-expect";

test("render create task component renders static content", () => {
  const expectedContent = "Name of worker";
  let mockedHandler = jest.fn(() => true);
  const component = render(<CreateTask taskCreated={mockedHandler} />);
  const input = component.getByTestId("AssignedTo");
  expect(input.placeholder).toEqual(expectedContent);
});
