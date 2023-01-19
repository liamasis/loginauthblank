import { fireEvent, render, screen } from "@testing-library/react";
import Login from "./Login";
import React from "react";

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

test("button input shoudld be rendered", () => {
  render(<Login />);
  const buttonInputEl = screen.getByRole("button");
  expect(buttonInputEl).toBeInTheDocument();
});

test("username input shoudld be empty", () => {
  render(<Login />);
  const buttonInputEl = screen.getByPlaceholderText(/username/i);
  expect(buttonInputEl.value).toBe("");
});

test("button input shoudld be disabled", () => {
  render(<Login />);
  const buttonInputEl = screen.getByRole("button");
  expect(buttonInputEl).toBeDisabled();
});

test("error message should be not there on render", () => {
  render(<Login />);
  const errorEl = screen.getByTestId("error");
  expect(errorEl).not.toBeVisible();
});

test("username input shoudld change", () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  const usernameTest = "test";
  fireEvent.change(userInputEl, { target: { value: usernameTest } });
  expect(userInputEl.value).toBe(usernameTest);
});

test("password input shoudld change", () => {
  render(<Login />);
  const passwordInput = screen.getByPlaceholderText(/password/i);
  const passwordTest = "test";
  fireEvent.change(passwordInput, { target: { value: passwordTest } });
  expect(passwordInput.value).toBe(passwordTest);
});

test("", () => {
  render(<Login />);
  const passwordInput = screen.getByPlaceholderText(/password/i);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  const buttonInputEl = screen.getByRole("button");
  const testValue = "test";

  fireEvent.change(passwordInput, { target: { value: testValue } });
  fireEvent.change(userInputEl, { target: { value: testValue } });

  expect(buttonInputEl).not.toBeDisabled();
});
