import React from "react";
import "./DigitalClock.css";

const DigitalClock = () => {
  let time = new Date().toLocaleTimeString();

  let [cTime, setTime] = React.useState(time);

  let updateTime = () => {
    setTime(time);
  };

  setInterval(updateTime, 1000);
  return (
    <>
      <h1>
        <center>DIGITAL CLOCK 🕙 </center>
      </h1>

      <div className="container">
        <h2 className="timer">{cTime}</h2>
      </div>
    </>
  );
};

export default DigitalClock;
