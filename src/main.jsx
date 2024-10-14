import { StrictMode } from "react";
// import { useState } from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App.jsx";

import "./styles/index.css";
import DisplayResume from "./components/DisplayResume.jsx";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
    {/* <DisplayResume/> */}
  </StrictMode>
);
