// import "./About.css";
// import about from "../../assets/img2.jpeg";

// import {
//   FaGraduationCap,
//   FaMapMarkerAlt,
//   FaCode,
//   FaBookOpen,
//   FaHeart,
//   FaRocket,
// } from "react-icons/fa";

// const About = () => {
//   return (
//     <section className="about" id="about">

//       <div className="about-container">

//         {/* LEFT */}

//         <div className="about-left">

//           <div className="profile-card">

//             <img src={about} alt="Akshat" />

//             <div className="status">

//               <span className="dot"></span>

//               Open To Work

//             </div>

//           </div>

//         </div>

//         {/* RIGHT */}

//         <div className="about-right">

//           {/* <span className="section-tag">
//             👤 About Me
//           </span> */}

//           <h2>
//             Get To <span>Know</span> Me
//           </h2>

//           <p className="about-text">

//             I'm a passionate Full Stack Developer who enjoys
//             building modern web applications and AI-powered
//             solutions. I love transforming ideas into useful,
//             scalable, and visually appealing digital products.

//             <br /><br />

//             Currently focused on MERN Stack, React,
//             Backend Development and Artificial Intelligence.
//             I'm always learning new technologies and improving
//             my problem-solving skills.

//           </p>

//           <div className="info-grid">

//             <div className="info-cards">

//               <FaGraduationCap className="icon" />

//               <h4>Education</h4>

//               <p>B.Tech CSE</p>

//               <span>2022 - 2026</span>

//             </div>

//             <div className="info-cards">

//               <FaMapMarkerAlt className="icon" />

//               <h4>Location</h4>

//               <p>India</p>

//               <span>Maharashtra</span>

//             </div>

//             <div className="info-cards">

//               <FaCode className="icon" />

//               <h4>Focus</h4>

//               <p>Frontend</p>

//               <span>MERN • AI</span>

//             </div>

//             <div className="info-cards">

//               <FaBookOpen className="icon" />

//               <h4>Learning</h4>

//               <p>System Design</p>

//               <span>DSA • Backend</span>

//             </div>

//             <div className="info-cards">

//               <FaHeart className="icon" />

//               <h4>Interests</h4>

//               <p>Coding</p>

//               <span>Reading • Plants</span>

//             </div>

//             <div className="info-cards">

//               <FaRocket className="icon" />

//               <h4>Goal</h4>

//               <p>Impactful Products</p>

//               <span>Open To Work</span>

//             </div>

//           </div>

//         </div>

//       </div>
//       {/* ================= Stats ================= */}

//       <div className="stats-container">

//         <div className="stat-card">
//           <h2>4+</h2>
//           <p>Major Projects</p>
//         </div>

//         <div className="stat-card">
//           <h2>15+</h2>
//           <p>Technologies</p>
//         </div>

//         <div className="stat-card">
//           <h2>100+</h2>
//           <p>DSA Problems</p>
//         </div>

//         <div className="stat-card">
//           <h2>2nd</h2>
//           <p>Competition Rank</p>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default About;

import "./About.css";
import about from "../../assets/img2.jpeg";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import {
  FaGraduationCap,
  FaMapMarkerAlt,
  FaCode,
  FaBookOpen,
  FaHeart,
  FaRocket,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const About = () => {

  const sectionRef = useRef(null);

  useGSAP(() => {

    const tl = gsap.timeline({

      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 55%",
        toggleActions: "play none none none",
        once: true,
      },

    });

    // LEFT IMAGE

    tl.from(".profile-card", {
      opacity: 0,
      filter: "blur(20px)",
      scale: 0.96,
      y: 40,
      duration: 1,
      ease: "power3.out",
    });

    // RIGHT CONTENT

    tl.from(
      ".about-heading",
      {
        opacity: 0,
        filter: "blur(20px)",
        y: 35,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.6"
    );

    tl.from(
      ".about-text",
      {
        opacity: 0,
        filter: "blur(15px)",
        y: 25,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.55"
    );

    // INFO CARDS

    tl.from(
      ".info-cards",
      {
        opacity: 0,
        filter: "blur(18px)",
        scale: 0.95,
        y: 30,
        stagger: 0.12,
        duration: 0.65,
        ease: "power3.out",
      },
      "-=0.45"
    );

    // STATS

    tl.from(
      ".stat-card",
      {
        opacity: 0,
        filter: "blur(15px)",
        scale: 0.85,
        y: 25,
        stagger: 0.12,
        duration: 0.55,
        ease: "back.out(1.7)",
      },
      "-=0.2"
    );

  }, []);

  return (

    <section
      className="about"
      id="about"
      ref={sectionRef}
    >

      <div className="about-container">

        {/* LEFT */}

        <div className="about-left">

          <div className="profile-card">

            <img
              src={about}
              alt="Akshat"
            />

            <div className="status">

              <span className="dot"></span>

              Open To Work

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="about-right">

          <h2 className="about-heading">

            Get To <span>Know</span> Me

          </h2>

          <p className="about-text">

            I'm a passionate Full Stack Developer who enjoys
            building modern web applications and AI-powered
            solutions. I love transforming ideas into useful,
            scalable, and visually appealing digital products.

            <br /><br />

            Currently focused on MERN Stack, React,
            Backend Development and Artificial Intelligence.
            I'm always learning new technologies and improving
            my problem-solving skills.

          </p>

          <div className="info-grid">

            <div className="info-cards">

              <FaGraduationCap className="icon" />

              <h4>Education</h4>

              <p>B.Tech CSE</p>

              <span>2022 - 2026</span>

            </div>

            <div className="info-cards">

              <FaMapMarkerAlt className="icon" />

              <h4>Location</h4>

              <p>India</p>

              <span>Maharashtra</span>

            </div>

            <div className="info-cards">

              <FaCode className="icon" />

              <h4>Focus</h4>

              <p>Frontend</p>

              <span>MERN • AI</span>

            </div>

            <div className="info-cards">

              <FaBookOpen className="icon" />

              <h4>Learning</h4>

              <p>System Design</p>

              <span>DSA • Backend</span>

            </div>

            <div className="info-cards">

              <FaHeart className="icon" />

              <h4>Interests</h4>

              <p>Coding</p>

              <span>Reading • Plants</span>

            </div>

            <div className="info-cards">

              <FaRocket className="icon" />

              <h4>Goal</h4>

              <p>Impactful Products</p>

              <span>Open To Work</span>

            </div>

          </div>

        </div>

      </div>

      {/* STATS */}

      <div className="stats-container">

        <div className="stat-card">

          <h2>4+</h2>

          <p>Major Projects</p>

        </div>

        <div className="stat-card">

          <h2>15+</h2>

          <p>Technologies</p>

        </div>

        <div className="stat-card">

          <h2>100+</h2>

          <p>DSA Problems</p>

        </div>

        <div className="stat-card">

          <h2>2nd</h2>

          <p>Competition Rank</p>

        </div>

      </div>

    </section>

  );

};

export default About;
