import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Giftogram demo heading", () => {
  render(<App />);
  expect(screen.getByText("Reward & Expense Tracker")).toBeInTheDocument();
});
