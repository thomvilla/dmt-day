import React from "react"
import { useCountdown } from '../../hooks/countdown';

 const Countdown = () => {
    const THREE_DAYS_IN_MS =  58 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();
    const dateTimeCountdown = NOW_IN_MS + THREE_DAYS_IN_MS;
    const [days, hours, minutes, seconds] = useCountdown(dateTimeCountdown);

    return(
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div className="flex flex-col">
                <span className="font-mono text-5xl countdown">
                <span style={{"--value":days}} x-text="days"></span>
                </span>
                days
            </div> 
            <div className="flex flex-col">
                <span className="font-mono text-5xl countdown">
                <span style={{"--value":hours}}></span>
                </span>
                hours
            </div> 
            <div className="flex flex-col">
                <span className="font-mono text-5xl countdown">
                <span style={{"--value":minutes}}></span>
                </span>
                min
            </div> 
            <div className="flex flex-col">
                <span className="font-mono text-5xl countdown">
                <span style={{"--value":seconds}}></span>
                </span>
                sec
            </div>
        </div>
    )
}

export default Countdown