import { memo } from "react";
import { TickerTape } from "react-ts-tradingview-widgets";
import DeleteWidget from "../DeleteWidget";
/*
    Chart Box Widget List
    // https://tradingview-widgets.jorrinkievit.xyz/docs/intro
*/

const TickerTapeWidget = memo(function ({
    id,
    theme,
}: {
    id: string;
    theme: "dark" | "light";
}) {
    return (
        <div className="widget ChartBoxWidget">
            <div className="header">
                <div className="widgetTitle">Prices</div>
                <DeleteWidget id={id} />
            </div>
            <div className="content">
                <TickerTape colorTheme={theme} isTransparent></TickerTape>
            </div>
        </div>
    );
});
export default TickerTapeWidget;
