// This Component will display the User Submitted resume

// import ContactInfo from "./ContactInfo.jsx";
// import CareerProfile from "./CareerProfile.jsx";
// import ProfessionalExperience from "./ProfessionalExperience.jsx";
// import EducationExperience from "./EducationExperience.jsx";
import EditResume from "./EditResume";

import { useState } from "react";

export default function DisplayResume({ onNavigate, formData }) {
  return (
    <>
      {/* <ContactInfo formData={formData}/> */}
      {/* {formData} */}
      {/* <CareerProfile />
      <ProfessionalExperience />
      <EducationExperience /> */}
      {/* {console.log(formData)} */}
      {/* {console.log(onNavigate)} */}

      <h1>Preview Resume</h1>
        <div>
        <h1>Contact Info</h1>
      {/* <h2>{formData.fullName}</h2> */}
      {/* <p>
        @: {formData.eMail} Phone: {formData.phoneNo}
      </p> */}

        </div>

        <div>
          <h1>Professional Summary</h1>
        </div>

        <div>
          <h1>Education and Qualifications</h1>
        </div>

        <div>
          <h1>Professional Experience</h1>
        </div>


      <button onClick={() => onNavigate("EditResume")}>Edit Resume</button>
      <button onClick={() => onNavigate("Welcome")}>Start Again</button>
    </>
  );
}
