import { useState } from "react";

import Welcome from "./Welcome.jsx";
import EditResume from "./EditResume.jsx";
import DisplayResume from "./DisplayResume.jsx";
import ResumeDynamicView from "./ResumeDynamicView.jsx";

import "../styles/App.css";

function App() {
  const [currentView, setCurrentView] = useState("Welcome");

  const [formData, setFormData] = useState({
    fullName: "Amal K.",
    eMail: "amal@amal.com",
    mobile: "0466222222",
    webSite: "www.1amal.github.io",
    location: "Melbourne",
    profSummary:
      "Front End Software Engineer with over two years of professional experience, specializing in user-friendly web applications, with numerous projects available on my GitHub.",
    techStackProgrammingLanguages:
      "JavaScript | CSS (Grid, FlexBox) | HTML | Bash",
    techStackFrameWorks: "React",
    techStackDeveloperTools:
      "Git | Ubuntu GNU/Linux | VS Code | Chrome Developer Tools | NPM | WebPack | Vite | Jest | Babel | ESLint | Prettier | Figma | Jira | Confluence | Discord | Slack",
    techStackProgrammingConcepts:
      "TDD | SOLID | DRY | OOP Principles | Clean Code | Unit Testing | WCAG",
    techStackCloud: "Vercel | Cloud Flare Pages | Netlify",
    jobTitle1: "Front End Developer",
    jobCompanyName1: "Amal Develops",
    jobCompanyCity1: "Melbourne",
    jobStartDate1: "2021",
    jobEndDate1: "Current",
    jobResponsibilities1: "Develop React Open Source Projects",
    jobAchievements1: "Created react based Resume/CV App",
    jobTitle2: "Web Developer",
    jobCompanyName2: "AgileSoft",
    jobCompanyCity2: "Melbourne",
    jobStartDate2: "2021",
    jobEndDate2: "2022",
    jobResponsibilities2: "Develop commercial websites",
    jobAchievements2: "Built websites for several local businesses",
    jobTitle3: "Electronic Engineer",
    jobCompanyName3: "Freelance",
    jobCompanyCity3: "Melbourne",
    jobStartDate3: "2018",
    jobEndDate3: "2020",
    jobResponsibilities3:
      "Build custom web based software and Electronic projects",
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
