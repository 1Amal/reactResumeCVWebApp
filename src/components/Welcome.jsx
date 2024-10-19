// Welcome Page with Instructions

export default function Welcome({ onNavigate }) {
  return (
    <div>
      <div>
        <h1>Welcome to CV/résumé Application</h1>
        <p>
          This user-friendly tool allows you to easily input your information
          and generate a professional résumé in just a few clicks.
        </p>

        <p>
          Whether you're entering the job market or looking to update your
          existing CV, this application is designed to help you create a
          polished document that highlights your skills and experiences.
        </p>
        <p>
          This application is built using React, ensuring a smooth and
          responsive user experience. With a straightforward interface, you can
          focus on what matters most—showcasing your qualifications!
        </p>

        <button onClick={() => onNavigate("EditResume")}>Create Resume</button>
      </div>
      <div>
        <h1>Project Info</h1>
        <ol>
          <li>
            Input Forms: Users can fill out personal details, work experience,
            education, and skills.
          </li>
          <li>Responsive: Works on desktop, tablet, and mobile devices.</li>
          <li>
            Printable: Users can print the final document to paper or to PDF
          </li>
        </ol>

        <h2>Tech Stack</h2>
        <ul>
          <li>
            React / JavaScript (ES6+) (Functional Components, State and Hooks)
          </li>
          <li>HTML5 & CSS3</li>
          <li>Hosting: Netlify | Vercel | Cloudflare </li>
        </ul>
        <h2>Live Demo</h2>
        <p>You can access this App from three different hosting providers</p>
        <p>
          <a href="https://amal-react-resume.netlify.app">
            CV/résumé Application hosted on Netlify
          </a>
        </p>
        <p>
          {" "}
          <a href="https://amal-react-resume.vercel.app">
            CV/résumé Application hosted on Vercel
          </a>{" "}
        </p>

        <p>
          {" "}
          <a href="https://amal-react-resume-webapp.pages.dev">
            CV/résumé Application hosted on Cloudflare
          </a>{" "}
        </p>

        <h2>Source code and Project Info</h2>
        <p>
          <a href="https://github.com/1Amal/reactResumeCVWebApp">
            Source Code hosted on GitHub
          </a>
        </p>
      </div>
      <div>
        {" "}
        <p>
          <a href="https://1amal.github.io/">Developed by Amal K</a>
        </p>
      </div>
    </div>
  );
}
