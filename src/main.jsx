import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ContactInfo from "./components/ContactInfo.jsx";
// import CareerProfile from "./components/CareerProfile.jsx";
// import ProfessionalExperience from "./components/ProfessionalExperience.jsx";
// import EducationExperience from "./components/EducationExperience.jsx";

import EditResume from "./components/EditResume.jsx";
import DisplayResume from "./components/DisplayResume.jsx";

import "./styles/index.css";

const container = document.getElementById("root");
export const root = createRoot(container);
root.render(<DisplayResume />);

 
export function SetDisplay(displayName)
{
if (displayName == "EditResume")
{
root.render(<EditResume />);
}

else if (displayName == "DisplayResume")
{
root.render(<DisplayResume />);
}
}
