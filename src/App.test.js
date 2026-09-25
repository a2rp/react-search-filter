import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the search filter app", () => {
    render(<App />);
    expect(
        screen.getByRole("heading", { name: /find the right word/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("searchbox", { name: /search words/i })).toBeInTheDocument();
});
