import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GlobalData, toggleModalOpen } from "../../store/global";
import { Copy, ArrowRight, Package } from "react-feather";
import { AVAILABLE_WIDGETS } from "../../constants/config";
import { v4 as uuidv4 } from "uuid";
import { useBoard } from "../../hooks/useBoard";

export default function AddWidget() {
    const global: GlobalData = useSelector((state: GlobalData) => state);
    const dispatch = useDispatch();

    if (!global.modalOpen) return null;
    return (
        <div className="addWidgetModalBackDrop">
            <div className="addWidgetModal">
                <div className="addWidgetModalHeader">
                    <div>
                        <Copy
                            size={12}
                            color="orange"
                            style={{ marginRight: 10 }}
                        />
                        Add New Widget
                    </div>
                    <div
                        onClick={() => {
                            dispatch(toggleModalOpen(false));
                        }}
                        className="closeButton"
                    >
                        Cancel
                    </div>
                </div>
                <div className="addWidgetModalContent">
                    {AVAILABLE_WIDGETS.map((widget, index) => {
                        return <WidgetBox key={index} data={widget} />;
                    })}
                    <p style={{ padding: 20 }}>
                        To add the widget box of your choice to the board,
                        simply select one from the options provided above.
                    </p>
                </div>
            </div>
        </div>
    );
}
const WidgetBox = ({
    data,
}: {
    data: {
        name: string;
        type_id: string;
        requirements: string[];
        options?: string[];
    };
}) => {
    const [symbol, setSymbol] = useState("BTCUSDT");
    const [channel, setChannel] = useState("CNBC");
    const { save } = useBoard();
    const global = useSelector((state: GlobalData) => state);
    const dispatch = useDispatch();

    function handleAddWidget(data: {
        name: string;
        type_id: string;
        options?: string[];
        requirements: string[];
    }) {
        const newId = uuidv4();
        const newLayoutItemItem = {
            w: 6,
            h: 4,
            x: 0,
            y: Infinity,
            i: newId,
            moved: false,
            static: false,
        };
        const newWidgetItem = {
            i: newId,
            type: data.type_id,
            symbol: symbol,
            ...(data.type_id === "TVBox" ? { channel: channel } : {}),
        };

        save({
            layout: [...global.layouts, newLayoutItemItem],
            widgets: [...global.widgets, newWidgetItem],
        });
        dispatch(toggleModalOpen(false));
    }

    return (
        <div className="WidgetBox">
            <div className="col">
                <Package />{" "}
                <ArrowRight
                    color="orange"
                    size={12}
                    style={{ marginRight: 20 }}
                />{" "}
                {data.name}
            </div>
            <div className="col">
                {data.requirements.length > 0 &&
                    data.requirements[0] === "symbol" && (
                        <input
                            placeholder="Symbol"
                            className="addWidgetSymbolInput"
                            value={symbol}
                            onChange={(e) => {
                                setSymbol(e.target.value);
                            }}
                        />
                    )}
                {data.requirements.length > 0 &&
                    data.requirements[0] === "select" && (
                        <select
                            onChange={(e) => {
                                setChannel(e.target.value);
                            }}
                        >
                            {data.options?.map((opt, index) => {
                                return (
                                    <option key={index} value={opt}>
                                        {opt}
                                    </option>
                                );
                            })}
                        </select>
                    )}
            </div>
            <div className="col">
                <button
                    className="addWidgetButton"
                    onClick={() => {
                        handleAddWidget(data);
                    }}
                >
                    Add
                </button>
            </div>
        </div>
    );
};
