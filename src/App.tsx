import * as React from "react";

function App() {
  const [counter, setCounter] = React.useState(0);

  return (
    <div className="flex flex-1 items-center justify-center flex-col gap-4">
      <div className="text-5xl flex justify-center p-6">Hello world</div>
      <div className="text-xl">Counter: {counter}</div>
      <button
        className="bg-red-600 rounded-xl p-4 text-lg"
        onClick={() => setCounter(counter + 1)}
      >
        click me
      </button>
    </div>
  );
}

export default App;
