import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
    setBoard,
    setLayouts,
    setWidgets,
    toggleLayoutChanged,
} from "../store/global";
import { Layout } from "react-grid-layout";
import { Widget, WidgetInfo } from "../components/Board/Board";
import { INITIAL_LAYOUT, INITIAL_WIDGETS } from "../constants/initials";

export const useBoard = (): UseBoardMethods => {
    const dispatch = useDispatch();

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

    const save = useCallback(
        async ({ layout, widgets }: UseBoardProps) => {
            const widgetList: Awaited<Promise<WidgetInfo[]>> =
                await generateLayoutArray(layout, widgets);
            dispatch(setBoard(widgetList));
            dispatch(setWidgets(widgets));
            dispatch(setLayouts(layout));
        },
        [dispatch]
    );

    const createLayout = async () => {
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
    };

    const deleteWidget = async (widgetId: string) => {
        let layouts: Layout[] = await JSON.parse(
            localStorage.getItem("layouts") as string
        );
        let widgets: WidgetInfo[] = await JSON.parse(
            localStorage.getItem("widgets") as string
        );

        const newLayouts = layouts.filter((ly) => ly.i !== widgetId && ly);
        const newWidgets = widgets.filter((wd) => wd.i !== widgetId && wd);

        save({ layout: newLayouts, widgets: newWidgets });
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
