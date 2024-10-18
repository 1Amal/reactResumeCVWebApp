// This Component will provide edit fields for the resume

import ResumeDynamicView from "./ResumeDynamicView.jsx";

import { useState } from "react";

export default function EditResume({ onNavigate }) {
  const [formSubmited, setFormSubmit] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "Amal K",
    eMail: "amal@amal.com",
    mobile: "0466222222",
    webSite: "www.1amal.github.io",
    location: "Melbourne",
    profSummary: "Front End Engineer",
    techStackProgrammingLanguages:
      "JavaScript | CSS (Grid, FlexBox) | HTML | Bash",
    techStackFrameWorks: "React",
    techStackDeveloperTools:
      "Git | Ubuntu GNU/Linux | VS Code | Chrome Developer Tools | NPM | WebPack | Vite | Jest | Babel | ESLint | Prettier | Figma | Jira | Confluence | Discord | Slack",
    techStackProgrammingConcepts:
      "TDD | SOLID | DRY | OOP Principles | Clean Code | Unit Testing | WCAG",
    techStackCloud: "Vercel | Cloud Flare Pages | Netlify",
    jobTitle1: "",
    jobCompanyName1: "",
    jobCompanyCity1: "",
    jobStartDate1: "",
    jobEndDate1: "",
    jobResponsibilities1: "",
    jobAchievements1: "",
    jobTitle2: "",
    jobCompanyName2: "",
    jobCompanyCity2: "",
    jobStartDate2: "",
    jobEndDate2: "",
    jobResponsibilities2: "",
    jobAchievements2: "",
    jobTitle3: "",
    jobCompanyName3: "",
    jobCompanyCity3: "",
    jobStartDate3: "",
    jobEndDate3: "",
    jobResponsibilities3: "",
    jobAchievements3: "",
    courseName1: "Full Stack JavaScript",
    courseProvider1: "The Odin Project",
    courseDescription1: "JavaScript, CSS, HTML, Linux",
    courseCompletionDate1: "Dec 2023",
    courseName2: "Web Development Foundations",
    courseProvider2: "The Odin Project",
    courseDescription2: "JavaScript, CSS, HTML, Linux",
    courseCompletionDate2: "Dec 2023",
    courseName3:
      "Bachelor of Engineering (Honours) Electronic, Telecommunications & Internet Engineering",
    courseProvider3: "UoB",
    courseDescription3: "Degree recognised by Engineers Australia",
    courseCompletionDate3: "2008",
    refereeDetails1: "Richard Matthew Stallman, rms@gnu.org",
    refereeDetails2: "Linus Torvalds, linus@linuxfoundation.org",
  });
  const submitContactInfo = (formSubmission) => {
    formSubmission.preventDefault();
    <div>
      <ResumeDynamicView
        displayData={formData}
        displayData2={callDisplayResume}
      />
    </div>;
    // <ResumeDynamicView displayData={formData} />;

    // callDisplayResume();
  };

  const callDisplayResume = () => {
    console.log("callDisplayResume Function Called");
    console.log(formData);

    onNavigate("DisplayResume");
  };

  return (
    <div>
      <h1>{formData.fullName}</h1>
      <div>
        <h1>Edit Resume</h1>
        <>
          <form onSubmit={submitContactInfo}>
            <ul>
              <li>
                <h3>Contact Info</h3>
                <label htmlFor="fullName">Full Name: </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={(setFullName) =>
                    setFormData({
                      ...formData,
                      fullName: setFullName.target.value,
                    })
                  }
                ></input>
              </li>
              <li>
                <label htmlFor="email">E-mail: </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.eMail}
                  onChange={(setEmail) =>
                    setFormData({ ...formData, eMail: setEmail.target.value })
                  }
                ></input>
              </li>
              <li>
                <label htmlFor="phone">Phone: </label>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  value={formData.mobile}
                  onChange={(setPhoneNo) =>
                    setFormData({
                      ...formData,
                      mobile: setPhoneNo.target.value,
                    })
                  }
                ></input>
              </li>

              <li>
                <label htmlFor="website">Website: </label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={formData.webSite}
                  // onFocus={this.target.value = ""}
                  onChange={(setWebSite) =>
                    setFormData({
                      ...formData,
                      webSite: setWebSite.target.value,
                    })
                  }
                ></input>
              </li>

              <li>
                <label htmlFor="location">Location: </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={(location) =>
                    setFormData({
                      ...formData,
                      location: location.target.value,
                    })
                  }
                ></input>
              </li>

              <li>
                <h3>Professional Summary</h3>
                <label htmlFor="profSummary"></label>
                <input
                  type="text"
                  id="profSummary"
                  name="profSummary"
                  value={formData.profSummary}
                  onChange={(profSummary) =>
                    setFormData({
                      ...formData,
                      profSummary: profSummary.target.value,
                    })
                  }
                ></input>
              </li>

              <li>
              <h3>Technology Stack</h3>
                    <label for="techStackProgrammingLanguages">Programming Languages: </label>
                <textarea
                  id="techStackProgrammingLanguages"
                  name="techStackProgrammingLanguages"
                  value={formData.techStackProgrammingLanguages}
                  onChange={(techStackProgrammingLanguages) =>
                    setFormData({
                      ...formData,
                      techStackProgrammingLanguages: techStackProgrammingLanguages.target.value,
                    })
                  }
                  rows="5"
                  cols="30"
                ></textarea>
              </li>


