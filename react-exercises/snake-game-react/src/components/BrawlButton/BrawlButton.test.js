import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import BrawlButton from "./BrawlButton";

afterEach(cleanup);

describe("<BrawlButton />", () => {
  test("if the text inside button is correct", () => {
    const { getByTestId } = render(<BrawlButton text="Click Me" />);
    const button = getByTestId("brawlButton");
    expect(button.textContent).toBe("Click Me");
  });
  test("if the passed onClick function is invoked", () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <BrawlButton text="Click Me" onClick={onClick} />
    );
    const button = getByTestId("brawlButton");
    fireEvent.click(button, { bubble: true });
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
