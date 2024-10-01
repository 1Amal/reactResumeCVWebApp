// This Component will provide edit fields for the resume
import ContactInfo from "./ContactInfo.jsx";
import CareerProfile from "./CareerProfile.jsx";
import ProfessionalExperience from "./ProfessionalExperience.jsx";
import EducationExperience from "./EducationExperience.jsx";
import displayResume from "./DisplayResume.jsx";

import { useState } from "react";



// import { SetDisplay } from "../main.jsx";

// import { root } from "../main.jsx";

export default function EditResume() {
  const [displayState, setDisplay]=useState("DisplayResume");

const displayResume =()=>{
  console.log(displayState);
  setDisplay("EditResume");

}

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
