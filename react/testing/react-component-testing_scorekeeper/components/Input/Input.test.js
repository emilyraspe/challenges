import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  render(
    <Input
      name="nameOfInputFiled"
      labelText="This is a label"
      placeholder="e.g. Dodelido"
      required
    ></Input>
  );
  const label = screen.getByLabelText(/this is a label/i);
  const input = screen.getByRole("textbox");
});

test("calls callback on every user input", async () => {
  const onChange = jest.fn();
  const user = userEvent.setup();
  render(<Input onChange={onChange}></Input>);

  const input = screen.getByRole("textbox");
  await user.type(input, "my game");

  expect(onChange).toHaveBeenCalledTimes(7);
});
