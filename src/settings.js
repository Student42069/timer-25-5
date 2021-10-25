function Settings({
  breakl,
  setSession,
  setBreakl,
  session,
  playing,
  setTimer,
}) {
  return (
    <div className="flex w-auto justify-around" id="setting">
      <div className="mr-9">
        <p id="break-label" className="text-white font-bold mb-2">
          Break Length
        </p>
        <div className="flex justify-around">
          <button
            disabled={playing}
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-0 pb-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            onClick={() => {
              if (breakl < 60) {
                setBreakl(breakl + 1);
              }
            }}
            id="break-increment"
          >
            +
          </button>
          <p id="break-length" className="text-white font-bold">
            {breakl}
          </p>
          <button
            disabled={playing}
            className=" bg-blue-500 hover:bg-blue-400 text-white font-bold py-0 pb-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            id="break-decrement"
            onClick={() => {
              if (breakl > 1) {
                setBreakl(breakl - 1);
              }
            }}
          >
            -
          </button>
        </div>
      </div>
      <div className="ml-9">
        <p id="session-label" className="text-white font-bold mb-2">
          Session Length
        </p>
        <div className="flex justify-around">
          <button
            disabled={playing}
            className=" bg-blue-500 hover:bg-blue-400 text-white font-bold py-0 pb-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            id="session-increment"
            onClick={() => {
              if (session < 60) {
                setSession(session + 1);
                setTimer((session + 1) * 60);
              }
            }}
          >
            +
          </button>
          <p id="session-length" className="text-white font-bold">
            {session}
          </p>
          <button
            disabled={playing}
            className=" bg-blue-500 hover:bg-blue-400 text-white font-bold py-0 pb-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            id="session-decrement"
            onClick={() => {
              if (session > 1) {
                setSession(session - 1);
                setTimer((session - 1) * 60);
              }
            }}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
