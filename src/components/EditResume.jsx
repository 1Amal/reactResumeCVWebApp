// This Component will provide edit fields for the resume
import ContactInfo from "./ContactInfo.jsx";
import CareerProfile from "./CareerProfile.jsx";
import ProfessionalExperience from "./ProfessionalExperience.jsx";
import EducationExperience from "./EducationExperience.jsx";
import displayResume from "./DisplayResume.jsx";

import { useState } from "react";

export default function EditResume({ onNavigate }) {
  return (
    <>
      <ContactInfo />
      <CareerProfile />
      <ProfessionalExperience />
      <EducationExperience />
      <button onClick={() => onNavigate("DisplayResume")}>View Resume</button>
      <button onClick={() => onNavigate("Welcome")}>Start Again</button>
    </>
  );
}
