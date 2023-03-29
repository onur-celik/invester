import { memo } from "react";
import DeleteWidget from "../DeleteWidget";

const PodcastsWidget = memo(function ({ id }: { id: string }) {
    return (
        <div className="widget PodcastsWidget">
            <div className="header">
                <div className="widgetTitle">Podcasts</div>
                <DeleteWidget id={id} />
            </div>
            <div className="content">
                <iframe
                    style={{ borderRadius: 12, border: 0 }}
                    src="https://open.spotify.com/embed/show/2Yvo8QxZf7WlSEsIwKjtX4?utm_source=generator&theme=1"
                    width="100%"
                    height="152"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title="podcast1"
                ></iframe>
                <br />
                <iframe
                    style={{ borderRadius: 12, border: 0 }}
                    src="https://open.spotify.com/embed/show/4M5Gb71lskQ0Rg6e08uQhi?utm_source=generator&theme=1"
                    width="100%"
                    height="152"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title="podcast2"
                ></iframe>
                <br />
                <iframe
                    style={{ borderRadius: 12, border: 0 }}
                    src="https://open.spotify.com/embed/show/7LYeomavBzwgQhJos7qrms?utm_source=generator&theme=1"
                    width="100%"
                    height="152"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title="podcast3"
                ></iframe>
            </div>
        </div>
    );
});

export default PodcastsWidget;
