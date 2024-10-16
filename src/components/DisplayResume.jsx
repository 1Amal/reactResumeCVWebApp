// This Component will display the User Submitted resume

import EditResume from "./EditResume";

import { useState } from "react";

import ResumeDynamicView from "./ResumeDynamicView"

export default function DisplayResume({ onNavigate }) {
  // {console.log({displayData})}
  {console.log({onNavigate})}
  return (
    <>
      {console.log("Display resume Data Log")}
      
      
    {/* <ResumeDynamicView/> */}

      {/* <h1>Preview Resume</h1>
        <div>
        <h1>Contact Info</h1> */}
      {/* <h2>{displayData.fullName}</h2>
      <h2>{displayData.eMail}</h2> */}
      {/* <p>
        @: {formData.eMail} Phone: {formData.phoneNo}
      </p> */}

        {/* </div> */}
{/* 
        <div>
          <h1>Professional Summary</h1>
        </div>

        <div>
          <h1>Education and Qualifications</h1>
        </div>

        <div>
          <h1>Professional Experience</h1>
        </div> */}


      <button onClick={() => onNavigate("EditResume")}>Edit Resume</button>
      <button onClick={() => onNavigate("Welcome")}>Start Again</button>
    </>
  );
}
