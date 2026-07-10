import "./Hero.css";

import hero from "../../assets/hero.png";

const Hero = () => {
  return (

    <div className="herobox">
      <section className="hero" id="home">

      <div className="hero-left">

        <span className="hero-tag">
          👋 Hello, I'm
        </span>

        <h1>
          Akshat Muley
          {/* <br /> */}
          {/* <span>Muley</span> */}
        </h1>

        <h3>
          MERN Stack Developer
        </h3>

        <p>
          I build modern web applications with React,
          Node.js and AI-powered solutions that solve
          real-world problems.
        </p>

        <div className="hero-buttons">

          <a href="#projects">
            View Projects
          </a>

          <a href="/resume.pdf">
            Download CV
          </a>

        </div>

        <div className="hero-social">

          <a href="#">Github</a>

          <a href="#">LinkedIn</a>

          <a href="#">Email</a>

        </div>

      </div>

      <div className="hero-right">

        <img
          src={hero}
          alt="Akshat"
        />

      </div>

    </section>
    </div>
    
  );
};

export default Hero;