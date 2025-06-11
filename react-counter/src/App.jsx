import "./App.css";
import { useState } from "react";
import { FaCalculator } from "react-icons/fa";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <header>
        <FaCalculator size={60} />

        <h1>React Counter</h1>
      </header>
      <main>
        <div className="container">
          <div>
            {counter !== 0 ? (
              <button
                onClick={() => {
                  setCounter(counter - 1);
                }}
              >
                -
              </button>
            ) : null}
          </div>
          <p>{counter}</p>
          <div>
            {counter !== 10 ? (
              <button
                onClick={() => {
                  setCounter(counter + 1);
                }}
              >
                +
              </button>
            ) : null}
          </div>
        </div>
        <button
          className="reset"
          type="button"
          onClick={() => {
            setCounter(0);
          }}
        >
          Reset
        </button>
      </main>
    </>
  );
};

export default App;
