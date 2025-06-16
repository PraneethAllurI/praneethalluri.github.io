const projects = [
  {
    title: "Government Issue Reporting System",
    description: "A public issue reporting system allowing users to report problems to the government with images and status tracking.",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Recharts", "TailwindCSS", "Multer", "Axios", "Cloudinary"],
    repo: "https://github.com/PraneethAllurI/backend-govt-issue-reporting-system",
    live: "https://frontend-gov-issue-reporting-system.vercel.app/"
  },
  {
    title: "JWT Authentication System",
    description: "A secure authentication system implementing JWT for login and authorization.",
    techStack: ["React.js", "JWT", "React Router", "Node.js", "Express.js"],
    repo: "https://github.com/PraneethAllurI/JWT",
    live: ""
  },
  {
    title: "Polling App",
    description: "A polling app that allows users to create questions with multiple options, cast votes, and view live results.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "RESTful API"],
    repo: "https://github.com/praneeth-alluri/cactro-fullstack-test",
    live: "https://cactro-fullstack-testt.vercel.app/"
  },
  {
    title: "Hotel Booking App",
    description: "A hotel booking app featuring a date picker, price calculation for days, and an explore hotels functionality.",
    techStack: ["React", "Context API", "Firebase Hosting"],
    repo: "https://github.com/PraneethAllurI/hotel-booking",
    live: "https://hotel-booking-app-b2e0f.web.app/"
  }
];

const workExperience = [
  {
    company: "CAPGEMINI",
    duration: "Dec 2021 – May 2024",
    roles: [
      {
        title: "Frontend Developer",
        period: "Dec 2021 – May 2024",
        responsibilities: [
          "Built dynamic and responsive user interfaces using React.js, improving user experience and engagement.",
          "Integrated APIs and managed state using React Context, ensuring smooth data flow and performance.",
          "Optimized components and implemented lazy loading, resulting in faster load times and improved SEO."
        ]
      }
    ]
  },
  {
    company: "BUILDMEPRODUCT",
    duration: "Jun 2024 – May 2025",
    roles: [
      {
        title: "Freelance Full-Stack Developer",
        period: "Jun 2024 – May 2025",
        responsibilities: [
          "Developed and maintained full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js), improving performance and scalability across multiple projects.",
          "Designed and implemented RESTful APIs and integrated third-party services, ensuring seamless front-end and back-end communication for dynamic, data-driven user experiences."
        ]
      }
    ]
  },
  {
    company: "WEBSITES MADE LOCAL",
    duration: "May 2025 – Present",
    roles: [
      {
        title: "Full Stack Developer",
        period: "May 2025 – Present",
        responsibilities: [
          "Led end-to-end web development for clients, handling everything from UI/UX design to front-end and back-end implementation using the MERN stack.",
          "Managed complete deployment lifecycle, including hosting setup, domain configuration, SSL, and custom email solutions.",
          "Delivered tailored websites and web apps for local businesses, ensuring performance, responsiveness, and SEO best practices."
        ]
      }
    ]
  }
];


const skills = [
  {
    experience: "WEBSITES MADE LOCAL - Full Stack Developer",
    duration: "May 2025 – Present",
    skills: [
      "Full-Stack Development (MERN Stack: MongoDB, Express.js, React.js, Node.js)",
      "UI/UX Design and Implementation",
      "Complete Deployment Lifecycle (Hosting, Domain Setup, SSL, Custom Email)",
      "Performance Optimization and SEO Best Practices",
      "Responsive Web Design",
      "Client Communication and Requirement Analysis"
    ]
  },
  {
    experience: "BUILDMEPRODUCT - Freelance Full-Stack Developer",
    duration: "Jun 2024 – May 2025",
    skills: [
      "Full-Stack Development (MERN Stack)",
      "RESTful API Design & Implementation",
      "Third-Party Service Integration",
      "Performance and Scalability Improvements",
      "Dynamic, Data-Driven User Experience"
    ]
  },
  {
    experience: "CAPGEMINI - FRONTEND DEVELOPER",
    duration: "Dec 2021 – May 2024",
    skills: [
      "JavaScript, React.js",
      "API Integration and State Management (React Context)",
      "Component Optimization and Lazy Loading",
      "SEO Optimization",
      "Responsive and Dynamic UI Development"
    ]
  }
];



// Named exports instead of default exports
export { projects, workExperience, skills };
