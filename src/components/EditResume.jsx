// This Component will provide edit fields for the resume

import App from "./App.jsx";

import DisplayResume from "./DisplayResume.jsx";

import ResumeDynamicView from "./ResumeDynamicView.jsx";

import { useState } from "react";

export default function EditResume({ onNavigate }) {
  const [formSubmited, setFormSubmit] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "Amal",
    eMail: "amal@amal.com",
    mobile: "111111111",
    webSite: "www.1amal.github.io",
    location: "Melbourne",
    profSummary: "Front End Engineer",
    skills1: "Skills Summary 1",
    skills2: "Skills Summary 2",
    courseName: "Course Name",
    courseCompletionDate: "Course Completion",
    jobTitle: "",
    jobCompanyName: "",
    jobCompanyCity: "",
    jobStartDate: "",
    jobEndDate: "",
    jobResponsibilities: "",
    jobAchievements: "",
    refereeDetails: "",
  });
  const submitContactInfo = (formSubmission) => {
    formSubmission.preventDefault();

    callDisplayResume();
  };

  const callDisplayResume = () => {
    console.log("callDisplayResume Function Called");
    console.log(formData);
    <ResumeDynamicView displayData={formData} />;

    onNavigate("DisplayResume");
  };

  return (
    <div>
      <h1>{formData.fullName}</h1>
      <div>
        <h1>Edit Resume</h1>
        <>
          <form>
            {/* onSubmit={callDisplayResume} */}
            <ul>
              <li>
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
                id=""
                name=""
                value={formData}
                onChange={(nameOfFormField)=>setFormData({...formData,nameOfValue:nameOfFormField.target.value})}
                >
                </input>
                
                </li> */}

              <li>
                <button type="submit" onClick={submitContactInfo}>
                  Submit & View Resume
                </button>
              </li>
              <li>
                {/* <button
                  type="button"
                  onClick={() => onNavigate("DisplayResume")}
                >
                  View Resume
                </button> */}
                <button type="button" onClick={() => onNavigate("Welcome")}>
                  Start Again
                </button>
              </li>
            </ul>
          </form>
        </>
      </div>
      <div>{/* <ResumeDynamicView displayData={formData}/> */}</div>
    </div>
  );
}
