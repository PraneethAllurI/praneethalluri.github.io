 const projects = [
  {
    title: "Dharmapeetam Website",
    description: "A community and course platform featuring secure inquiry handling and a dynamic, non-technical admin workflow via spreadsheet integration[cite: 2].",
    techStack: ["React.js", "Vite", "Tailwind CSS", "EmailJS", "Google Sheets API"],
    repo: "",
    live: "https://dharmapeetam.com/"
  },
  {
    title: "Clinical Research Website (ACRIND)",
    description: "A comprehensive clinical research platform featuring a secure Admin Dashboard, dynamic course and certificate management, online certificate verification, and complete cloud integration[cite: 2].",
    techStack: ["React.js", "Vite", "Styled Components", "React Router", "Bootstrap", "Firebase Authentication", "Firestore", "EmailJS", "Cloudinary"],
    repo: "",
    live: "https://www.acrind.com/"
  }
];

 const workExperience = [
  {
    company: "BuildMeProduct",
    duration: "June 2024 - Present",
    roles: [
      {
        title: "MERN Stack Developer",
        responsibilities: [
          "Implemented JWT-based authentication and authorization, attaching authorization tokens to API requests and handling authenticated server responses on the client  .",
          "Built React.js applications that consume REST APIs to fetch and display 1,000+ records, implementing pagination, responsive layouts, and reusable card components across 20+ pages/modules  .",
          "Implemented API error handling and fallback states using try/catch, providing appropriate user feedback and improving application resilience during failed API requests  .",
          "Designed and developed reusable UI components and dynamic card-based interfaces with loading states, improving consistency and maintainability across the application  .",
          "Implemented client-side routing with React Router and built dynamic forms using controlled components, integrating form submissions with Firebase/backend services  .",
          "Performed frontend performance optimization by identifying unnecessary re-renders, optimizing component rendering, improving API/data handling, and refining UI implementation for better application responsiveness  .",
          "Used AI-assisted development (prompt engineering) to speed up implementation and debugging, reviewing and validating all generated code against project requirements and architecture  .",
          "Managed delivery with Git/GitHub feature branches, pull requests, and code reviews, and released to production with environment configuration  ."
        ]
      }
    ]
  },
  {
    company: "Capgemini",
    duration: "Dec 2021 - May 2024",
    roles: [
      {
        title: "Frontend Developer",
        responsibilities: [
          "Integrated REST APIs using Axios to fetch, process, and display dynamic business data, handling loading and error states in the UI  .",
          "Tested and debugged API integrations with Postman to verify responses before connecting them to the UI  .",
          "Developed and maintained frontend applications for business use with React 16, JavaScript, HTML5, React Hooks, and Bootstrap  .",
          "Built reusable React components shared across screens, reducing duplicate code and keeping the UI consistent  .",
          "Investigated and fixed UI bugs, such as layout, responsiveness, and state-related issues, raised during testing and QA, improving application stability  .",
          "Worked in an Agile/Scrum team (sprint planning, daily stand-ups, code reviews), using Git/GitHub for branching and pull requests  ."
        ]
      }
    ]
  }
];


 const skills = [
  {
    experience: "BUILDMEPRODUCT - MERN Stack Developer",
    duration: "June 2024 – Present",
    skills: [
      "Full-Stack Development & Architecture: Built scalable web applications using the MERN stack, designing reusable UI components and dynamic card-based interfaces with loading states   .",
      "Authentication & Security: Implemented JWT-based authentication and authorization, securely managing authorization tokens on API requests and client-side server responses   .",
      "API Integration & Data Handling: Consumed REST APIs to fetch and display 1,000+ records with pagination, robust error handling, and try/catch fallback states for application resilience   .",
      "Routing & Forms: Configured client-side routing using React Router and developed dynamic forms with controlled components integrated with Firebase and backend services   .",
      "Performance Optimization: Optimized frontend rendering by eliminating unnecessary re-renders, refining data handling, and improving overall mobile and desktop responsiveness   .",
      "AI-Assisted Development & Workflow: Leveraged prompt engineering for rapid implementation and debugging while rigorously reviewing all code, managing delivery via Git/GitHub feature branches, pull requests, and production environment configurations   ."
    ]
  },
  {
    experience: "CAPGEMINI - Frontend Developer",
    duration: "Dec 2021 – May 2024",
    skills: [
      "Enterprise Frontend Development: Developed and maintained business frontend applications using React 16, JavaScript (ES6+), HTML5, React Hooks, and Bootstrap   .",
      "API Integration & Testing: Integrated REST APIs via Axios to process and display dynamic business data, thoroughly testing and debugging endpoints using Postman prior to UI integration   .",
      "Component Reusability: Designed shared modular React components across multiple screens to reduce code duplication and maintain consistent UI design patterns   .",
      "Bug Fixing & Quality Assurance: Investigated and resolved complex UI bugs regarding layout, responsiveness, and state-management raised during testing and QA cycles   .",
      "Agile Collaboration: Collaborated within Agile/Scrum cross-functional teams through sprint planning, daily stand-ups, and structured Git/GitHub code review workflows   ."
    ]
  }
];



// Named exports instead of default exports
export { projects, workExperience, skills };
