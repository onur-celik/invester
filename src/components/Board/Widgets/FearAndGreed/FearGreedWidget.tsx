import React from "react";
import DeleteWidget from "../DeleteWidget";

const FearGreedWidget = ({ id }: { id: string }) => {
    return (
        <div className="widget FearAndGreedWidget">
            <div className="header">
                <div className="widgetTitle">Fear And Greed</div>
                <DeleteWidget id={id} />
            </div>
            <div className="content">
                <img
                    src="https://alternative.me/crypto/fear-and-greed-index.png"
                    alt="Latest Crypto Fear & Greed Index"
                    style={{ width: "100%", height: "100%" }}
                />
            </div>
        </div>
    );
};

export default FearGreedWidget;
