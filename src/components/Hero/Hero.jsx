import "./Hero.css";
import SplitText from "../../effects/SplitText";
import PixelTransition from '../../effects/PixelTransition';

import hero from "../../assets/img1.png";

const Hero = () => {
  return (  

    <div className="herobox">
      <section className="hero" id="home">

      <div className="hero-left">

        {/* <span className="hero-tag">
          👋 Hello, I'm
        </span> */}

        {/* <h1>
          Akshat Muley
          
        </h1> */}
        <h1 className="hero-name">

          <SplitText
        text="Akshat Muley"
         tag="h1"
        delay={50}
        duration={1.25}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        
      />
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

        {/* <img
          src={hero}
          alt="Akshat"
        /> */}

        <PixelTransition
          firstContent={
            <img
              src={hero}
              alt="akshat"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
         }        
          secondContent={
            <div  
              style={{
                width: "100%",
                height: "100%",
                display: "grid",
                placeItems: "center",
                backgroundColor: "#111"
              }}
            >
              <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>Hello</p>
            </div>
          }
          gridSize={8}
          pixelColor="#ffffff"
          once={false}
          animationStepDuration={0.4}
          className="custom-pixel-card"
        />

      </div>

    </section>
    </div>
    
  );
};

export default Hero;