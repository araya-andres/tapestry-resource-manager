import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Counter from "./Counter";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders correctly", () => {
  act(() => {
    render(<Counter name="Counter" value="0" />, container);
  });
  expect(container.textContent).toBe("Counter0-+");

  act(() => {
    render(<Counter name="Counter" value="1" />, container);
  });
  expect(container.textContent).toBe("Counter1-+");
});
