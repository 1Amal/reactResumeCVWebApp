import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import ContactInfo from "./components/ContactInfo.jsx";
// import CareerProfile from "./components/CareerProfile.jsx";
// import ProfessionalExperience from "./components/ProfessionalExperience.jsx";
// import EducationExperience from "./components/EducationExperience.jsx";

import EditResume from "./components/EditResume.jsx";
import displayResume from "./components/DisplayResume.jsx";

import "./styles/index.css";

// function displayResume() {
//   createRoot(document.getElementById("root")).render(
//     <StrictMode>
//       <ContactInfo />
//       <CareerProfile />
//       <ProfessionalExperience />
//       <EducationExperience />
//       <button onClick={editResume}>Edit Resume</button>
//     </StrictMode>
//   );
// }

// function editResume() {
//   createRoot(document.getElementById("root")).render(
//     <StrictMode>
//       {/* <ContactInfo />
//       <CareerProfile />
//       <ProfessionalExperience />
//       <EducationExperience /> */}
//       <button onClick={displayResume}>Submit Resume</button>
//     </StrictMode>
//   );
// }

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <ContactInfo /> */}
    {EditResume}
    <button onClick={displayResume}>Submit Resume</button>
  </StrictMode>
);
