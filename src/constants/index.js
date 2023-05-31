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
  carrent,
  jobit,
  tripguide,
  threejs,
  ega,
  northStar,
  allstate,
  regency,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
