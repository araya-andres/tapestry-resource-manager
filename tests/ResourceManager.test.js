import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import ResourceManager from "../src/ResourceManager";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container = document.createElement("div");
  container.remove();
});

it("renders", () => {
  act(() => {
    render(<ResourceManager />, container);
  });
  expect(container.textContent).toBe("1 1 1 1");
});
