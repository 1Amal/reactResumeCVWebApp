// This Component include Dynamic view of the resume

import { useState } from "react";

export default function ResumeDynamicView({ onNavigate, displayData }) {
  console.log("ResumeDynamic displayData Output");

  console.dir(displayData);

  // const [displayData1, setDisplayData] = useState("test");

  if (displayData === undefined) {
    return <h1>No Display Data</h1>;
  } else {
    return (
      <>
        {/* <button
          onClick={() => {
            displayData2();
          }}
        >
          Update Display
        </button> */}

        <div>
          <h1>{displayData.fullName}</h1>

          <h2>
            E-Mail: {displayData.eMail} | M: {displayData.mobile} | Web:
            {displayData.webSite} | Location: {displayData.location}
          </h2>

          <p></p>
        </div>

        <div>
          <h2>Professional Summary</h2>
          <p>{displayData.profSummary}</p>
        </div>

        <div>
          <h2>Tech Stack</h2>
          <p>
            <strong>Programming Languages:</strong>{" "}
            {displayData.techStackProgrammingLanguages}
          </p>
          <p>
            <strong>Frame Works:</strong> {displayData.techStackFrameWorks}
          </p>

          <p>
            <strong>Developer Tools:</strong>{" "}
            {displayData.techStackDeveloperTools}
          </p>

          <p>
            <strong>Programming Concepts:</strong>{" "}
            {displayData.techStackProgrammingConcepts}
          </p>

          <p>
            <strong>Cloud:</strong> {displayData.techStackCloud}
          </p>
        </div>

        <div>
          <h2>Professional Experience</h2>
          <div>
            {" "}
            <h3>
              <strong>
                {displayData.jobTitle1}, {displayData.jobCompanyName1},{" "}
                {displayData.jobCompanyCity1} ({displayData.jobStartDate1} -{" "}
                {displayData.jobEndDate1})
              </strong>
            </h3>
            <p>
              <strong>Responsibilities: </strong>
              {displayData.jobResponsibilities1}
            </p>
            <p>
              <strong>Achievements: </strong>
              {displayData.jobAchievements1}
            </p>
          </div>

          <div>
            {" "}
            <h3>
              <strong>
                {displayData.jobTitle2}, {displayData.jobCompanyName2},{" "}
                {displayData.jobCompanyCity2} ({displayData.jobStartDate2} -{" "}
                {displayData.jobEndDate2})
              </strong>
            </h3>
            <p>
              <strong>Responsibilities: </strong>
              {displayData.jobResponsibilities2}
            </p>
            <p>
              <strong>Achievements: </strong>
              {displayData.jobAchievements2}
            </p>
          </div>

          <div>
            {" "}
            <h3>
              <strong>
                {displayData.jobTitle3}, {displayData.jobCompanyName3},{" "}
                {displayData.jobCompanyCity3} ({displayData.jobStartDate3} -{" "}
                {displayData.jobEndDate3})
              </strong>
            </h3>
            <p>
              <strong>Responsibilities: </strong>
              {displayData.jobResponsibilities3}
            </p>
            <p>
              <strong>Achievements: </strong>
              {displayData.jobAchievements3}
            </p>
          </div>
        </div>

        <div>
          <h2>Education and Qualifications</h2>
          <div>
            <p>
              <strong>
                {displayData.courseName1}, {displayData.courseProvider1} -{" "}
                {displayData.courseCompletionDate1}{" "}
              </strong>
            </p>
            <p>{displayData.courseDescription1} </p>
          </div>

          <div>
            <p>
              <strong>
                {displayData.courseName2}, {displayData.courseProvider2} -{" "}
                {displayData.courseCompletionDate2}{" "}
              </strong>
            </p>
            <p>{displayData.courseDescription2} </p>
          </div>
        </div>

        <div>
          <h2>Referees</h2>
          <div>
            <p>Referee 1: {displayData.refereeDetails1}</p>
            <p>Referee 2: {displayData.refereeDetails2}</p>
          </div>
        </div>
      </>
    );
  }
}
