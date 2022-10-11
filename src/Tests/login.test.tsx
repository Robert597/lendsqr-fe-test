import {render, screen} from "@testing-library/react";
import Login from "../Pages/Login";

test("username input should be rendered", () => {
    render(<Login/>);
    const userInputEl = screen.getByPlaceholderText(/Username/i);
    expect(false).toEqual(false);
});