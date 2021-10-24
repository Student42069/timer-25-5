export default function Timer({ timer }) {
  return (
    <div className="self-center text-center rounded-xl border-2 w-max border-red-500 p-6 px-11">
      <p id="timer-label" className="text-2xl">
        Session
      </p>
      <h1 className="text-7xl" id="time-left">
        {timer}
      </h1>
    </div>
  );
}
