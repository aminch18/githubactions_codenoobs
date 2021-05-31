import { render } from "@testing-library/react";
import { CreateTask } from "../components/CreateTask";
import { fireEvent, prettyDOM } from "@testing-library/dom";
import React from "react";
import "@testing-library/jest-dom/extend-expect";

test("render create task component renders static content", () => {
  const expectedContent = "Name of Worker";
  const component = render(<CreateTask taskCreated={mockedHandler} />);
  const input = component.getByTestId("AssignedTo");
  expect(input.placeholder).toEqual(expectedContent);
});
