import { fireEvent, render, screen } from "@testing-library/react";
import Header from "./Header";
import { Provider } from "react-redux";
import { store } from "../../store";

beforeEach(() => {
    render(
        <Provider store={store}>
            <Header />
        </Provider>
    );
});

test("renders the Header buttons correctly", () => {
    const addWidgetButton = screen.getByText(/add widget/i);
    expect(addWidgetButton).toBeInTheDocument();

    const sourceCodeButton = screen.getByText(/source code/i);
    expect(sourceCodeButton).toBeInTheDocument();

    const fullScreenButton = screen.getByText(/toggle full screen/i);
    expect(fullScreenButton).toBeInTheDocument();
});

test("fullscreen button works", () => {
    const fullScreenButton = screen.getByTestId("fullScreenButton");
    fireEvent.click(fullScreenButton);

    const fullScreenButtonClicked = screen.getByText(/exit full screen/i);
    expect(fullScreenButtonClicked).toBeInTheDocument();
});

// TODO : expect add widget button works..
