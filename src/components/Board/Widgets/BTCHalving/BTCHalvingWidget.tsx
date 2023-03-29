import { memo, useState, useEffect } from "react";
import DeleteWidget from "../DeleteWidget";

const BTCHalvingWidget = memo(function ({ id }: { id: string }) {
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const targetDate = new Date("2024-04-01T00:00:00");
        const intervalId = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;

            if (distance < 0) {
                clearInterval(intervalId);
                setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                const minutes = Math.floor(
                    (distance % (1000 * 60 * 60)) / (1000 * 60)
                );
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setCountdown({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);
    return (
        <div className="widget BTCHalvingWidget">
            <div className="header">
                <div className="widgetTitle">Next BTC Halving</div>
                <DeleteWidget id={id} />
            </div>
            <div className="content">
                <p>
                    {countdown.days} days, {countdown.hours} hours,
                    <br />
                    {countdown.minutes} minutes, {countdown.seconds} seconds
                    left
                </p>
            </div>
        </div>
    );
});

export default BTCHalvingWidget;
