import { useState } from "react";

import Welcome from "./Welcome.jsx";
import EditResume from "./EditResume.jsx";
import ContactInfo from "./ContactInfo.jsx";
import DisplayResume from "./DisplayResume.jsx";

import "../styles/App.css";

function App() {
  const [currentView, setCurrentView] = useState("Welcome");

  const renderView = () => {
    switch (currentView) {
      case "Welcome":
        return <Welcome onNavigate={setCurrentView} />;

      case "EditResume":
        return <EditResume onNavigate={setCurrentView} />;

      case "DisplayResume":
        return <DisplayResume onNavigate={setCurrentView} />;

      default:
        return <Welcome />;
    }
  };

  return <div>{renderView()}</div>;
}

export default App;
