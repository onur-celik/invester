import ChartBoxWidget from "../components/Board/Widgets/ChartBox/ChartBoxWidget";
import "../styling/App.css";
import "../styling/Widgets.css";
import { ComponentStory, ComponentMeta } from "@storybook/react";

const mockData = {
    w: 9,
    h: 9,
    x: 6,
    y: 8,
    i: "initial_1",
    moved: false,
    static: false,
    type: "ChartBoxWidget",
    symbol: "BTCUSDT",
};

export default {
    title: "Widgets",
    component: ChartBoxWidget,
    argTypes: {
        widgetData: {
            options: { ...mockData },
        },
    },
} as ComponentMeta<typeof ChartBoxWidget>;

const Template: ComponentStory<typeof ChartBoxWidget> = () => {
    return (
        <div style={{ width: 600, height: 400 }}>
            <ChartBoxWidget theme="dark" id="testId" symbol={mockData.symbol} />
        </div>
    );
};

export const ChartBox = Template.bind({});
ChartBox.args = {
    symbol: mockData.symbol,
};
