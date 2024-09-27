// This Component will provide edit fields for the resume
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ContactInfo from "./ContactInfo.jsx";
import CareerProfile from "./CareerProfile.jsx";
import ProfessionalExperience from "./ProfessionalExperience.jsx";
import EducationExperience from "./EducationExperience.jsx";
import displayResume from "./DisplayResume.jsx";
import { SetDisplay } from "../main.jsx";

// import { root } from "../main.jsx";

export default function EditResume() {
  return (
    <>
      <ContactInfo />
      <CareerProfile />
      <ProfessionalExperience />
      <EducationExperience />
      <button onClick={SetDisplay}>Submit Resume</button>
    </>
  );
}
