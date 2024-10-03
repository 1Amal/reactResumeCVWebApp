import { useState } from "react";

import ContactInfo from "./ContactInfo.jsx";
import EditResume from "./EditResume.jsx";
import DisplayResume from "./DisplayResume.jsx";
import Welcome from "./Welcome.jsx";

import "../styles/App.css";

function App() {
  const [currentView, setCurrentView] = useState("Welcome");

  return (
    <div>
      <Welcome />
    </div>
  );
}

export default App;
