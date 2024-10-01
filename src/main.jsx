import { StrictMode } from "react";
import { useState } from "react";
import { createRoot } from "react-dom/client";

import ContactInfo from "./components/ContactInfo.jsx";
import EditResume from "./components/EditResume.jsx";
import DisplayResume from "./components/DisplayResume.jsx";
import Welcome from "./components/Welcome.jsx"


import "./styles/index.css";

const container = document.getElementById("root");
export const root = createRoot(container);
root.render(<Welcome />);


export function changeDisplay(displayName) {
  if (displayName == "EditResume") {
    root.render(<EditResume />);
  } else if (displayName == "DisplayResume") {
    root.render(<DisplayResume />);
  }
}
