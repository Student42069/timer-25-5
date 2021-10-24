import { useState, useEffect } from "react";
import React from "react";
import Settings from "./settings";
import Controls from "./controls";
import Timer from "./timer";

function App() {
  const [breakl, setBreakl] = useState(5);
  const [session, setSession] = useState(25);
  const [timer, setTimer] = useState(25 * 60);
  const [playing, setPlaying] = useState(false);
  const [type, setType] = useState("Session");
  const [interval, setInterval] = useState(1);

  function reset() {
    setBreakl(5);
    setSession(25);
    setTimer(25 * 60);
    setType("Session");
    setInterval(1);
    setPlaying(false);
  }

  function playpause() {
    setPlaying(!playing);
  }

  let [h, m] = [
    Math.floor(timer / 60).toString(),
    (timer % 60).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    }),
  ];

  let props = { breakl, setSession, setBreakl, session, playing, setTimer };

  ////////////////////////////////////////////
  const [date, setDate] = useState(new Date().toLocaleString());

  let ab;

  const bim = () => {
    ab = setInterval(() => {
      setDate(new Date().toLocaleString());
      console.log(new Date().toLocaleString());
    }, 1000);
  };

  useEffect(() => {
    bim();
  });
  /////////////////////////////////////////////

  return (
    <div className="bg-indigo-400 h-screen">
      <div className="flex flex-col mx-auto w-max px-8  text-white font-bold text-4xl h-3/4 justify-around">
        <h1 className="text-center text-6xl text-white font-bold">Timer</h1>
        <Settings {...props} />
        <Timer timer={h + ":" + m} />
        <Controls reset={reset} playpause={playpause} playing={playing} />
        <p>{date}</p>
      </div>
    </div>
  );
}

export default App;
