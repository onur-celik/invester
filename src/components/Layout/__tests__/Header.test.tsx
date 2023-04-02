import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import { store } from "../../../store";
import { AVAILABLE_WIDGETS } from "../../../constants/config";

beforeEach(() => {
    render(
        <Provider store={store}>
            <Header />
        </Provider>
    );
});
describe("Header tests", () => {
    test("renders Header component correctly", () => {
        const HeaderComponent = screen.getByTestId("Header");
        expect(HeaderComponent).toBeInTheDocument();
    });

    test("renders Clock component correctly", () => {
        const ClockComponent = screen.getByTestId("Clock");
        expect(ClockComponent).toBeInTheDocument();
    });
    test("renders Header buttons correctly", () => {
        const addWidgetButton = screen.getByTestId("addWidgetButton");
        expect(addWidgetButton).toBeInTheDocument();

        const clearDashboardButton = screen.getByTestId("clearDashboard");
        expect(clearDashboardButton).toBeInTheDocument();

        const resetDashboardButton = screen.getByTestId("resetDashboard");
        expect(resetDashboardButton).toBeInTheDocument();

        const sourceCodeButton = screen.getByTestId("sourceCodeButton");
        expect(sourceCodeButton).toBeInTheDocument();

        const fullScreenButton = screen.getByTestId("fullScreenButton");
        expect(fullScreenButton).toBeInTheDocument();
    });

    test("add new widget button opens the modal, and renders the widget boxes with add buttons", () => {
        const addWidgetButton = screen.getByTestId("addWidgetButton");
        fireEvent.click(addWidgetButton);

        setTimeout(() => {
            const addWidgetModal = screen.getByTestId("AddNewWidgetModal");
            expect(addWidgetModal).toBeInTheDocument();

            const widgetBoxes = screen.getAllByText(/Add/i);
            expect(widgetBoxes.length).toBe(AVAILABLE_WIDGETS.length);
        }, 100);
    });

    test("fullscreen button works", () => {
        const fullScreenButton = screen.getByTestId("fullScreenButton");
        fireEvent.click(fullScreenButton);
        setTimeout(() => {
            expect(document.fullscreenElement).toBe(document.documentElement);
        }, 100);
    });
});
