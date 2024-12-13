import { useState } from "react";

export default function Testing() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  function increment() {
    if (count < 10) {
      console.log("increment");
      setCount(count + 1);
    }
  }

  function decrement() {
    if (count > -10) {
      console.log("Decrement");
      setCount(count - 1);
    }
  }

  function nameChange(value) {
    setName(value);
  }

  return (
    <div className="h-64 gap-3 w-72 relative flex justify-center items-center border border-black">
      <button
        className="w-20 text-4xl h-20 rounded-full bg-red-400 cursor-pointer"
        onClick={decrement}
      >
        -
      </button>
      <span className="text-4xl">{count}</span>

      <button
        className="w-20 h-20 text-4xl rounded-full bg-red-400 cursor-pointer"
        onClick={increment}
      >
        +
      </button>
      <span className="absolute top-0">{name}</span>
      <div className="absolute bottom-0 space-x-2">
        <button
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          onClick={() => {
            nameChange("Students");
          }}
        >
          Student
        </button>
        <button
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          onClick={() => {
            nameChange("Teachers");
          }}
        >
          Teachers
        </button>
        <button
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          onClick={() => {
            nameChange("Admins");
          }}
        >
          Admins
        </button>
      </div>
    </div>
  );
}
