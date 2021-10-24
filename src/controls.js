function Controls({ setBreakl, setSession, setTimer }) {
  return (
    <div className="flex self-center">
      <button id="start_stop">+-</button>
      <button
        id="reset"
        onClick={() => {
          setBreakl(5);
          setSession(25);
          setTimer("25:00");
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Controls;
