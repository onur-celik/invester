import TickerTapeWidget from "../components/Board/Widgets/TickerTape/TickerTape";
import "../styling/App.css";
import "../styling/Widgets.css";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Widgets",
    component: TickerTapeWidget,
} as ComponentMeta<typeof TickerTapeWidget>;

const Template: ComponentStory<typeof TickerTapeWidget> = () => {
    return (
        <div style={{ width: "100%", height: 65 }}>
            <TickerTapeWidget theme="dark" id={"testId"} />
        </div>
    );
};

export const TickerTape = Template.bind({});
