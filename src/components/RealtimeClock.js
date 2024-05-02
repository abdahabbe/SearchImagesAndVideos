import React, { useState, useEffect } from "react";

const RealTimeClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    setInterval(() => setCurrentTime(new Date()), 1000);
  }, []);

  const dateNow = currentTime.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const clockNow = currentTime.toLocaleString("id-ID", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  return (
    <div style={{ padding: 10, backgroundColor: "#FF0000", color: "#FFFFFF" }}>
      <p style={{ fontWeight: "bold" }}>{dateNow + " / " + clockNow}</p>
    </div>
  );
};

export default RealTimeClock;
