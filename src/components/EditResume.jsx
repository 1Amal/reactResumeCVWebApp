// This Component will provide edit fields for the resume
import ContactInfo from "./ContactInfo.jsx";
import CareerProfile from "./CareerProfile.jsx";
import ProfessionalExperience from "./ProfessionalExperience.jsx";
import EducationExperience from "./EducationExperience.jsx";
import displayResume from "./DisplayResume.jsx";
import { changeDisplay } from "../main.jsx";

import { useState } from "react";

export default function EditResume() {
  const [displayState, setDisplay] = useState("EditResume");

  const displayResume = () => {
    console.log(displayState);
    setDisplay("DisplayResume");
    changeDisplay(displayState);
    console.log(displayState);
  };

  return (
    <>
      <ContactInfo />
      <CareerProfile />
      <ProfessionalExperience />
      <EducationExperience />
      <button onClick={displayResume}>Submit Resume</button>
    </>
  );
}
