import { createSlice } from "@reduxjs/toolkit";
import { Layout } from "react-grid-layout";
import { Widget, WidgetInfo } from "../components/Board/Board";
export type GlobalData = {
    modalOpen: boolean;
    widgets: Widget[];
    layouts: Layout[];
    board: WidgetInfo[];
    layout_changed: boolean;
    theme: "dark" | "light";
    activeDashboard: string;
    dashboards: Dashboard[];
};

const initialState: GlobalData = {
    modalOpen: false,
    widgets: [],
    layouts: [],
    board: [],
    layout_changed: false,
    theme: "light",
    activeDashboard: "home",
    dashboards: [],
};

const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        toggleModalOpen: (state, action) => {
            state.modalOpen = action.payload;
            localStorage.setItem("modalOpen", JSON.stringify(action.payload));
        },
        setWidgets: (state, action) => {
            state.widgets = action.payload;
            localStorage.setItem("widgets", JSON.stringify(action.payload));
        },
        setLayouts: (state, action) => {
            state.layouts = action.payload;
            localStorage.setItem("layouts", JSON.stringify(action.payload));
        },
        setBoard: (state, action) => {
            state.board = action.payload;
            localStorage.setItem("board", JSON.stringify(action.payload));
        },
        toggleLayoutChanged: (state, action) => {
            state.layout_changed = true;
            localStorage.setItem("layout_changed", JSON.stringify(true));
        },
        toggleTheme: (state, action) => {
            state.theme = action.payload;
            localStorage.setItem("theme", action.payload);
        },
        setActiveDashboard: (state, action) => {
            state.activeDashboard = action.payload;
            localStorage.setItem("activeDashboard", action.payload);
        },
        setDashboards: (state, action) => {
            state.dashboards = action.payload;
            localStorage.setItem("dashboards", JSON.stringify(action.payload));
        },
    },
});

export const {
    toggleModalOpen,
    setWidgets,
    setLayouts,
    setBoard,
    toggleLayoutChanged,
    toggleTheme,
    setActiveDashboard,
    setDashboards,
} = globalSlice.actions;
export default globalSlice.reducer;
