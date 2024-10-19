// This Component will display the User Submitted resume

import EditResume from "./EditResume";

import { useState } from "react";

import ResumeDynamicView from "./ResumeDynamicView";

export default function DisplayResume({ onNavigate, displayData }) {
  return (
    <>
      {console.log("Display resume Data Log1")}
      {console.dir(displayData)}

      <ResumeDynamicView displayData={displayData} />

      <button onClick={() => onNavigate("EditResume")}>Edit Resume</button>
      <button onClick={() => onNavigate("Welcome")}>Start Again</button>
    </>
  );
}
