// @ts-nocheck
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import Login from "./Login";
jest.mock("axios", () => ({
  __esModule: true,

  default: {
    get: () => ({
      data: { id: 1, name: "John" },
    }),
  },
}));

test("username input should be rendered", () => {
  render(<Login />);
  const UserInputElement = screen.getByPlaceholderText(/username/i);
  expect(UserInputElement).toBeInTheDocument();
});

test("password input should be rendered", () => {
  render(<Login />);
  const UserInputElement = screen.getByPlaceholderText(/password/i);
  expect(UserInputElement).toBeInTheDocument();
});

test("button should be rendered", () => {
  render(<Login />);
  const UserInputElement = screen.getByRole("button");
  expect(UserInputElement).toBeInTheDocument();
});

test("button should be disabled", () => {
  render(<Login />);
  const UserInputElement = screen.getByRole("button");
  expect(UserInputElement).toBeDisabled();
});

test("loading should not be rendered", () => {
  render(<Login />);
  const UserInputElement = screen.getByRole("button");
  expect(UserInputElement).not.toHaveTextContent(/please wait/i);
});

test("password input should be empty", () => {
  render(<Login />);
  const PasswordInputElement = screen.getByPlaceholderText(/password/i);
  expect(PasswordInputElement.value).toBe("");
});

test("error message should not be visible", () => {
  render(<Login />);
  const errormessage = screen.getByTestId("error-span");
  expect(errormessage).not.toBeVisible();
});

test("username input should change", () => {
  render(<Login />);
  const UserInputElement = screen.getByPlaceholderText(/username/i);
  const testValue = "test";
  fireEvent.change(UserInputElement, { target: { value: testValue } });
  expect(UserInputElement.value).toBe(testValue);
});

test("password input should change ", () => {
  render(<Login />);
  const UserInputElement = screen.getByPlaceholderText(/password/i);
  const testValue = "test";
  fireEvent.change(UserInputElement, { target: { value: testValue } });
  expect(UserInputElement.value).toBe(testValue);
});

test("button should not be disabled when inputs exist", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  const usernameInput = screen.getByPlaceholderText(/username/i);
  const passwordInput = screen.getByPlaceholderText(/password/i);

  const testValue = "test";

  fireEvent.change(usernameInput, { target: { value: testValue } });
  fireEvent.change(passwordInput, { target: { value: testValue } });
  expect(buttonEl).not.toBeDisabled();
});

test("loading should not be rendered", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  const usernameInput = screen.getByPlaceholderText(/username/i);
  const passwordInput = screen.getByPlaceholderText(/password/i);

  const testValue = "test";

  fireEvent.change(usernameInput, { target: { value: testValue } });
  fireEvent.change(passwordInput, { target: { value: testValue } });
  fireEvent.click(buttonEl);
  expect(buttonEl).toHaveTextContent(/please wait/i);
});

test("loading should not be rendered after fetch", async () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  const usernameInput = screen.getByPlaceholderText(/username/i);
  const passwordInput = screen.getByPlaceholderText(/password/i);

  const testValue = "test";

  fireEvent.change(usernameInput, { target: { value: testValue } });
  fireEvent.change(passwordInput, { target: { value: testValue } });
  fireEvent.click(buttonEl);
  await waitFor(() => expect(buttonEl).not.toHaveTextContent(/please wait/i));
});
test("user should be rendered after fetch", async () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  const usernameInput = screen.getByPlaceholderText(/username/i);
  const passwordInput = screen.getByPlaceholderText(/password/i);

  const testValue = "test";

  fireEvent.change(usernameInput, { target: { value: testValue } });
  fireEvent.change(passwordInput, { target: { value: testValue } });
  fireEvent.click(buttonEl);

  const userItem = await screen.findByText("John");
  expect(buttonEl).not.toHaveTextContent(userItem);
});
