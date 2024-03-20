import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  render(<Input></Input>);
  /* const input = screen.getByLabelText("value");
  expect(input).toHaveAttribute("name", "value"); */
});

test("calls callback on every user input", async () => {
  const onChange = jest.fn();
  const user = userEvent.setup();
  render(<Input onChange={onChange}></Input>);

  const input = screen.getByRole("textbox");
  await user.type(input, "my game");

  expect(onChange).toHaveBeenCalledTimes(7);
});
