import { useState } from "react";
import Settings from "./settings";
import Controls from "./controls";
import Timer from "./timer";

function App() {
  const [breakl, setBreakl] = useState(5);
  const [session, setSession] = useState(25);
  const [timer, setTimer] = useState("25:00");
  let props = { breakl, setSession, setBreakl, session };

  return (
    <div className="flex flex-col mx-auto w-max bg-gray-500 text-4xl h-screen justify-around">
      <h1 className="text-center text-6xl">Timer</h1>
      <Settings {...props} />
      <Timer timer={timer} />
      <Controls
        setBreakl={setBreakl}
        setSession={setSession}
        setTimer={setTimer}
      />
    </div>
  );
}

export default App;
