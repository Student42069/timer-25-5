function Settings({ breakl, setSession, setBreakl, session }) {
  return (
    <div className="flex w-auto justify-around" id="setting">
      <div className="mr-9">
        <p id="break-label">Break Length</p>
        <div className="flex justify-around">
          <button
            onClick={() => {
              if (breakl < 60) {
                setBreakl(breakl + 1);
              }
            }}
            id="break-increment"
          >
            +
          </button>
          <p id="break-length">{breakl}</p>
          <button
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
        <p id="session-label">Session Length</p>
        <div className="flex justify-around">
          <button
            id="session-increment"
            onClick={() => {
              if (session < 60) {
                setSession(session + 1);
              }
            }}
          >
            +
          </button>
          <p id="session-length">{session}</p>
          <button
            id="session-decrement"
            onClick={() => {
              if (session > 1) {
                setSession(session - 1);
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
