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
    company: "Capgemini",
    duration: "Dec 2021 – May 2024",
    roles: [
      {
        title: "Network Operations Center (NOC) Team Member",
        period: "Apr 2022 – Jun 2023",
        responsibilities: [
          "Monitored network infrastructure, servers, and devices for performance and availability using tools like Nagios.",
          "Detected and responded to incidents, performing troubleshooting and coordinating with the technical support.",
          "Managed incidents through ServiceNow, ensuring proper escalation and resolution within SLAs."
        ]
      },
      {
        title: "Major Incident Manager",
        period: "Sept 2023 – May 2024",
        responsibilities: [
          "Led resolution of critical incidents, coordinating cross-functional teams for timely resolution.",
          "Managed high-priority incidents, ensuring swift escalation and communication with stakeholders.",
          "Acted as the primary point of contact for major incident communications to senior leadership."
        ]
      }
    ]
  },
  {
    company: "Self-Employed (MERN Stack Developer)",
    duration: "June 2024 – Present",
    roles: [
      {
        title: "Full-Stack Developer",
        period: "June 2024 – Present",
        responsibilities: [
          "Developed and deployed multiple full-stack applications using the MERN stack.",
          "Built the Government Issue Reporting System allowing users to report issues with image uploads and tracking.",
          "Implemented JWT authentication and secure RESTful APIs.",
          "Designed and developed a polling app with real-time voting and data visualization.",
          "Deployed applications using Vercel and Firebase for seamless hosting and scalability."
        ]
      }
    ]
  }
];


const skills = [
  {
    experience: "Capgemini - Network Operations Center (NOC) Team Member",
    duration: "Apr 2022 – Jun 2023",
    skills: [
      "Network Monitoring (Nagios, Appworx)",
      "Incident Detection & Troubleshooting",
      "ServiceNow Ticket Management",
      "SLA & KPI Adherence",
      "Cross-Team Coordination"
    ]
  },
  {
    experience: "Capgemini - Major Incident Manager",
    duration: "Sept 2023 – May 2024",
    skills: [
      "Incident Management & Communication",
      "Root Cause Analysis (RCA)",
      "Stakeholder Coordination",
      "Critical Incident Resolution",
      "IT Service Management (ITSM) Tools"
    ]
  },
  {
    experience: "Self-Employed - MERN Stack Developer",
    duration: "June 2024 – Present",
    skills: [
      "Full-Stack Development (MERN)",
      "JavaScript (ES6+), React.js, Node.js, Express.js, MongoDB",
      "RESTful API Design & Implementation",
      "JWT Authentication & Security",
      "State Management (Redux Toolkit, Context API)",
      "Frontend UI (Bootstrap, TailwindCSS, React Router)",
      "Version Control (Git, GitHub)",
      "Cloud Storage (Cloudinary, Firebase Hosting)",
      "Deployment (Vercel, Netlify)"
    ]
  }
];


// Named exports instead of default exports
export { projects, workExperience, skills };
