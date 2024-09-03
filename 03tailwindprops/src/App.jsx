import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-black text-white p-4 rounded-xl">Hello Bros</h1>
      <Card username={"Pranto"} />
      <Card username={"Goswamee"} />
    </>
  );
}

export default App;
