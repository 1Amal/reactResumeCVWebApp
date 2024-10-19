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
      <div className="printPage"></div>
      <button className="printPage" onClick={() => onNavigate("EditResume")}>
        Edit Resume
      </button>
      <button className="printPage" onClick={() => onNavigate("Welcome")}>
        Start Again
      </button>
      <button className="printPage" onClick={window.print}>
        Print Resume
      </button>
    </>
  );
}
