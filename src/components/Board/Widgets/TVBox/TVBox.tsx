import { memo, useState } from "react";
import DeleteWidget from "../DeleteWidget";
const AVAILABLE_CHANNELS = [
    {
        id: "CNBC",
        title: "CNBC LIVE",
        slug: "9NyxcX3rhQs",
    },
];
const TVBox = memo(function ({ id }: { id: string }) {
    // eslint-disable-next-line
    const [selectedChannel, setSelectedChannel] = useState(
        AVAILABLE_CHANNELS[0]
    );
    return (
        <div className="widget TickerWidget">
            <div className="header">
                <div className="widgetTitle">
                    TV Box - {selectedChannel.title}
                </div>
                <DeleteWidget id={id} />
            </div>
            <div className="content">
                <iframe
                    className="d-grid"
                    style={{ border: 0 }}
                    width="100%"
                    height="100%"
                    src={`https://www.youtube-nocookie.com/embed/${selectedChannel.slug}?autoplay=1&mute=1&cc_load_policy=1`}
                    title={`${selectedChannel.title}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
            </div>
        </div>
    );
});
export default TVBox;
