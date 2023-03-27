import { memo } from "react";
import { MiniChart } from "react-ts-tradingview-widgets";
import DeleteWidget from "../DeleteWidget";

const MiniChartWidget = memo(function ({ symbol, id, theme }: MiniChartProps) {
    return (
        <div className="widget MiniChartWidget">
            <div className="header">
                <div className="widgetTitle">Mini Chart - {symbol}</div>
                <DeleteWidget id={id} />
            </div>
            <div className="content">
                <MiniChart
                    symbol={symbol}
                    colorTheme={theme}
                    width={"100%"}
                    dateRange="12M"
                    isTransparent
                />
            </div>
        </div>
    );
});

export default MiniChartWidget;
