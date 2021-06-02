<<<<<<< HEAD
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { Header } from "../components/Header";
import React from "react";
=======
import { render } from "@testing-library/react";
import { Header } from "../components/Header";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
>>>>>>> master

test("render header component renders static content", () => {
  const expectedContent = "Code Noobs Simple Web App ⚡";
  const component = render(<Header />);
  component.getByText(expectedContent);
});
