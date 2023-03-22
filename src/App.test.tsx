import { screen, render, waitFor } from "@testing-library/react";
import App from "./App";

// test("init the Board", async () => {
//     render(<App />);
//     const boardEl = await screen.findByTestId("Board");
//     await waitFor(() => {
//         expect(boardEl).toBeInTheDocument();
//     });
// });

test("initial widgets renders in the board correctly", async () => {
    render(<App />);
    const widgetEls = await screen.findAllByTestId("Widget");
    expect(widgetEls.length).toBeGreaterThan(1);
});
