"use client";
import { useState, useEffect } from "react";

const CountdownTimer: React.FC<{ targetDateTime: Date }> = ({
  targetDateTime,
}) => {
  const [countdown, setCountdown] = useState<number>(
    Math.floor((targetDateTime.getTime() - Date.now()) / 1000)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      }
    }, 1000); // Update the countdown every second

    return () => clearInterval(timer); // Cleanup on unmount
  }, [countdown]);

  const formatTime = (time: number): string => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  return (
    <div>
      <div className="font-extrabold text-red-600 text-2xl">
        {formatTime(countdown)}
      </div>
    </div>
  );
};

export default CountdownTimer;
