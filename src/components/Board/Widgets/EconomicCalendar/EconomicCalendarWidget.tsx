import { EconomicCalendar } from "react-ts-tradingview-widgets";
import { memo } from "react";
import DeleteWidget from "../DeleteWidget";
/*
    Chart Box Widget List
    // https://tradingview-widgets.jorrinkievit.xyz/docs/intro
*/

const EconomicCalendarWidget = memo(function EconomicCalendarWidget({
    id,
    theme,
}: {
    id: string;
    theme: "dark" | "light";
}) {
    return (
        <div className="widget EconomicCalendarWidget">
            <div className="header">
                <div className="widgetTitle">Economic Calendar</div>
                <DeleteWidget id={id} />
            </div>
            <div className="content">
                <EconomicCalendar
                    colorTheme={theme}
                    isTransparent
                    width={"100%"}
                ></EconomicCalendar>
            </div>
        </div>
    );
});
export default EconomicCalendarWidget;