<li>
                    <label for="techStackFrameWorks">Frame Works: </label>
                <textarea
                  id="techStackFrameWorks"
                  name="techStackFrameWorks"
                  value={formData.techStackFrameWorks}
                  onChange={(techStackFrameWorks) =>
                    setFormData({
                      ...formData,
                      techStackFrameWorks: techStackFrameWorks.target.value,
                    })
                  }
                  rows="5"
                  cols="30"
                ></textarea>
              </li>

              <li>
                <textarea
                  id="techStackProgrammingConcepts"
                  name="techStackProgrammingConcepts"
                  value={formData.techStackProgrammingConcepts}
                  onChange={(techStackProgrammingConcepts) =>
                    setFormData({
                      ...formData,
                      techStackProgrammingConcepts:
                        techStackProgrammingConcepts.target.value,
                    })
                  }
                  rows="5"
                  cols="30"
                ></textarea>
              </li>

              {/* <li>
                <label htmlFor=""></label>
                <input
                  type="text"
                  id=""
                  name=""
                  value={formData.techStackDeveloperTools}
                  onChange={(nameOfFormField) =>
                    setFormData({
                      ...formData,
                      nameOfValue: nameOfFormField.target.value,
                    })
                  }
                ></input>
              </li> */}


<li>
                    <label for="techStackDeveloperTools">Developer Tools: </label>
                <textarea
                  id="techStackDeveloperTools"
                  name="techStackDeveloperTools"
                  value={formData.techStackDeveloperTools}
                  onChange={(techStackDeveloperTools) =>
                    setFormData({
                      ...formData,
                      techStackDeveloperTools: techStackDeveloperTools.target.value,
                    })
                  }
                  rows="5"
                  cols="30"
                ></textarea>
              </li>


              <li>
                <label htmlFor="techStackProgrammingConcepts">
                  Programming Concepts:{" "}
                </label>
                <textarea
                  id="techStackProgrammingConcepts"
                  name="techStackProgrammingConcepts"
                  value={formData.techStackProgrammingConcepts}
                  onChange={(techStackProgrammingConcepts) =>
                    setFormData({
                      ...formData,
                      techStackProgrammingConcepts:
                        techStackProgrammingConcepts.target.value,
                    })
                  }
                  rows="5"
                  cols="30"
                ></textarea>
              </li>

              <li>
                    <label for="techStackCloud">Cloud </label>
                <textarea
                  id="techStackCloud"
                  name="techStackCloud"
                  value={formData.techStackCloud}
                  onChange={(techStackCloud) =>
                    setFormData({
                      ...formData,
                      techStackCloud: techStackCloud.target.value,
                    })
                  }
                  rows="5"
                  cols="30"
                ></textarea>
              </li>

              <li>
                <h3>Professional Experience</h3>
                <label htmlFor=""></label>
                <input
                  type="text"
                  id=""
                  name=""
                  value={formData}
                  onChange={(nameOfFormField) =>
                    setFormData({
                      ...formData,
                      nameOfValue: nameOfFormField.target.value,
                    })
                  }
                ></input>
              </li>

 

              <li>
                <h3>Education and Qualifications</h3>
                <label htmlFor=""></label>
                <input
                  type="text"
                  id=""
                  name=""
                  value={formData}
                  onChange={(nameOfFormField) =>
                    setFormData({
                      ...formData,
                      nameOfValue: nameOfFormField.target.value,
                    })
                  }
                ></input>
              </li>

              <li>
                <h3>CPD</h3>
                <label htmlFor=""></label>
                <input
                  type="text"
                  id=""
                  name=""
                  value={formData}
                  onChange={(nameOfFormField) =>
                    setFormData({
                      ...formData,
                      nameOfValue: nameOfFormField.target.value,
                    })
                  }
                ></input>
              </li>

              <li>
                <h3>References</h3>
                <label htmlFor=""></label>
                <input
                  type="text"
                  id=""
                  name=""
                  value={formData}
                  onChange={(nameOfFormField) =>
                    setFormData({
                      ...formData,
                      nameOfValue: nameOfFormField.target.value,
                    })
                  }
                ></input>
              </li>

              <li>
                <button type="submit" onClick={submitContactInfo}>
                  Submit Data
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate("DisplayResume")}
                >
                  View Resume
                </button>
                <button type="button" onClick={() => onNavigate("Welcome")}>
                  Start Again
                </button>
              </li>
            </ul>
          </form>
        </>
      </div>
      <div>
        <ResumeDynamicView displayData={formData} />
      </div>
      {/* <div><ResumeDynamicView displayData={submitContactInfo}/></div> */}
    </div>
  );
}
