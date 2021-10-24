import { useState } from "react";
import Settings from "./settings";
import Controls from "./controls";
import Timer from "./timer";

function App() {
  const [breakl, setBreakl] = useState(5);
  const [session, setSession] = useState(25);
  const [timer, setTimer] = useState(25 * 60);
  const [playing, setPlaying] = useState(true);

  let [h, m] = [
    Math.floor(timer / 60).toString(),
    (timer % 60).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    }),
  ];

  let playpause = () => {
    setPlaying(!playing);
    // let t = setInterval(console.log("tic-tac"), 100);
    if (playing) {
      function tac() {
        setTimer(timer - 1);
      }
      setInterval(tac, 1000);
    } else {
      clearInterval();
    }
    console.log(playing);
  };

  // useEffect(() => {
  //   if (playing) {
  //     function tac() {
  //       setTimer(timer - 1);
  //     }
  //     let t = setInterval(tac, 100);
  //     return function cleanup() {
  //       clearInterval(t);
  //     };
  //   }
  // }, [playing]);

  let props = { breakl, setSession, setBreakl, session };

  return (
    <div className="bg-indigo-400 h-screen">
      <div className="flex flex-col mx-auto w-max px-8  text-white font-bold text-4xl h-3/4 justify-around">
        <h1 className="text-center text-6xl text-white font-bold">Timer</h1>
        <Settings {...props} />
        <Timer timer={h + ":" + m} />
        <Controls
          playpause={playpause}
          setBreakl={setBreakl}
          setSession={setSession}
          setTimer={setTimer}
        />
      </div>
    </div>
  );
}

export default App;
