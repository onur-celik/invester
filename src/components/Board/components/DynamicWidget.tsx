import ChartBoxWidget from "../Widgets/ChartBox/ChartBoxWidget";
import EconomicCalendarWidget from "../Widgets/EconomicCalendar/EconomicCalendarWidget";
import TickerWidget from "../Widgets/Ticker/TickerWidget";
import MiniChartWidget from "../Widgets/MiniChart/MiniChartWidget";
import TechnicalAnalysisWidget from "../Widgets/TechnicalAnalysis/TechnicalAnalysisWidget";
import NewsWidget from "../Widgets/News/NewsWidget";
import TickerTapeWidget from "../Widgets/TickerTape/TickerTape";
import FearGreedWidget from "../Widgets/FearAndGreed/FearGreedWidget";
import TVBox from "../Widgets/TVBox/TVBox";
import NoteWidget from "../Widgets/Note/NoteWidget";
import { useSelector } from "react-redux";
import { GlobalData } from "../../../store/global";
import PodcastsWidget from "../Widgets/Podcasts/PodcastsWidget";
import BTCHalvingWidget from "../Widgets/BTCHalving/BTCHalvingWidget";
import BookmarksWidget from "../Widgets/Bookmarks/BookmarksWidget";
import CoinSignalsWidget from "../Widgets/CoinSignals/CoinSignalsWidget";

export default function DynamicWidget({ widget }: DynamicWidgetProps) {
    const global = useSelector((state: GlobalData) => state);
    if (widget.type === "ChartBoxWidget" && widget.symbol) {
        return (
            <ChartBoxWidget
                theme={global.theme}
                id={widget.i}
                symbol={widget.symbol}
            />
        );
    }

    if (widget.type === "EconomicCalendarWidget") {
        return <EconomicCalendarWidget theme={global.theme} id={widget.i} />;
    }

    if (widget.type === "TickerWidget") {
        return (
            <TickerWidget
                theme={global.theme}
                id={widget.i}
                symbol={widget.symbol as string}
            />
        );
    }

    if (widget.type === "MiniChartWidget" && widget.symbol) {
        return (
            <MiniChartWidget
                theme={global.theme}
                id={widget.i}
                symbol={widget.symbol}
            />
        );
    }

    if (widget.type === "TechnicalAnalysisWidget" && widget.symbol) {
        return (
            <TechnicalAnalysisWidget
                theme={global.theme}
                id={widget.i}
                symbol={widget.symbol}
            />
        );
    }

    if (widget.type === "NewsWidget") {
        return (
            <NewsWidget
                theme={global.theme}
                id={widget.i}
                widgetData={widget}
            />
        );
    }

    if (widget.type === "NoteWidget") {
        return <NoteWidget id={widget.i} />;
    }

    if (widget.type === "TickerTapeWidget") {
        return <TickerTapeWidget theme={global.theme} id={widget.i} />;
    }

    if (widget.type === "FearGreedWidget") {
        return <FearGreedWidget id={widget.i} />;
    }

    if (widget.type === "TVBox") {
        return <TVBox id={widget.i} channel={widget.channel} />;
    }

    if (widget.type === "PodcastsWidget") {
        return <PodcastsWidget id={widget.i} />;
    }

    if (widget.type === "BTCHalvingWidget") {
        return <BTCHalvingWidget id={widget.i} />;
    }

    if (widget.type === "CoinSignalsWidget") {
        return <CoinSignalsWidget id={widget.i} />;
    }

    if (widget.type === "BookmarksWidget") {
        return (
            <BookmarksWidget bookmarks={widget.bookmarks || []} id={widget.i} />
        );
    }

    return (
        <TickerWidget
            theme={global.theme}
            id={widget.i}
            symbol={widget.symbol as string}
        />
    );
}
