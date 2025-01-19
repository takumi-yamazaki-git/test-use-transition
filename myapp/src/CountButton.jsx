const { useState } = require("react");

export const CountButton = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +1する
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        -1する
      </button>
      <p>{counter}</p>
    </>
  );
};
