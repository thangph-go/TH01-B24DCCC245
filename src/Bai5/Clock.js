import React, {useState, useEffect} from "react";

function Time({time}) {
  return <h2>{time}</h2>;
}

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <Time time={currentTime} />
    </div>
  );
}

export default Clock;
