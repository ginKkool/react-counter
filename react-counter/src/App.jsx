import "./App.css";
import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <p>{counter}</p>
      {counter} = 0 ? :
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        -
      </button>
      : <button></button>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
    </>
  );
};

export default App;
