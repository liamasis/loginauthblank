import { render, screen } from "@testing-library/react";
import Login from "./Login";
test("username input shoudld be rendered", () => {
    render(<Login />);
    const userInputEl = screen.getByPlaceholderText(/username/i);

});