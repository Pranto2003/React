import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const myOwn = React.createElement(
  "a",
  { href: "https://www.google.com" },
  "Click me to visit"
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {myOwn}
  </StrictMode>
);
