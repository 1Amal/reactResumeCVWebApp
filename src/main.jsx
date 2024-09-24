import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ContactInfo from "./components/ContactInfo.jsx";
import CareerProfile from "./components/CareerProfile.jsx";
import ProfessionalExperience from "./components/ProfessionalExperience.jsx";
import EducationExperience from "./components/EducationExperience.jsx";

import "./styles/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContactInfo />
    <CareerProfile />
    <ProfessionalExperience />
    <EducationExperience />
  </StrictMode>
);
