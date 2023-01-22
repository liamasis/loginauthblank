import { fireEvent, render, screen } from "@testing-library/react";
import { click } from "@testing-library/user-event/dist/click";
import Login from "./Login";
jest.mock("axios", () => ({
  __esModule: true,
  default: {
    get: () => ({
      data: { id: 1, name: "liam" },
    }),
  },
}));
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

test("username input shoudld be empty", () => {
  render(<Login />);
  const buttonInputEl = screen.getByPlaceholderText(/username/i);
  expect(buttonInputEl.value).toBe("");
});

test("password input shoudld be empty", () => {
  render(<Login />);
  const passwordEl = screen.getByPlaceholderText(/username/i);
  expect(passwordEl.value).toBe("");
});

test("button input shoudld be disabled", () => {
  render(<Login />);
  const buttonInputEl = screen.getByRole("button");
  expect(buttonInputEl).toBeDisabled();
});

test("check if error message not there on load", () => {
  render(<Login />);
  const errormsg = screen.getByTestId("errormsg");
  expect(errormsg).not.toBeVisible();
});

test("username should change", () => {
  render(<Login />);
  const usernameField = screen.getByPlaceholderText(/username/i);
  const test = "test";
  fireEvent.change(usernameField, { target: { value: test } });

  expect(usernameField.value).toBe(test);
});
test("check if please wait isn't written on button", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).not.toHaveTextContent(/please wait/i);
});

test("check if password field has rendered", () => {
  render(<Login />);
  const passwordField = screen.getByPlaceholderText(/password/i);
  const test = "test";
  fireEvent.change(passwordField, { target: { value: test } });
  expect(passwordField.value).toBe(test);
});

test("check if username/password makes button active", () => {
  render(<Login />);
  const passwordField = screen.getByPlaceholderText(/password/i);
  const usernameField = screen.getByPlaceholderText(/username/i);
  const buttonInputEl = screen.getByRole("button");
  const test = "test";
  fireEvent.change(passwordField, { target: { value: test } });
  fireEvent.change(usernameField, { target: { value: test } });
  expect(buttonInputEl).not.toBeDisabled();
});
test("button input shoudld be not be loading after render ", async () => {
  render(<Login />);
  const passwordField = screen.getByPlaceholderText(/password/i);
  const usernameField = screen.getByPlaceholderText(/username/i);
  const buttonInputEl = screen.getByRole("button");
  const test = "test";
  fireEvent.change(passwordField, { target: { value: test } });
  fireEvent.change(usernameField, { target: { value: test } });
  fireEvent.click(buttonInputEl);
  expect(buttonInputEl).not.toHaveTextContent(/loading/i);
});

test("the customers name should be rendered at end ", async () => {
  render(<Login />);
  const passwordField = screen.getByPlaceholderText(/password/i);
  const usernameField = screen.getByPlaceholderText(/username/i);
  const buttonInputEl = screen.getByRole("button");
  const test = "test";
  fireEvent.change(passwordField, { target: { value: test } });
  fireEvent.change(usernameField, { target: { value: test } });
  fireEvent.click(buttonInputEl);
  const userField = await screen.getByText("liam");

  expect(userField).toBeInTheDocument();
});
