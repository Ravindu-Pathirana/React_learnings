import { useState,useEffect } from "react";

const useClock = () => {
    const[time, setTime] = useState(new Date());

    useEffect(()=>{
        const timeInterval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => {
            clearInterval(timeInterval);
        };
    })

    // setInterval(() => {
    //     setTime(new Date());
    // }, 5000);
    return time;
};

export default useClock;