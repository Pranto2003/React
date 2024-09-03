import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [count, setCount] = useState(15);

  let addingCount = () => {
    count += 1;
    if (count > 20) {
      count = 20;
      setCount(count);
    } else {
      setCount(count);
    }
  };

  let removingCount = () => {
    count -= 1;
    if (count < 0) {
      count = 0;
      setCount(count);
    } else {
      setCount(count);
    }
  };
  return (
    <>
      <h1>Pranto Goswamee</h1>
      <h2>Programmer | Dreamer | Learner</h2>
      <button onClick={addingCount}>Add {count}</button>
      <br />
      <button onClick={removingCount}>Remove {count}</button>
      <p>Footer : {count}</p>
    </>
  );
}

export default App;
