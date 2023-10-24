"use client";
import { useEffect, useState } from "react";

function CountdownTimer() {
  const [timeRemaining, setTimeRemaining] = useState<number>(0);
  const unixTimestamp = 1698003293; // Example Unix timestamp (seconds since the Unix epoch)

  function formatTimeRemaining(timeInSeconds: number): string {
    const days = Math.floor(timeInSeconds / (60 * 60 * 24));
    const hours = Math.floor((timeInSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((timeInSeconds % (60 * 60)) / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = Math.floor(Date.now() / 1000); // Current Unix timestamp
      const remaining = unixTimestamp - currentTime;

      if (remaining <= 0) {
        clearInterval(interval);
        setTimeRemaining(0);
      } else {
        setTimeRemaining(remaining);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [unixTimestamp]);

  return (
    <div>
      <p>Example Unix Timestamp: {unixTimestamp}</p>
      <p>Time Remaining: {formatTimeRemaining(timeRemaining)}</p>
    </div>
  );
}

export default CountdownTimer;
