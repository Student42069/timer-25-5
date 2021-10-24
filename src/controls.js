function Controls({ reset, playpause, playing }) {
  return (
    <div className="flex self-center">
      <button
        id="start_stop"
        onClick={playpause}
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold mr-2 py-0 pb-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      >
        {playing ? "Stop" : "Start"}
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-0 pb-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        id="reset"
        onClick={() => {
          reset();
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Controls;
