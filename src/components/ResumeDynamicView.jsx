// This Component include Dynamic view of the resume

import { useState } from "react";

export default function ResumeDynamicView({ displayData, displayData2 }) {
  console.log("ResumeDynamic displayData Output");

  console.dir(displayData);

  const [displayData1, setDisplayData] = useState("test");

  // {console.log({onNavigate})}
  return (
    <>
      <button
        onClick={() => {
          displayData2();
        }}
      >
        Update Display
      </button>
      <h1>Resume Dynamic View</h1>
      <div>
        <h1>Contact Info</h1>
        {/* <h2>{displayData.fullName}</h2> */}

        {/* <h2>{displayData.eMail}</h2> */}
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
    </>
  );
}
