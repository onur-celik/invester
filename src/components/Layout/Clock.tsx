import React, { useState, useEffect } from "react";

const Clock: React.FC = () => {
    const [time, setTime] = useState<Date>(new Date());
    const [localeTime, setLocaleTime] = useState<string>("");

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalID);
        };
    }, []);

    useEffect(() => {
        const options: Intl.DateTimeFormatOptions = {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            year: "numeric",
            month: "long",
            day: "numeric",
        };
        const localeString = time.toLocaleString(navigator.language, options);
        setLocaleTime(localeString);
    }, [time]);

    return (
        <div className="Clock" data-testid="Clock">
            {localeTime}
        </div>
    );
};

export default Clock;
