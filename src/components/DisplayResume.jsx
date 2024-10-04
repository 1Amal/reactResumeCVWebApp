// This Component will display the User Submitted resume

import ContactInfo from "./ContactInfo.jsx";
import CareerProfile from "./CareerProfile.jsx";
import ProfessionalExperience from "./ProfessionalExperience.jsx";
import EducationExperience from "./EducationExperience.jsx";
import EditResume from "./EditResume";

import { useState } from "react";

export default function DisplayResume({ onNavigate }) {
  return (
    <>
      <CareerProfile />
      <ProfessionalExperience />
      <EducationExperience />

      <h1>Display Resume</h1>
      <button onClick={() => onNavigate("EditResume")}>Edit Resume</button>
      <button onClick={() => onNavigate("Welcome")}>Start Again</button>
    </>
  );
}
