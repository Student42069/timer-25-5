import { useState, useEffect } from "react";
import React from "react";
import Settings from "./settings";
import Controls from "./controls";
import Timer from "./timer";
import samsung from "./samsung.mp3";

function App() {
  const [breakl, setBreakl] = useState(5);
  const [session, setSession] = useState(25);
  const [timer, setTimer] = useState(25 * 60);
  const [playing, setPlaying] = useState(false);
  const [type, setType] = useState("Session");
  const [id, setId] = useState(1);
  // const [interval, setInterval] = useState(1); ayayayayayayayayay

  let lol = new Audio(samsung);

  function reset() {
    setBreakl(5);
    setSession(25);
    setTimer(25 * 60);
    setType("Session");
    setInterval(1);
    setPlaying(false);
    setId(1);
    lol.pause();
    lol.currentTime = 0;
  }

  function playpause() {
    if (id !== 4) {
      setPlaying(!playing);
    }
  }

  let [h, m] = [
    Math.floor(timer / 60).toString(),
    (timer % 60).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    }),
  ];

  const countDown = () => {
    let ab = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return ab;
  };

  useEffect(() => {
    if (playing) {
      let mk = countDown();
      return () => {
        clearInterval(mk);
      };
    }
  }, [playing]);

  useEffect(() => {
    if (timer <= 0) {
      if (type === "Session" && id === 1) {
        setType("Break");
        setTimer(breakl * 60);
        setId(2);
      } else if (type === "Break") {
        setType("Session");
        setTimer(session * 60);
        setId(3);
      } else {
        setPlaying(false);
        setId(4);
        lol.play();
      }
    }
    // return () => {
    //   cleanup
    // }
  }, [timer]);

  let props = { breakl, setSession, setBreakl, session, playing, setTimer };
  return (
    <div className="bg-indigo-400 h-screen">
      <div className="flex flex-col mx-auto w-max px-8  text-white font-bold text-4xl h-screen justify-around">
        <h1 className="text-center text-6xl text-white font-bold">Timer</h1>
        <Settings {...props} />
        <Timer timer={h + ":" + m} type={type} />
        <Controls reset={reset} playpause={playpause} playing={playing} />
        {/* <p>{date}</p> */}
        {/* <audio controls>
          <source src={samsung} type="audio/mpeg"></source>
        </audio> */}
      </div>
    </div>
  );
}

export default App;
