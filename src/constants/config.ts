export const APP_NAME = "in.vester.app";
export const APP_VERSION = "1.0.0";
export const APP_TITLE = `version ${APP_VERSION} March 3rd, 2023`;
export const AVAILABLE_WIDGETS = [
    { name: "Chart Box", type_id: "ChartBoxWidget", requirements: ["symbol"] },
    { name: "Crypto News", type_id: "NewsWidget", requirements: [] },
    { name: "Fear And Greed", type_id: "FearGreedWidget", requirements: [] },
    { name: "Price Ticker", type_id: "TickerWidget", requirements: ["symbol"] },
    { name: "Tickers Slider", type_id: "TickerTapeWidget", requirements: [] },
    {
        name: "Technical Analysis",
        type_id: "TechnicalAnalysisWidget",
        requirements: ["symbol"],
    },
    {
        name: "Mini Chart & Price",
        type_id: "MiniChartWidget",
        requirements: ["symbol"],
    },
    {
        name: "Economic Calendar",
        type_id: "EconomicCalendarWidget",
        requirements: [],
    },
    {
        name: "TV Box",
        type_id: "TVBox",
        options: ["CNBC", "Bloomberg"],
        requirements: ["select"],
    },
    {
        name: "Note",
        type_id: "NoteWidget",
        requirements: [],
    },
    {
        name: "Podcasts",
        type_id: "PodcastsWidget",
        requirements: [],
    },
    {
        name: "Bitcoin Next Halving",
        type_id: "BTCHalvingWidget",
        requirements: [],
    },
    {
        name: "Bookmarks",
        type_id: "BookmarksWidget",
        bookmarks: [{ title: "InvesterAPP", link: "https://in.vester.app" }],
        requirements: [],
    },
    {
        name: "Coin Signals",
        type_id: "CoinSignalsWidget",
        requirements: [],
    },
];
