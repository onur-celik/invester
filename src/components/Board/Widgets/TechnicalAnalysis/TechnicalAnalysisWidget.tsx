import { memo } from "react";
import { TechnicalAnalysis } from "react-ts-tradingview-widgets";
import DeleteWidget from "../DeleteWidget";
/*
    Chart Box Widget List
    // https://tradingview-widgets.jorrinkievit.xyz/docs/intro
*/

const TechnicalAnalysisWidget = memo(function ({
    symbol,
    id,
    theme,
}: TechnicalAnalysisProps) {
    return (
        <div className="widget TechnicalAnalysisWidget">
            <div className="header">
                <div className="widgetTitle">Technical Analysis</div>
                <DeleteWidget id={id} />
            </div>
            <div className="content">
                <TechnicalAnalysis
                    colorTheme={theme}
                    isTransparent
                    symbol={symbol}
                    width={"100%"}
                ></TechnicalAnalysis>
            </div>
        </div>
    );
});

export default TechnicalAnalysisWidget;
