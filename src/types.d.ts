type DeleteWidgetProps = {
    id: string;
};

type ChartBoxProps = {
    theme: "dark" | "light";
    symbol: string;
    id: string;
};

type TechnicalAnalysisProps = {
    theme: "dark" | "light";
    symbol: string;
    id: string;
};

type TickerWidgetProps = {
    theme: "dark" | "light";
    symbol: string;
    id: string;
};

type DynamicWidgetProps = {
    widget: Widget;
};

type NewsProps = {
    theme: "dark" | "light";
    widgetData: Widget;
    id: string;
};

type MiniChartProps = {
    theme: "dark" | "light";
    symbol: string;
    id: string;
};
