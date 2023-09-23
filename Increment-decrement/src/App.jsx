import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  let increment = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  let decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h2>Counter Value: {counter}</h2>
      <button onClick={increment}>Increment Value</button>
      <button onClick={decrement}>Decrement Value</button>
    </>
  );
}

export default App;
