import React from "react";
import { render, cleanup } from "@testing-library/react";
import App from "./App";
import Playground from "./components/Playground/Playground";

afterEach(cleanup);

describe("<App />", () => {
  test("renders the app to the document", () => {
    const { getByTestId } = render(<App />);
    const app = getByTestId("App");
    expect(app).toBeInTheDocument();
  });
});
