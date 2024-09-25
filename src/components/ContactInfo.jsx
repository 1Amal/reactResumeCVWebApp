// This Component includes general information like name,
//  email and phone number.

import { useState } from "react";

export default function ContactInfo() {
  const hello = () => {
    alert("Hello Amal!");
  };

  return (
    <div>
      <h1>Contact Info</h1>

      <>
        <form>
          <ul>
            <li>
              <label htmlFor="fullName">Full Name: </label>
              <input type="text" id="fullName" name="fullName"></input>
            </li>
            <li>
              <label htmlFor="email">E-mail: </label>
              <input type="email" id="email" name="email"></input>
            </li>
            <li>
              <label htmlFor="phone">Phone: </label>
              <input type="number" id="phone" name="phone"></input>
            </li>
            {/* <button type="button"
            onClick={hello}
            >Submit Contact Info</button> */}
            <li></li>
          </ul>
        </form>
      </>
    </div>
  );
}
