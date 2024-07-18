import { IoLogoJavascript, IoLogoHtml5, IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPostgresql } from "react-icons/si";

export const PROFILE_DATA = {
  profilePicture: "https://via.placeholder.com/150",
  name: "Iftime Silviu",
  tagline: `Transforming concepts into dynamic web experiences, one line of code at a time.`,
  jobTitle: "Full Stack Developer",
  location: "Romania",
  yearsOfExperience: 1,
  skills: ["React.js", "JavaScript", "HTML", "CSS", "Git", "Tailwind", "PostgreSQL", "Node.js", "RESTful APIs"],
  email: "silviuiftime250@gmail.com",
  phone: "+40 783 164 678",
  website: "https://www.linkedin.com/in/silviu-iftime-609001282/",
};

export const SKILLS = [
  {
    id: "01",
    icon: IoLogoHtml5,
    title: "HTML",
    comment: `Using my knowledge of HTML, I design and develop websites that provide a user-friendly experience and an immersive online presence.`,
  },
  {
    id: "02",
    icon: RiTailwindCssFill,
    title: "Tailwind CSS",
    comment: `Tailwind CSS simplifies styling websites like never before. Its utility-first methodology lets me create sleek, responsive designs swiftly without traditional CSS complexities. It's my go-to for crafting polished user interfaces with ease.`,
  },
  {
    id: "03",
    icon: IoLogoJavascript,
    title: "JavaScript",
    comment: `With 1 year of experience in JavaScript, I specialize in building custom websites from scratch, ensuring each project is tailored to meet unique client needs with robust and dynamic functionality.`,
  },
  {
    id: "04",
    icon: IoLogoReact,
    title: "React.js",
    comment: `Working with React.js is like having a supercharged toolkit for web development. Its component-driven approach streamlines the process of building interactive, data-driven interfaces alongside my experience.`,
  },
  {
    id: "05",
    icon: IoLogoNodejs,
    title: "Node.js",
    comment: `Node.js has been a game-changer for my backend development projects. Its non-blocking, event-driven architecture allows for highly efficient handling of I/O operations, making it perfect for building scalable and real-time applications.`,
  },
  {
    id: "06",
    icon: SiPostgresql,
    title: "PostgreSQL",
    comment: `PostgreSQL is my go-to database solution for robust and scalable applications. Its powerful features like ACID compliance, JSONB support, and full-text search capabilities enable me to manage complex data structures with precision and flexibility.`,
  },
];

export const WORK_EXPERIENCE = [
  {
    id: "01",
    company: "...",
    position: "...",
    duration: "...",
    description:
      "...",
  },
  {
    id: "02",
    company: "...",
    position: "...",
    duration: "...",
    description:
      "...",
  },
  {
    id: "03",
    company: "...",
    position: "...",
    duration: "...",
    description:
      "...",
  },
];

export const ABOUT_ME_DATA = {
  introduction:
    "Hi, I'm Silviu and I am 19 years old. I am an energetic and outgoing student. I learn everyday and I'm passionate about a lot of things like: web development, full stack, music production, soccer, fitness etc.",
  background:
    "I hold a High School diploma in Computer Science. I graduated with a 9.7/10 grade in Informatics. I'm currently studying Business Administration because I am planning to combine my skills and turn them into a business.",
  skills:
    "I'm proficient in: React.js, JavaScript, HTML, CSS(Tailwind, Bootstrap), Node.js and PostgreSQL. I also have experience with version control systems like Git and with RESTful APIs.",
  projects:
    "Some of my notable projects include an e-commerce website built with React.js and Redux, a social media dashboard using Node.js and MongoDB, and a personal portfolio website deployed with Netlify.",
  careerGoals:
    "My objective is to provide value to my clients in a professional manner by leveraging all my knowledge. I aim to get the widest possible, diverse and serious experience in the Full Stack domain.",

  stats: {
    yearsOfExperience: "1+",
    numberOfProjects: 5,
    certificationsEarned: 1,
  },
};
