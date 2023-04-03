import { useDispatch, useSelector } from "react-redux";
import {
    GlobalData,
    setBoard,
    setDashboards,
    setLayouts,
    setWidgets,
    toggleLayoutChanged,
} from "../store/global";
import { Layout } from "react-grid-layout";
import { Widget, WidgetInfo } from "../components/Board/Board";
import { INITIAL_LAYOUT, INITIAL_WIDGETS } from "../constants/initials";
import { useDashboard } from "./useDashboard";

export const useBoard = (): UseBoardMethods => {
    const dispatch = useDispatch();
    const { getLocalDashboards } = useDashboard();
    const { activeDashboard, dashboards } = useSelector(
        (state: GlobalData) => state
    );

    const getBoard = () => {
        const layout_changed = localStorage.getItem("layout_changed");
        if (layout_changed) {
            // layout changed before
            createLayout();
        } else {
            // this is the first init..
            init();
            dispatch(toggleLayoutChanged(true));
        }
    };

    /// combines layouts and widgets by "i" and returns
    /// layout array
    const generateLayoutArray = (
        _l: Layout[],
        _w: Widget[]
    ): Promise<WidgetInfo[]> => {
        return new Promise((resolve) => {
            resolve(
                _l.map((lo) => {
                    const { i } = lo;
                    const widget_info = _w.find((w: Widget) => w.i === i);
                    return { ...lo, ...widget_info };
                }) as WidgetInfo[]
            );
        });
    };

    /// saves widgets, layouts to both global store and local storage
    const save = async ({ layout, widgets }: UseBoardProps) => {
        if (activeDashboard === "home") {
            const widgetList: Awaited<Promise<WidgetInfo[]>> =
                await generateLayoutArray(layout, widgets);
            dispatch(setBoard(widgetList));
            dispatch(setWidgets(widgets));
            dispatch(setLayouts(layout));
        } else {
            const localDashboards = await getLocalDashboards();
            const updatedDashboards = localDashboards.map((dashB) => {
                if (dashB.id === activeDashboard) {
                    return { ...dashB, widgets, layouts: layout };
                } else {
                    return dashB;
                }
            });
            dispatch(setDashboards(updatedDashboards));
            const widgetList: Awaited<Promise<WidgetInfo[]>> =
                await generateLayoutArray(layout, widgets);
            dispatch(setBoard(widgetList));
        }
    };

    /// create layout according to the selected dashboard id
    /// and sets the board
    const createLayout = async () => {
        if (activeDashboard === "home") {
            let layout: Layout[] = await JSON.parse(
                localStorage.getItem("layouts") as string
            );
            let widgets: WidgetInfo[] = await JSON.parse(
                localStorage.getItem("widgets") as string
            );

            const generatedLayout: Awaited<Promise<WidgetInfo[]>> =
                await generateLayoutArray(layout, widgets);
            dispatch(setBoard(generatedLayout));
            save({ layout, widgets });
        } else {
            if (dashboards.length > 0) {
                const selectedDashboard = dashboards.filter(
                    (dashB) => dashB.id === activeDashboard
                )[0];
                let layout: Layout[] = selectedDashboard.layouts;
                let widgets: Widget[] = selectedDashboard.widgets;

                const generatedLayout: Awaited<Promise<WidgetInfo[]>> =
                    await generateLayoutArray(layout, widgets);
                dispatch(setBoard(generatedLayout));
                save({ layout, widgets });
            }
        }
    };

    const deleteWidget = async (widgetId: string) => {
        if (activeDashboard === "home") {
            let layouts: Layout[] = await JSON.parse(
                localStorage.getItem("layouts") as string
            );
            let widgets: WidgetInfo[] = await JSON.parse(
                localStorage.getItem("widgets") as string
            );

            const newLayouts = layouts.filter((ly) => ly.i !== widgetId && ly);
            const newWidgets = widgets.filter((wd) => wd.i !== widgetId && wd);

            save({ layout: newLayouts, widgets: newWidgets });
        } else {
            const thisDashboard: Dashboard = dashboards.find(
                (dashB) => dashB.id === activeDashboard
            ) as Dashboard;
            const newLayouts = thisDashboard.layouts.filter(
                (ly) => ly.i !== widgetId && ly
            );
            const newWidgets = thisDashboard.widgets.filter(
                (wd) => wd.i !== widgetId && wd
            );
            save({ layout: newLayouts, widgets: newWidgets });
        }
    };

    const init = async () => {
        const layout: Layout[] = INITIAL_LAYOUT;
        const widgets: Widget[] = INITIAL_WIDGETS;

        save({ layout, widgets });
    };

    return {
        save,
        init,
        createLayout,
        generateLayoutArray,
        getBoard,
        deleteWidget,
    };
};
