import { SingleTicker } from "react-ts-tradingview-widgets";
import { memo } from "react";
import DeleteWidget from "../DeleteWidget";
const TickerWidget = memo(function ({ symbol, id, theme }: TickerWidgetProps) {
    return (
        <div className="widget TickerWidget">
            <div className="header">
                <div className="widgetTitle">{`Ticker - ${symbol}`}</div>
                <DeleteWidget id={id} />
            </div>
            <div className="content">
                <SingleTicker
                    colorTheme={theme}
                    symbol={symbol}
                    isTransparent
                    width={"100%"}
                />
            </div>
        </div>
    );
});
export default TickerWidget;
