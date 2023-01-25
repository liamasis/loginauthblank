import { render, screen } from "@testing-library/react";
import Login from "./Login";
test("Username is rendered", () => {
  render(<Login />);
  const usernameElement = screen.getByPlaceholderText(/username/i);
  expect(usernameElement).toBeInTheDocument();
});
test("Password is rendered", () => {
  render(<Login />);
  const passwordElement = screen.getByPlaceholderText(/password/i);
  expect(passwordElement).toBeInTheDocument();
});
test("Button is rendered", () => {
  render(<Login />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});

test("Button is rendered but disabled", () => {
  render(<Login />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeDisabled();
});
