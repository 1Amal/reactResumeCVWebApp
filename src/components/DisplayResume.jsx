// This Component will display the User Submitted resume

import ContactInfo from "./ContactInfo.jsx";
import CareerProfile from "./CareerProfile.jsx";
import ProfessionalExperience from "./ProfessionalExperience.jsx";
import EducationExperience from "./EducationExperience.jsx";
import EditResume from "./EditResume";

import { useState } from "react";
import { changeDisplay } from "../main.jsx";

export default function DisplayResume() {
  const [displayState, setDisplay] = useState("EditResume");

  const editResume = () => {
    console.log(displayState);
    setDisplay("EditResume");
    changeDisplay(displayState);
  };

  return (
    <>
      <CareerProfile />
      <ProfessionalExperience />
      <EducationExperience />

      <h1>Display Resume</h1>
      <button onClick={editResume}>Edit Resume</button>
    </>
  );
}
