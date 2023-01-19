import { render, screen } from "@testing-library/react";
import Login from "./Login";
import { isDisabled } from "@testing-library/user-event/dist/utils";

test("username input shoudld be rendered", () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  expect(userInputEl).toBeInTheDocument();
});

test("password input shoudld be rendered", () => {
  render(<Login />);
  const passwordInput = screen.getByPlaceholderText(/password/i);
  expect(passwordInput).toBeInTheDocument();
});

test("username input shoudld be rendered", () => {
  render(<Login />);
  const buttonInputEl = screen.getByRole("button");
  expect(buttonInputEl).toBeInTheDocument();
});

test("username input shoudld be empty", () => {
  render(<Login />);
  const buttonInputEl = screen.getByPlaceholderText(/username/i);
  expect(buttonInputEl.value).toBe("");
});

test("username input shoudld be rendered", () => {
  render(<Login />);
  const buttonInputEl = screen.getByRole("button");
  expect(buttonInputEl).toBeDisabled();
});