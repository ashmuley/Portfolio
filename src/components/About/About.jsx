import "./About.css";
import about from "../../assets/img2.jpeg";

import {
  FaGraduationCap,
  FaMapMarkerAlt,
  FaCode,
  FaBookOpen,
  FaHeart,
  FaRocket,
} from "react-icons/fa";

const About = () => {
  return (
    <section className="about" id="about">

      <div className="about-container">

        {/* LEFT */}

        <div className="about-left">

          <div className="profile-card">

            <img src={about} alt="Akshat" />

            <div className="status">

              <span className="dot"></span>

              Open To Work

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="about-right">

          {/* <span className="section-tag">
            👤 About Me
          </span> */}

          <h2>
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

            <div className="info-card">

              <FaGraduationCap className="icon" />

              <h4>Education</h4>

              <p>B.Tech CSE</p>

              <span>2022 - 2026</span>

            </div>

            <div className="info-card">

              <FaMapMarkerAlt className="icon" />

              <h4>Location</h4>

              <p>India</p>

              <span>Maharashtra</span>

            </div>

            <div className="info-card">

              <FaCode className="icon" />

              <h4>Focus</h4>

              <p>Frontend</p>

              <span>MERN • AI</span>

            </div>

            <div className="info-card">

              <FaBookOpen className="icon" />

              <h4>Learning</h4>

              <p>System Design</p>

              <span>DSA • Backend</span>

            </div>

            <div className="info-card">

              <FaHeart className="icon" />

              <h4>Interests</h4>

              <p>Coding</p>

              <span>Reading • Plants</span>

            </div>

            <div className="info-card">

              <FaRocket className="icon" />

              <h4>Goal</h4>

              <p>Impactful Products</p>

              <span>Open To Work</span>

            </div>

          </div>

        </div>

      </div>
      {/* ================= Stats ================= */}

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
