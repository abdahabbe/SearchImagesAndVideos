import React, { useState, useEffect } from "react";

const DateTimeComponent = () => {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);
  return (
    <div>
      <p>
        {dateState.toLocaleDateString("id-ID", {
          weekday: "long",
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </p>
      <p>
        {dateState.toLocaleString("id-ID", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
        })}
      </p>
    </div>
  );
};

export default DateTimeComponent;
