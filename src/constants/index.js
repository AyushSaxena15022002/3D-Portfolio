import {
  mobile,
  backend,
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
  bootstrap,
  carrent,
  jobit,
  tripguide,
  threejs,
  materialui,
  Python,
  Mosh,
  John,
  Lama,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects_work",
    title: "Projects",
  },
  {
    id: "tutors",
    title: "Experts",
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
    title: "ReactJS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "materialui",
    icon: materialui,
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
    name: "Python",
    icon: Python,
  },
];

const experiences = [
  {
    Institute_name: "Holy Angels Sr. Secondary School , Gzb , UP",
    Board: "ICSE",
    iconBg: "black",
    date: "Feb 2006 - March 2018",
    grade: ["10th Class", "91.8%"],
  },
  {
    Institute_name: "DAV Srestha Vihar , Delhi",
    Board: "CBSE",
    iconBg: "black",
    date: "April 2018 - June 2020",
    grade: ["12th Class", "94.8%"],
  },
  {
    Institute_name: "NSUT, Dwarka , Delhi",
    Board: "Jee-Mains",
    iconBg: "black",
    date: "Jan 2021 - June 2025",
    grade: [
      "Data Structures And Algorithms",
      "Competitve Programming",
      "Web Development",
      "Machine Learning",
    ],
  },
];

const testimonials = [
  {
    Description:
      "You are the reason I made me interest in starting my Web Devlopment Journey. Your elaborate and highly descriptive Lectures are one of a kind.",
    name: "John Smilga",
    channel_name: "Codding_Addict",
    resource: "Youtube",
    image: John,
    linkToChannel: "https://www.youtube.com/@CodingAddict",
  },
  {
    Description:
      "Your ability to deliver complex topics in such an easy manner is second to none. I have learnt python and Django just because of you .",
    name: "Mosh Hamedani",
    channel_name: "Programming_With_Mosh",
    resource: "Youtube",
    image: Mosh,
    linkToChannel: "https://www.youtube.com/@programmingwithmosh",
  },
  {
    Description:
      "I have Just discovered your channel and I absolute admire the way you teach . A wide variety of projects you have covered . Just Brilliant",
    name: "Lama Dev",
    channel_name: "Lama Dev",
    resource: "Youtube",
    image: Lama,
    linkToChannel: "https://www.youtube.com/@LamaDev",
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
