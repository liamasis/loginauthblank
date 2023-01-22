import { render, screen } from "@testing-library/react";
import Login from "./Login";
test("check if username field has rendered", () => {
  render(<Login />);
  const usernameField = screen.getByPlaceholderText(/username/i);
  expect(usernameField).toBeInTheDocument();
});

test("check if password field has rendered", () => {
  render(<Login />);
  const passwordField = screen.getByPlaceholderText(/password/i);
  expect(passwordField).toBeInTheDocument();
});

test("check if button has rendered", () => {
  render(<Login />);
  const buttonEle = screen.getByRole("button");
  expect(buttonEle).toBeInTheDocument();
});

test("check if error message not there on load", () => {
  render(<Login />);
  const errormsg = screen.getByTestId("errormsg");
  expect(errormsg).not.tobe();
});
