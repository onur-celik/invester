import { useEffect, useState } from "react";
import DeleteWidget from "../DeleteWidget";
// import { Timeline } from "react-ts-tradingview-widgets";
/*
    Chart Box Widget List
    // https://tradingview-widgets.jorrinkievit.xyz/docs/intro
*/
export default function NewsWidget({ id, theme }: NewsProps) {
    const [url, setUrl] = useState<string>();
    useEffect(() => {
        if (theme === "dark") {
            let dark_colors = {
                bg_color: "00000000",
                header_text_color: "FFFFFF",
                link_color: "FFFFFF",
                text_color: "ffffff90",
            };
            setUrl(
                `https://cryptopanic.com/widgets/news/?bg_color=${dark_colors.bg_color}&amp;font_family=sans&amp;font_size=12&amp;header_bg_color=30343B00&amp;header_text_color=${dark_colors.header_text_color}&amp;link_color=${dark_colors.link_color}&amp;news_feed=recent&amp;posts_limit=50&amp;text_color=${dark_colors.text_color}&amp;title=Latest%20Crypto%20News`
            );
        } else {
            let light_colors = {
                bg_color: "ffffff00",
                header_text_color: "000000",
                link_color: "000000",
                text_color: "000000",
            };
            setUrl(
                `https://cryptopanic.com/widgets/news/?bg_color=${light_colors?.bg_color}&amp;font_family=sans&amp;font_size=12&amp;header_bg_color=30343B00&amp;header_text_color=${light_colors?.header_text_color}&amp;link_color=${light_colors?.link_color}&amp;news_feed=recent&amp;posts_limit=50&amp;text_color=${light_colors?.text_color}&amp;title=Latest%20Crypto%20News`
            );
        }
    }, [theme]);
    return (
        <div className="widget NewsWidget">
            <div className="header">
                <div className="widgetTitle">Crypto News</div>
                <DeleteWidget id={id} />
            </div>
            <div className="content">
                <iframe
                    title="Ctypto News"
                    width="100%"
                    style={{ border: 0 }}
                    src={url}
                    height="100%"
                ></iframe>
            </div>
        </div>
    );
}
