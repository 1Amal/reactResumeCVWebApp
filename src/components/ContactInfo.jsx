// This Component includes general information like name,
//  email and phone number.

import { useState } from "react";
import DisplayResume from "./DisplayResume";

export default function ContactInfo() {
  const [formSubmited, setFormSubmit] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "Amal",
    eMail: "amal@amal.com",
    phoneNo: "111111111",
  });
  const submitContactInfo = (formSubmission) => {
    formSubmission.preventDefault();

    setFormSubmit(true);
    console.log(formData);
  };

  const callDisplayResume=()=>{
    <DisplayResume formData={formData}/>
    // alert("Hey")
  }

  return (
    <div>
      <h1>Contact Info</h1>
      <h2>{formData.fullName}</h2>
      <p>@: {formData.eMail} Phone: {formData.phoneNo}</p>
      

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
                  setFormData({ ...formData, phoneNo: setPhoneNo.target.value })
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
    </div>
  );
}
