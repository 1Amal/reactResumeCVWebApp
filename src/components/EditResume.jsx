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

              {/* <li>
                
                <label htmlFor=""></label>
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
              </li> */}

              <li>
                <h3>Professional Summary</h3>
                <textarea
                  id="profSummary"
                  name="profSummary"
                  value={formData.profSummary}
                  onChange={(profSummary) =>
                    setFormData({
                      ...formData,
                      profSummary: profSummary.target.value,
                    })
                  }
                  rows="10"
                  cols="30"
                ></textarea>
              </li>
              <div>
                <li>
                  <h3>Technology Stack</h3>
                  <label for="techStackProgrammingLanguages">
                    Programming Languages:{" "}
                  </label>
                  <textarea
                    id="techStackProgrammingLanguages"
                    name="techStackProgrammingLanguages"
                    value={formData.techStackProgrammingLanguages}
                    onChange={(techStackProgrammingLanguages) =>
                      setFormData({
                        ...formData,
                        techStackProgrammingLanguages:
                          techStackProgrammingLanguages.target.value,
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
                  <label for="techStackDeveloperTools">Developer Tools: </label>
                  <textarea
                    id="techStackDeveloperTools"
                    name="techStackDeveloperTools"
                    value={formData.techStackDeveloperTools}
                    onChange={(techStackDeveloperTools) =>
                      setFormData({
                        ...formData,
                        techStackDeveloperTools:
                          techStackDeveloperTools.target.value,
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
                  <label for="techStackCloud">Cloud: </label>
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
              </div>
              <div>
                <li>
                  <h3>Professional Experience</h3>
                  <label htmlFor="jobTitle1">Job 1 - Title : </label>
                  <input
                    type="text"
                    id="jobTitle1"
                    name="jobTitle1"
                    value={formData.jobTitle1}
                    onChange={(jobTitle1) =>
                      setFormData({
                        ...formData,
                        jobTitle1: jobTitle1.target.value,
                      })
                    }
                  ></input>
                </li>

                <li>
                  <label htmlFor="jobCompanyName1">
                    Job 1 - Company Name:{" "}
                  </label>
                  <input
                    type="text"
                    id="jobCompanyName1"
                    name="jobCompanyName1"
                    value={formData.jobCompanyName1}
                    onChange={(jobCompanyName1) =>
                      setFormData({
                        ...formData,
                        jobCompanyName1: jobCompanyName1.target.value,
                      })
                    }
                  ></input>
                </li>

                <li>
                  <label htmlFor="jobCompanyCity1">Job 1 - City: </label>
                  <input
                    type="text"
                    id="jobCompanyCity1"
                    name="jobCompanyCity1"
                    value={formData.jobCompanyCity1}
                    onChange={(jobCompanyCity1) =>
                      setFormData({
                        ...formData,
                        jobCompanyCity1: jobCompanyCity1.target.value,
                      })
                    }
                  ></input>
                </li>

                <li>
                  <label htmlFor="jobStartDate1">Job 1 - Start Date: </label>
                  <input
                    type="text"
                    id="jobStartDate1"
                    name="jobStartDate1"
                    value={formData.jobStartDate1}
                    onChange={(jobStartDate1) =>
                      setFormData({
                        ...formData,
                        jobStartDate1: jobStartDate1.target.value,
                      })
                    }
                  ></input>
                </li>

                <li>
                  <label htmlFor="jobEndDate1">Job 1 - End Date: </label>
                  <input
                    type="text"
                    id="jobEndDate1"
                    name="jobEndDate1"
                    value={formData.jobEndDate1}
                    onChange={(jobEndDate1) =>
                      setFormData({
                        ...formData,
                        jobEndDate1: jobEndDate1.target.value,
                      })
                    }
                  ></input>
                </li>

                <li>
                  <label for="jobResponsibilities1">
                    Job 1 - Responsibilities:{" "}
                  </label>
                  <textarea
                    id="jobResponsibilities1"
                    name="jobResponsibilities1"
                    value={formData.jobResponsibilities1}
                    onChange={(jobResponsibilities1) =>
                      setFormData({
                        ...formData,
                        jobResponsibilities1: jobResponsibilities1.target.value,
                      })
                    }
                    rows="5"
                    cols="30"
                  ></textarea>
                </li>

                <li>
                  <label for="jobAchievements1">Job 1 - Achievements: </label>
                  <textarea
                    id="jobAchievements1"
                    name="jobAchievements1"
                    value={formData.jobAchievements1}
                    onChange={(jobAchievements1) =>
                      setFormData({
                        ...formData,
                        jobAchievements1: jobAchievements1.target.value,
                      })
                    }
                    rows="5"
                    cols="30"
                  ></textarea>
                </li>
              </div>
              <div>
                <li>
                  <label htmlFor="jobTitle2">Job 2 - Title : </label>
                  <input
                    type="text"
                    id="jobTitle2"
                    name="jobTitle2"
                    value={formData.jobTitle1}
                    onChange={(jobTitle2) =>
                      setFormData({
                        ...formData,
                        jobTitle2: jobTitle2.target.value,
                      })
                    }
                  ></input>
                </li>

                <li>
                  <label htmlFor="jobCompanyName2">
                    Job 2 - Company Name:{" "}
                  </label>
                  <input
                    type="text"
                    id="jobCompanyName2"
                    name="jobCompanyName2"
                    value={formData.jobCompanyName1}
                    onChange={(jobCompanyName1) =>
                      setFormData({
                        ...formData,
                        jobCompanyName1: jobCompanyName1.target.value,
                      })
                    }
                  ></input>
                </li>

                <li>
                  <label htmlFor="jobCompanyCity2">Job 2 - City: </label>
                  <input
                    type="text"
                    id="jobCompanyCity2"
                    name="jobCompanyCity2"
                    value={formData.jobCompanyCity2}
                    onChange={(jobCompanyCity2) =>
                      setFormData({
                        ...formData,
                        jobCompanyCity2: jobCompanyCity2.target.value,
                      })
                    }
                  ></input>
                </li>

                <li>
                  <label htmlFor="jobStartDate2">Job 2 - Start Date: </label>
                  <input
                    type="text"
                    id="jobStartDate2"
                    name="jobStartDate2"
                    value={formData.jobStartDate2}
                    onChange={(jobStartDate2) =>
                      setFormData({
                        ...formData,
                        jobStartDate2: jobStartDate2.target.value,
                      })
                    }
                  ></input>
                </li>

                <li>
                  <label htmlFor="jobEndDate2">Job 2 - End Date: </label>
                  <input
                    type="text"
                    id="jobEndDate2"
                    name="jobEndDate2"
                    value={formData.jobEndDate2}
                    onChange={(jobEndDate1) =>
                      setFormData({
                        ...formData,
                        jobEndDate2: jobEndDate2.target.value,
                      })
                    }
                  ></input>
                </li>

                <li>
                  <label for="jobResponsibilities2">
                    Job 2 - Responsibilities:{" "}
                  </label>
                  <textarea
                    id="jobResponsibilities2"
                    name="jobResponsibilities2"
                    value={formData.jobResponsibilities2}
                    onChange={(jobResponsibilities2) =>
                      setFormData({
                        ...formData,
                        jobResponsibilities2: jobResponsibilities2.target.value,
                      })
                    }
                    rows="5"
                    cols="30"
                  ></textarea>
                </li>

                <li>
                  <label for="jobAchievements2">Job 2 - Achievements: </label>
                  <textarea
                    id="jobAchievements2"
                    name="jobAchievements2"
                    value={formData.jobAchievements2}
                    onChange={(jobAchievements2) =>
                      setFormData({
                        ...formData,
                        jobAchievements2: jobAchievements2.target.value,
                      })
                    }
                    rows="5"
                    cols="30"
                  ></textarea>
                </li>
              </div>

              <div>
                <li>
                  <label htmlFor="jobTitle3">Job 3 - Title : </label>
                  <input
                    type="text"
                    id="jobTitle3"
                    name="jobTitle3"
                    value={formData.jobTitle3}
                    onChange={(jobTitle3) =>
                      setFormData({
                        ...formData,
                        jobTitle3: jobTitle3.target.value,
                      })
                    }
                  ></input>
                </li>

                <li>
                  <label htmlFor="jobCompanyName3">
                    Job 3 - Company Name:{" "}
                  </label>
                  <input
                    type="text"
                    id="jobCompanyName3"
                    name="jobCompanyName3"
                    value={formData.jobCompanyName3}
                    onChange={(jobCompanyName3) =>
                      setFormData({
                        ...formData,
                        jobCompanyName3: jobCompanyName3.target.value,
                      })
                    }
                  ></input>
                </li>

                <li>
                  <label htmlFor="jobCompanyCity3">Job 3 - City: </label>
                  <input
                    type="text"
                    id="jobCompanyCity3"
                    name="jobCompanyCity3"
                    value={formData.jobCompanyCity3}
                    onChange={(jobCompanyCity3) =>
                      setFormData({
                        ...formData,
                        jobCompanyCity3: jobCompanyCity3.target.value,
                      })
                    }
                  ></input>
                </li>

                <li>
                  <label htmlFor="jobStartDate3">Job 3 - Start Date: </label>
                  <input
                    type="text"
                    id="jobStartDate3"
                    name="jobStartDate3"
                    value={formData.jobStartDate3}
                    onChange={(jobStartDate3) =>
                      setFormData({
                        ...formData,
                        jobStartDate3: jobStartDate3.target.value,
                      })
                    }
                  ></input>
                </li>

                <li>
                  <label htmlFor="jobEndDate3">Job 3 - End Date: </label>
                  <input
                    type="text"
                    id="jobEndDate3"
                    name="jobEndDate3"
                    value={formData.jobEndDate3}
                    onChange={(jobEndDate3) =>
                      setFormData({
                        ...formData,
                        jobEndDate3: jobEndDate3.target.value,
                      })
                    }
                  ></input>
                </li>

                <li>
                  <label for="jobResponsibilities3">
                    Job 3 - Responsibilities:{" "}
                  </label>
                  <textarea
                    id="jobResponsibilities3"
                    name="jobResponsibilities3"
                    value={formData.jobResponsibilities3}
                    onChange={(jobResponsibilities3) =>
                      setFormData({
                        ...formData,
                        jobResponsibilities3: jobResponsibilities3.target.value,
                      })
                    }
                    rows="5"
                    cols="30"
                  ></textarea>
                </li>

                <li>
                  <label for="jobAchievements3">Job 3 - Achievements: </label>
                  <textarea
                    id="jobAchievements3"
                    name="jobAchievements3"
                    value={formData.jobAchievements3}
                    onChange={(jobAchievements3) =>
                      setFormData({
                        ...formData,
                        jobAchievements3: jobAchievements3.target.value,
                      })
                    }
                    rows="5"
                    cols="30"
                  ></textarea>
                </li>
              </div>

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
