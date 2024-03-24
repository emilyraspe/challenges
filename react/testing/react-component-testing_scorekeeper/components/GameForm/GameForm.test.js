import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("renders two input fields and a button", () => {
  render(<GameForm />);
  const input = screen.getAllByRole("textbox");
  const button = screen.getByRole("button", { name: "Create game" });
  expect(input).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("renders a form with the accessible name 'Create a new game'", () => {
  render(<GameForm />);
  const form = screen.getByText("Create a new game");
  expect(form).toBeInTheDocument();
});

test("submits the correct form data when every field is filled out", async () => {
  const game = jest.fn();
  render(<GameForm onCreateGame={game} />);
  const user = userEvent.setup();

  const inputGameName = screen.getByLabelText("Name of game");

  const inputPlayerName = screen.getByLabelText(
    "Player names, separated by comma"
  );

  expect(inputGameName).toBeInTheDocument();
  expect(inputPlayerName).toBeInTheDocument();

  await user.type(inputGameName, "Test");
  await user.type(inputPlayerName, "Test Test");
});

test("does not submit form if one input field is left empty", async () => {
  const game = jest.fn();
  render(<GameForm onCreateGame={game} />);
  const user = userEvent.setup();

  const inputGameName = screen.getByLabelText("Name of game");

  const inputPlayerName = screen.getByLabelText(
    "Player names, separated by comma"
  );

  const button = screen.getByRole("button", { name: /Create game/i });
  await user.click(button);

  expect(game).not.toHaveBeenCalled();
});
