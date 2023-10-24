"use client";
import { useEffect, useState } from "react";

const YourComponent: React.FC = () => {
  const [userAgent, setUserAgent] = useState<string>("");

  useEffect(() => {
    const clientUserAgent = navigator.userAgent;
    setUserAgent(clientUserAgent);
  }, []);

  return (
    <div>
      <p>User Agent: {userAgent}</p>
    </div>
  );
};

export default YourComponent;
