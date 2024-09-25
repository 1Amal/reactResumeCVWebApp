// This Component will display the User Submitted resume

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ContactInfo from "./ContactInfo.jsx";
import CareerProfile from "./CareerProfile.jsx";
import ProfessionalExperience from "./ProfessionalExperience.jsx";
import EducationExperience from "./EducationExperience.jsx";
import EditResume from "./EditResume";

export default function DisplayResume() {
  return createRoot(document.getElementById("root")).render(
    <StrictMode>
      <CareerProfile />
      <ProfessionalExperience />
      <EducationExperience />

      <h1>Display Resume</h1>
      <button onClick={EditResume}>Edit Resume</button>
    </StrictMode>
  );
}
