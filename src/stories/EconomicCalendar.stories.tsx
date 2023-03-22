import EconomicCalendarWidget from "../components/Board/Widgets/EconomicCalendar/EconomicCalendarWidget";
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
    component: EconomicCalendarWidget,
    argTypes: {
        widgetData: {
            options: { ...mockData },
        },
    },
} as ComponentMeta<typeof EconomicCalendarWidget>;

const Template: ComponentStory<typeof EconomicCalendarWidget> = () => {
    return (
        <div style={{ width: 600, height: 400 }}>
            <EconomicCalendarWidget theme="dark" id={mockData.i} />
        </div>
    );
};

export const EconomicCalendar = Template.bind({});
EconomicCalendar.args = {
    id: mockData.i,
};
