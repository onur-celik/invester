import { memo, useEffect } from "react";
import DeleteWidget from "../DeleteWidget";
const CoinSignalsWidget = memo(function ({ id }: { id: string }) {
    return (
        <div className="widget CoinSignalsWidget">
            <div className="header">
                <div className="widgetTitle">Coin Signals</div>
                <DeleteWidget id={id} />
            </div>
            <div className="content">
                <iframe
                    id="coinSignalsIframe"
                    src="https://cryptoindex.com/predictions-widget.html"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                ></iframe>
            </div>
        </div>
    );
});
export default CoinSignalsWidget;
