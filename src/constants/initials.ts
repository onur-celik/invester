export const INITIAL_LAYOUT = [
    { w: 9, h: 3, x: 0, y: 0, i: "initial_1", moved: false, static: false },
    { w: 3, h: 3, x: 0, y: 3, i: "initial_2", moved: false, static: false },
    { w: 3, h: 3, x: 0, y: 6, i: "initial_3", moved: false, static: false },
    { w: 6, h: 10, x: 9, y: 0, i: "initial_4", moved: false, static: false },
    { w: 9, h: 10, x: 0, y: 9, i: "initial_5", moved: false, static: false },
    { w: 6, h: 6, x: 3, y: 3, i: "initial_6", moved: false, static: false },
    { w: 5, h: 11, x: 15, y: 8, i: "initial_7", moved: false, static: false },
    { w: 4, h: 11, x: 20, y: 8, i: "initial_8", moved: false, static: false },
    { w: 6, h: 9, x: 9, y: 10, i: "initial_9", moved: false, static: false },
    { w: 9, h: 8, x: 15, y: 0, i: "initial_10", moved: false, static: false },
];

export const INITIAL_WIDGETS = [
    { i: "initial_1", type: "TickerTapeWidget" },
    { i: "initial_2", type: "TickerWidget", symbol: "CAPITALCOM:DXY" },
    { i: "initial_3", type: "TickerWidget", symbol: "USDTRY" },
    { i: "initial_4", type: "TechnicalAnalysisWidget", symbol: "BTCUSDT" },
    { i: "initial_5", type: "ChartBoxWidget", symbol: "BTCUSDT" },
    { i: "initial_6", type: "MiniChartWidget", symbol: "BTCUSDT" },
    { i: "initial_7", type: "EconomicCalendarWidget", symbol: "BTCUSDT" },
    { i: "initial_8", type: "NewsWidget", symbol: "BTCUSDT" },
    { i: "initial_9", type: "FearGreedWidget" },
    { i: "initial_10", type: "TVBox", symbol: "BTCUSDT" },
];
