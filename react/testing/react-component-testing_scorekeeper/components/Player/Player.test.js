import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", () => {
  render(<Player name="Emily" score="10"></Player>);
  const buttons = screen.getAllByRole("button");

  expect(buttons).toHaveLength(2);
});

test("calls callbacks when increasing or decreasing score", async () => {
  const handleIncreasePlayerScore = jest.fn();
  const handleDecreasePlayerScore = jest.fn();

  const user = userEvent.setup();

  render(
    <Player
      onIncreasePlayerScore={handleIncreasePlayerScore}
      onDecreasePlayerScore={handleDecreasePlayerScore}
    />
  );

  const decreaseButton = screen.getByRole("button", {
    name: "Decrease Score",
  });

  const increaseButton = screen.getByRole("button", {
    name: "Increase Score",
  });

  await user.click(decreaseButton);
  await user.click(increaseButton);

  expect(handleDecreasePlayerScore).toHaveBeenCalledTimes(1);
  expect(handleIncreasePlayerScore).toHaveBeenCalledTimes(1);
});
