import { useState } from "react";

const Testing = () => {
  const [color, setColor] = useState('red');

  return (
    <div className="h-screen grid place-content-center">
      <div className="container grid gap-2">
        <h1 className="text-3xl font-bold">My favorit color is {color}!</h1>
        <div className="flex gap-2">
          <button
            type="button"
            className="px-2 py-1 bg-gray-200 border border-black border-solid"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            type="button"
            className="px-2 py-1 bg-gray-200 border border-black border-solid"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            type="button"
            className="px-2 py-1 bg-gray-200 border border-black border-solid"
            onClick={() => setColor("pink")}
          >
            Pink
          </button>
          <button
            type="button"
            className="px-2 py-1 bg-gray-200 border border-black border-solid"
            onClick={() => setColor("green")}
          >
            Green
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testing;
