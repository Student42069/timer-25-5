export default function Timer({ timer, type }) {
  return (
    <div className="self-center text-center rounded-xl border-8 w-max border-red-500 p-8 pt-6 px-16">
      <p id="timer-label" className="text-2xl">
        {type}
      </p>
      <h1 className="text-7xl" id="time-left">
        {timer}
      </h1>
    </div>
  );
}
