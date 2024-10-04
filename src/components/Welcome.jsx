// Welcome Page with Instructions
import { useState } from "react";
import EditResume from "./EditResume";

export default function Welcome({ onNavigate }) {
  return (
    <div>
      <h1>Welcome</h1>
      <p>This App will let you create a CV/résumé</p>
      <button onClick={() => onNavigate("EditResume")}>Create Resume</button>
    </div>
  );
}
