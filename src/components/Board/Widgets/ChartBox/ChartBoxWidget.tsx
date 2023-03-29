import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import { memo } from "react";
import DeleteWidget from "../DeleteWidget";
/*
    Chart Box Widget List
    https://tradingview-widgets.jorrinkievit.xyz/docs/intro
*/

const ChartBoxWidget = memo(function ({ symbol, id, theme }: ChartBoxProps) {
    return (
        <div className="widget ChartBoxWidget">
            <div className="header">
                <div className="widgetTitle">Chart - {symbol}</div>
                <DeleteWidget id={id} />
            </div>
            <div className="content">
                <AdvancedRealTimeChart
                    theme={theme}
                    symbol={symbol}
                    width={"100%"}
                    height={"100%"}
                    interval="D"
                    show_popup_button={true}
                    autosize
                    // eslint-disable-next-line
                    style={"1"}
                ></AdvancedRealTimeChart>
            </div>
        </div>
    );
});

export default ChartBoxWidget;
