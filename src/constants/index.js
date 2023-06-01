import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  ega,
  northStar,
  allstate,
  regency,
  plwto,
  golfstats,
  spaceinvaders,
  timer,
  coachingtool,
  ptotracker,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Digital Artist",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "United States Marine",
    company_name: "United States Marine Corps",
    icon: ega,
    iconBg: "#E6DEDD",
    date: "Sept 2008 - Aug 2013",
    points: [
      "Conducted combat operations in support of Operation Enduring Freedom in Afghanistan.",
      "Achieved the rank of Corporal (E-4) and served as a Team Leader.",
      "Implemented a battilion-wide physical training program.",
      "Received an honorable discharge in August 2013 after active duty service was complete.",
    ],
  },
  {
    title: "Project Manager",
    company_name: "NorthStar Recovery Services",
    icon: northStar,
    iconBg: "#E6DEDD",
    date: "Aug 2013 - Apr 2015",
    points: [
      "Conducted diaster recovery services for commercial clients in which water, fire, or mold was present.",
      "Managed teams of 15-25 employees and ensured that all projects were completed on time and within budget.",
      "Ensured that all IICRC standards were met and that all work was completed to the highest quality.",
    ],
  },
  {
    title: "Manager",
    company_name: "Allstate Insurance Company",
    icon: allstate,
    iconBg: "#E6DEDD",
    date: "Apr 2015 - Nov 2022",
    points: [
      "Led highly specialized teams of 15-20 employees in the handling of complex insurance questions.",
      "Received numerous performance bonuses for going above and beyond to meet business goals.",
      "Received a peer award in 2016.",
      "Participated in bi-monthly coaching sessions, providing constructive feedback to direct report employees.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Regency Technologies",
    icon: regency,
    iconBg: "#E6DEDD",
    date: "Nov 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including product managers and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in peer code reviews and providing meaningful feedback to internal developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "Please tell everyone about the great work I do!",
    name: "TBD",
    designation: "CEO",
    company: "Company",
    image:
      "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
  },
  {
    testimonial: "Please tell everyone about the great work I do!",
    name: "TBD",
    designation: "CEO",
    company: "Company",
    image:
      "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
  },
  {
    testimonial: "Please tell everyone about the great work I do!",
    name: "TBD",
    designation: "CEO",
    company: "Company",
    image:
      "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
  },
];

const projects = [
  {
    name: "Developer CD",
    description:
      "A beautiful and responsive portfolio website built using React.js/Three.js, vite, and Tailwind CSS." +
      " This was my first project utilizing Three.js, vite, and tailwindcss, and I am very happy with the results." +
      " I plan to continue to add to this project as I learn new technologies and improve my skills.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "vite",
        color: "blue-text-gradient",
      },
    ],
    image: coachingtool,
    source_code_link: "https://github.com/",
  },
  {
    name: "PLWTO",
    description:
      "The current ongoing project that I am working on with my development team. It is a warehouse management system to help manage the inventory of a warehouse." +
      " It is designed using React.js, Redux, CSS, and a C# API backend. I am responsible for both the frontend and backend development of this project." +
      " There is no link to the source code to this project as it is intellectual property of Regency Technologies.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "csharp",
        color: "blue-text-gradient",
      },
      {
        name: ".net",
        color: "green-text-gradient",
      },
      {
        name: "entity framework",
        color: "pink-text-gradient",
      },
      {
        name: "sql",
        color: "blue-text-gradient",
      },
    ],
    image: plwto,
  },
  {
    name: "Golf Statistic Tracker",
    description:
      "Developed as a project for my Advanced Visual Basic class at Kent State University. It was built using Visual Studio, Visual Basic, Windows Forms, and Entity Framework." +
      " The app allows the addition of new golfers, courses, rounds, and equipment. It allows the user to track their golf statistics and view them in a variety of ways." +
      " My goal is to eventually develop this into a full fledged mobile application with a web counter-part. The mobile application will be developed using React Native, and the web application will be developed using React.js/Three.js and Redux.",
    tags: [
      {
        name: "visual studio",
        color: "blue-text-gradient",
      },
      {
        name: "visual basic",
        color: "green-text-gradient",
      },
      {
        name: "windows forms",
        color: "pink-text-gradient",
      },
      {
        name: "entity framework",
        color: "blue-text-gradient",
      },
    ],
    image: golfstats,
    source_code_link: "https://github.com/",
  },
  {
    name: "Space Invaders Clone",
    description:
      "Developed as a project for my Advanced Java class at Kent State University. It was built using Visual Studio Code and Java/JavaFX." +
      " The game is incomplete as I ran out of time to finish the development of the project before it was due (I am currently working and attending school full time, so time is scarce)." +
      " It was extremely fun to develop and the base functionality of the game is there, but it is missing a few key features. I plan to finish this project in the near future.",
    tags: [
      {
        name: "visual studio",
        color: "blue-text-gradient",
      },
      {
        name: "visual basic",
        color: "green-text-gradient",
      },
      {
        name: "windows forms",
        color: "pink-text-gradient",
      },
      {
        name: "entity framework",
        color: "blue-text-gradient",
      },
    ],
    image: spaceinvaders,
    source_code_link: "https://github.com/",
  },
  {
    name: "Countdown Timer",
    description:
      "A mobile application developed as a project for my Mobile Applications class at Kent State University. It was built using Android Studio and Java." +
      " The app allows the user to set a timer for a specific amount of time, and then the app will count down to zero.",
    tags: [
      {
        name: "android studio",
        color: "blue-text-gradient",
      },
      {
        name: "java",
        color: "green-text-gradient",
      },
      {
        name: "xml",
        color: "pink-text-gradient",
      },
    ],
    image: timer,
    source_code_link: "https://github.com/",
  },
  {
    name: "Allstate Coaching Tool",
    description:
      "This is the second application I decided to develop. It is a desktop application that allows managers to track and manage metrics for their direct reports, and provides a platform for coaching sessions." +
      " This was a tool that I built for my leadership team at Allstate Insurance Company." +
      " It was not an official application, but it solved the problem of not having an employees metrics all in one easy to access place while conducting a coaching session.",
    tags: [
      {
        name: "windows forms",
        color: "blue-text-gradient",
      },
      {
        name: "visual basic",
        color: "green-text-gradient",
      },
      {
        name: ".net",
        color: "pink-text-gradient",
      },
    ],
    image: coachingtool,
    source_code_link: "https://github.com/",
  },
  {
    name: "Allstate PTO Tracker",
    description:
      "My first ever developed application. I admit the code could be much better, but it was my first attempt and I was pleased with the functionality at the time." +
      " It is a desktop application that allows frontline employees to easily track how many PTO days they have used and have remaining for a calendar year." +
      " As a leader I would get asked this question throughout the year, and this tool allowed the employees to better track their time off.",
    tags: [
      {
        name: "windows forms",
        color: "blue-text-gradient",
      },
      {
        name: "visual basic",
        color: "green-text-gradient",
      },
      {
        name: ".net",
        color: "pink-text-gradient",
      },
    ],
    image: ptotracker,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
