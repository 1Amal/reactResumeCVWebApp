// Welcome Page with Instructions
import { useState } from "react";
import EditResume from "./EditResume";
import { changeDisplay } from "../main.jsx";

export default function Welcome() {
  const [displayState, setDisplay] = useState("DisplayResume");

  const editResume = () => {
    console.log(displayState);
    setDisplay("EditResume");
    changeDisplay(displayState);
    console.log(displayState);
  };

  return (
    <div>
      <h1>Welcome</h1>
      <p>This App will let you create a CV/résumé</p>
      <button onClick={editResume}>Get Started</button>
    </div>
  );
}
