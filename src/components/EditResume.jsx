// This Component will provide edit fields for the resume
// import ContactInfo from "./ContactInfo.jsx";
// import CareerProfile from "./CareerProfile.jsx";
// import ProfessionalExperience from "./ProfessionalExperience.jsx";
// import EducationExperience from "./EducationExperience.jsx";

import DisplayResume from "./DisplayResume.jsx";

import { useState } from "react";

export default function EditResume({ onNavigate }) {
  const [formSubmited, setFormSubmit] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "Amal",
    eMail: "amal@amal.com",
    phoneNo: "111111111",
  });
  const submitContactInfo = (formSubmission) => {
    formSubmission.preventDefault();

    // <DisplayResume />;
    setFormSubmit(true);
    console.log(formData);
  };

  const callDisplayResume = () => {
    <EducationExperience formData={{ test: 1 }} />;
  };

  // return (
  //   <div>
  //     <h1>Contact Info</h1>
  //     <h2>{formData.fullName}</h2>
  //     <p>
  //       @: {formData.eMail} Phone: {formData.phoneNo}
  //     </p>

  //   </div>
  // );

  return (
    <div>
      <div>
        <h1>Edit Resume</h1>
        <>
          <form onSubmit={submitContactInfo}>
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
                  value={formData.phoneNo}
                  onChange={(setPhoneNo) =>
                    setFormData({
                      ...formData,
                      phoneNo: setPhoneNo.target.value,
                    })
                  }
                ></input>
              </li>
              <button type="submit" onClick={callDisplayResume}>
                Submit Contact Info
              </button>
              <li></li>
            </ul>
          </form>
        </>
        {/* <ContactInfo /> */}
        {/* <CareerProfile />
        <ProfessionalExperience />
        <EducationExperience /> */}
        <button onClick={() => onNavigate("DisplayResume")}>View Resume</button>
        <button onClick={() => onNavigate("Welcome")}>Start Again</button>
      </div>
      <div>
        <DisplayResume />
      </div>
    </div>
  );
}
