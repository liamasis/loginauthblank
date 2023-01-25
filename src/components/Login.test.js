import { fireEvent, render, screen, waitFor } from "@testing-library/react";
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
// check empty loading not there
test("Username is empty", () => {
  render(<Login />);
  const usernameElement = screen.getByPlaceholderText(/username/i);
  expect(usernameElement.value).toBe("");
});
test("Password is empty", () => {
  render(<Login />);
  const passwordElement = screen.getByPlaceholderText(/password/i);
  expect(passwordElement.value).toBe("");
});
test("Button is not loading", () => {
  render(<Login />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).not.toHaveTextContent("Loading");
});
test("Error is not loading", () => {
  render(<Login />);
  const errorEle = screen.getByTestId("error");
  expect(errorEle).not.toBeVisible();
});
test("Password is empty", () => {
  render(<Login />);
  const passwordElement = screen.getByPlaceholderText(/password/i);
  const usernameElement = screen.getByPlaceholderText(/username/i);
  const buttonElement = screen.getByRole("button");
  const test = "test"; /* 
  fireEvent.change(usernameElement, { data: test });
  fireEvent.change(passwordElement, { data: test });
  await waitFor(() => fireEvent.click(buttonElement)); */

  expect(passwordElement.value).toBe("");
});
