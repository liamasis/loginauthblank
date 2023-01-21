import { render, screen } from "@testing-library/react";
import Login from "./Login";
test("check if username field has rendered", () => {
  render(<Login />);
  const usernameField = screen.getByPlaceholderText(/username/i);
});
