// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import dotnet from './assets/tech_logo/dotnet.png';
import jetbrais from './assets/tech_logo/jetbrains.png';
import VS from './assets/tech_logo/VS.png'

// Experience Section Logo's
import vscode from './assets/company_logo/image.png';
import nodejs from './assets/company_logo/node.png'

// Education Section Logo's
import DU from './assets/education_logo/DU.png';
import navyug from './assets/education_logo/navyug.png';


// Project Section Logo's
import bill from './assets/work_logo/bill.png';
import ppt from './assets/work_logo/ppt.png';
import net from './assets/work_logo/net.png';
import student from './assets/work_logo/student.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: '.NetCore', logo: csharpLogo},
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'dotnet', logo: dotnet},
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'jetbrais', logo: jetbrais},
      { name: 'visual studio', logo: VS}
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img : vscode, 
      desc: "Built using .NET Students can search colleges by location, field, and rank Admin panel to manage and display college data dynamically",
      skills: [
        "ASP.NetCore",
        "MYSQL",
      ],
    },
     {
      id: 1,
      desc: "Real time use project Dynamic: (PowerPoint Slide Reordering Based on Excel Seating Arrangement Using ChatGPT Technology Stack)",
      img : vscode, 
      skills: [
        "C#"
      ],
    },
     {
      id: 2,
      desc: "The Bill Generator System is a Node.js and MySQL-based application designed to simplify the process of creating and managing invoices. It allows businesses to generate GST-compliant invoices, store customer details, manage product data, and calculate totals automatically. ",
      img : nodejs,
      skills: [
        "nodejs",
        "mysql",
        "pdflibraoffice"
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: DU,
      school: "Darshan University, Rajkot",
      date: "Sept 2023 - July 2026",
      grade: "7.02 CGPA",
      desc: "I have pursuing my B.tech degree (CSE) in Darshan University, Rajkot.",
      degree: "Computer Science Enginnering - CSE",
    },
    {
      id: 1,
      img: navyug,
      school: "Navyug Vidhiyalay - morbi",
      date: "Apr 2022 - March 2023",
      grade: "56.68%",
      desc: "I completed my class 12 education from Navyug Vidhiyalay - morbi, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "HSC(XII) - Computer Science",
    },
    {
      id: 2,
      img: navyug,
      school: "Navyug sankul - virpar",
      date: "Apr 2019 - March 2020",
      grade: "70%",
      desc: "I completed my class 10 education from Navyug sankul virpar - morbi, under the CBSE board.",
      degree: "SSC(X) ",
    },
  ];
  
  export const Projects = [
    {
      id: 0,
      title: "bill-generator",
      description:"The Bill Generator System is a Node.js and MySQL-based application designed to simplify the process of creating and managing invoices. It allows businesses to generate GST-compliant invoices, store customer details, manage product data, and calculate totals automatically.",
      image: bill,
      tags: ["HTML", "CSS", "JavaScript", "nodeJS", "API","Mysql"],
      github: "https://github.com/PrathamAghara/bill-generater",
    },
    {
      id: 1,
      title: "Dynamic PowerPoint Slide Reordering Based on Excel Seating Arrangement",
      description:"This project is an automated PowerPoint slide generator that creates professional slides from Excel data. Each row in the Excel file represents a member, including their Name, Business Name, Contact, and Description. The slides are arranged automatically in the correct sequence using the “Next – [Name]” order, ensuring smooth flow between members.The design is based on a reference template (memer.pptx), so every generated slide maintains a consistent style, layout, and branding. This eliminates manual work and makes it easy to generate updated presentations directly from Excel data",
      image: ppt,
      tags: ["C#","API"],
      github: "https://github.com/PrathamAghara/pptproject",
    },
    {
      id: 2,
      title: "College Finder Web App",
      description:"Built using .NET Students can search colleges by location, field, and rank Admin panel to manage and display college data dynamically",
      image: net,
      tags: [".net","SwagerAPI","SQL"],
      github: "https://github.com/PrathamAghara/consume",
    },
     {
      id: 3,
      title: "School Student Admin",
      description:"The School Student Admin project is a complete web-based management system designed to handle student, staff, and administrative operations efficiently. It includes secure JWT-based authentication, role-based access control (Admin/Student/Staff), student registration and management, and integration with PostgreSQL for database operations.",
      image: student,
      tags: ["ASP.NET Core backend","Angular frontend","PostgreSQL"],
      github: "https://github.com/PrathamAghara/student-frontend",
    },
  ];  