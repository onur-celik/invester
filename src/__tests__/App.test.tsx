import { screen, render, waitFor } from "@testing-library/react";
import App from "../App";
import { Provider } from "react-redux";
import { store } from "../store";
import { act } from "react-dom/test-utils";

// test("init the Board", async () => {
//     render(<App />);
//     const boardEl = await screen.findByTestId("Board");
//     await waitFor(() => {
//         expect(boardEl).toBeInTheDocument();
//     });
// });

describe("invester tests", () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );
    test("initial widgets renders in the board correctly", async () => {
        const widgetEls = await screen.findAllByTestId("Widget");
        expect(widgetEls.length).toBeGreaterThan(1);
    });
});
