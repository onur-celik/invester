import { useEffect } from "react";
import GridLayout, { Layout } from "react-grid-layout";
import "../../styling/Widgets.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import DynamicWidget from "./components/DynamicWidget";
import { useSelector } from "react-redux";
import { useBoard } from "../../hooks/useBoard";
import { GlobalData } from "../../store/global";

export type Widget = {
    i: string;
    type: string;
    symbol?: string;
    title?: string;
    content?: string;
    bookmarks?: Bookmark[];
};
export type WidgetInfo = Widget & Layout;

export default function Board() {
    const { save, getBoard } = useBoard();
    const global = useSelector((state: GlobalData) => state);

    useEffect(() => {
        getBoard();
        // eslint-disable-next-line
    }, []);

    if (!global.board) return null;

    return (
        <div id="Board" data-testid="Board">
            {global.board.length > 0 && (
                <GridLayout
                    resizeHandles={["s", "se", "e"]}
                    autoSize={true}
                    draggableHandle={".header"}
                    isBounded={false}
                    useCSSTransforms={true}
                    preventCollision={false}
                    verticalCompact={true}
                    className="layout"
                    containerPadding={[10, 0]}
                    layout={global.board}
                    cols={24}
                    rowHeight={35}
                    width={window.innerWidth}
                    onDragStop={async (layout) => {
                        save({ layout, widgets: global.widgets });
                    }}
                    onResizeStop={async (layout) => {
                        save({ layout, widgets: global.widgets });
                    }}
                >
                    {global.board.map((widget: WidgetInfo) => {
                        return (
                            <div key={widget.i} data-testid="Widget">
                                <DynamicWidget widget={widget} />
                            </div>
                        );
                    })}
                </GridLayout>
            )}
        </div>
    );
}
