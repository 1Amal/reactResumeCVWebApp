import { useState } from "react";

import Welcome from "./Welcome.jsx";
import EditResume from "./EditResume.jsx";
import DisplayResume from "./DisplayResume.jsx";

import "../styles/App.css";
import ResumeDynamicView from "./ResumeDynamicView.jsx";

function App() {
  const [currentView, setCurrentView] = useState("Welcome");

  const [dataObject, setDataObject] = useState("Hello Data Object");

  const [formData, setFormData] = useState({
    fullName: "Amal K.",
    eMail: "amal@amal.com",
    mobile: "0466222222",
    webSite: "www.1amal.github.io",
    location: "Melbourne",
    profSummary:
      "Front End Software Engineer with over two years of professional experience. Many software development projects can be found on the Github",
    techStackProgrammingLanguages:
      "JavaScript | CSS (Grid, FlexBox) | HTML | Bash",
    techStackFrameWorks: "React",
    techStackDeveloperTools:
      "Git | Ubuntu GNU/Linux | VS Code | Chrome Developer Tools | NPM | WebPack | Vite | Jest | Babel | ESLint | Prettier | Figma | Jira | Confluence | Discord | Slack",
    techStackProgrammingConcepts:
      "TDD | SOLID | DRY | OOP Principles | Clean Code | Unit Testing | WCAG",
    techStackCloud: "Vercel | Cloud Flare Pages | Netlify",
    jobTitle1: "Front End Developer",
    jobCompanyName1: "Open Source",
    jobCompanyCity1: "Melbourne",
    jobStartDate1: "2020",
    jobEndDate1: "Current",
    jobResponsibilities1: "Develop React Open Source Projects",
    jobAchievements1: "Created react based CV App",
    jobTitle2: "Web Developer",
    jobCompanyName2: "Various Freelance",
    jobCompanyCity2: "Melbourne",
    jobStartDate2: "2020",
    jobEndDate2: "Current",
    jobResponsibilities2: "Develop commercial websites",
    jobAchievements2: "Built websites for several local businesses",
    jobTitle3: "Software Engineer",
    jobCompanyName3: "Various",
    jobCompanyCity3: "Melbourne",
    jobStartDate3: "2021",
    jobEndDate3: "2023",
    jobResponsibilities3: "Build custom web based software",
    jobAchievements3: "Built several web based software for clients",
    courseName1: "Full Stack JavaScript",
    courseProvider1: "The Odin Project",
    courseDescription1: "JavaScript, React, Node.Js,PostgreSQL ",
    courseCompletionDate1: "Dec 2024",
    courseName2: "Web Development Foundations",
    courseProvider2: "The Odin Project",
    courseDescription2: "JavaScript, CSS, HTML, Linux, Git",
    courseCompletionDate2: "Dec 2023",
    courseName3:
      "Bachelor of Engineering (Honours) Electronic, Telecommunications & Internet Engineering",
    courseProvider3: "UoB",
    courseDescription3: "Degree recognized by Engineers Australia",
    courseCompletionDate3: "2008",
    refereeDetails1: "Richard Stallman, rms@gnu.org",
    refereeDetails2: "Linus Torvalds, linus@linuxfoundation.org",
  });

  const renderView = () => {
    switch (currentView) {
      case "Welcome":
        return <Welcome onNavigate={setCurrentView} />;

      case "EditResume":
        return (
          <EditResume
            onNavigate={setCurrentView}
            formData={formData}
            setFormData={setFormData}
          />
        );

      case "DisplayResume":
        return (
          <DisplayResume onNavigate={setCurrentView} displayData={formData} />
        );

      case "ResumeDynamicView":
        return (
          <ResumeDynamicView
            onNavigate={setCurrentView}
            displayData={formData}
          />
        );

      default:
        return <Welcome />;
    }
  };

  return <div>{renderView()}</div>;
}

export default App;
