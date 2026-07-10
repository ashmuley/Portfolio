import "./Skills.css";
import SkillCard from "./SkillCard";

import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaDatabase,
  FaGithub,
  FaBrain,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiVercel,
  SiTensorflow,
  SiKeras,
  SiGit,
} from "react-icons/si";

const skills = [
  {
    title: "Frontend",
    color: "#00E5FF",
    icon: <FaReact />,
    description:
      "Building beautiful and responsive user interfaces using modern frontend technologies.",

    technologies: [
      { icon: <FaReact />, name: "React" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3Alt />, name: "CSS3" },
      { icon: <SiTailwindcss />, name: "Tailwind" },
    ],
  },

  {
    title: "Backend",
    color: "#22C55E",
    icon: <FaNodeJs />,
    description:
      "Developing scalable REST APIs, authentication systems and server-side applications.",

    technologies: [
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express" },
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiMysql />, name: "MySQL" },
    ],
  },

  {
    title: "Programming",
    color: "#A855F7",
    icon: <FaJava />,
    description:
      "Strong foundation in programming, data structures and problem solving.",

    technologies: [
      { icon: <FaJava />, name: "Java" },
      { icon: <FaPython />, name: "Python" },
      { name: "C++" },
      { name: "DSA" },
      { name: "SQL" },
    ],
  },

  {
    title: "Database",
    color: "#3B82F6",
    icon: <FaDatabase />,
    description:
      "Experience with SQL and NoSQL databases for scalable applications.",

    technologies: [
      { icon: <SiMysql />, name: "MySQL" },
      { icon: <SiMongodb />, name: "MongoDB" },
    ],
  },

  {
    title: "Tools",
    color: "#F97316",
    icon: <FaGithub />,
    description:
      "Professional development workflow using modern developer tools.",

    technologies: [
      { icon: <FaGithub />, name: "GitHub" },
      { icon: <SiGit />, name: "Git" },
      { icon: <SiPostman />, name: "Postman" },
      { icon: <SiVercel />, name: "Vercel" },
      { name: "VS Code" },
    ],
  },

  {
    title: "AI / ML",
    color: "#EC4899",
    icon: <FaBrain />,
    description:
      "Building intelligent applications using machine learning frameworks.",

    technologies: [
      { icon: <SiTensorflow />, name: "TensorFlow" },
      { icon: <SiKeras />, name: "Keras" },
      { name: "OpenCV" },
      { name: "Power BI" },
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">

      <div className="skills-header">

        <span className="section-tag">
          💻 Skills
        </span>

        <h2>
          Technologies I Work With
        </h2>

        <p>
          A collection of technologies, frameworks and tools
          that I use to build modern web applications.
        </p>

      </div>

      <div className="cards-wrapper">

        {skills.map((item, index) => (

          <SkillCard
            key={index}
            index={index}
            {...item}
          />

        ))}

      </div>

    </section>
  );
};

export default Skills;