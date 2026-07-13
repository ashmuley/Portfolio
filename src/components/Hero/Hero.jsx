// import "./Hero.css";
// import SplitText from "../../effects/SplitText";
// import PixelTransition from '../../effects/PixelTransition';

// import hero from "../../assets/img1.png";

// const Hero = () => {
//   return (  

//     <div className="herobox">
//       <section className="hero" id="home">

//       <div className="hero-left">

        

//           <SplitText
//         text="Akshat Muley"
//         className="hero-name"
//          tag="h1"
//         delay={50}
//         duration={1.25}
//         ease="power3.out"
//         splitType="chars"
//         from={{ opacity: 0, y: 40 }}
//         to={{ opacity: 1, y: 0 }}
//         threshold={0.1}
//         rootMargin="-100px"
        
//       />
        
        

//         <h3>
//           MERN Stack Developer
//         </h3>

//         <p className="hero-mern">
//           I build modern web applications with React,
//           Node.js and AI-powered solutions that solve
//           real-world problems.
//         </p>

//         <div className="hero-bullets">

//           <p id="bullet1" className="bullets">Full Stack MERN Development</p>

//           <p id="bullet2" className="bullets">RESTful APIs, JWT Authentication & Secure Backends</p>

//           <p id="bullet3" className="bullets">Clean Code, Scalable Architecture & Problem Solving</p>

//         </div>
//         <div className="hero-buttons">

//           <a href="#projects">
//             View Projects
//           </a>

//           <a href="/resume.pdf">
//             Download CV
//           </a>

//         </div>


//       </div>

//       <div className="hero-right">

//         {/* <img
//           src={hero}
//           alt="Akshat"
//         /> */}

//         <PixelTransition
//           firstContent={
//             <img
//               src={hero}
//               alt="akshat"
//               style={{ width: "100%", height: "100%", objectFit: "cover" }}
//             />
//          }        
//           secondContent={
//             <div  
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 display: "grid",
//                 placeItems: "center",
//                 backgroundColor: "#111"
//               }}
//             >
//               <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>Hello</p>
//             </div>
//           }
//           gridSize={8}
//           pixelColor="#ffffff"
//           once={false}
//           animationStepDuration={0.4}
//           className="custom-pixel-card"
//         />

//       </div>

//     </section>
//     </div>
    
//   );
// };

// export default Hero;

import "./Hero.css";
import SplitText from "../../effects/SplitText";
import PixelTransition from "../../effects/PixelTransition";

import hero from "../../assets/img1.png";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const heroInfoRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // MERN Section
    tl.from(heroInfoRef.current, {
      opacity: 0,
      x: 60,
      duration: 1,
      ease: "power3.out",
      delay: 0.9,
    });

    // Bullets one by one
    tl.from(
      ".bullets",
      {
        opacity: 0,
        x: 40,
        stagger: 0.15,
        duration: 0.7,
        ease: "power3.out",
      },
      "-=0.45"
    );

    // Buttons
    // tl.from(
    //   ".hero-buttons a",
    //   {
    //     opacity: 0,
    //     y: 20,
    //     stagger: 0.15,
    //     duration: 0.6,
    //     ease: "power3.out",
    //   },
    //   "-=0.3"
    // );
    tl.fromTo(
  ".hero-buttons a",
  {
    opacity: 0,
    y: 20,
  },
  {
    opacity: 1,
    y: 0,
    stagger: 0.15,
    duration: 0.6,
    ease: "power3.out",
    clearProps: "all",
  },
  "-=0.3"
);

    // Image
    gsap.from(imageRef.current, {
      opacity: 0,
      x: -80,
      duration: 1.2,
      delay: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="herobox">
      <section className="hero" id="home">
        <div className="hero-left">
          <SplitText
            text="Akshat Muley"
            className="hero-name"
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

          {/* Everything below the name animates together */}
          <div className="hero-info" ref={heroInfoRef}>
            <h3>MERN Stack Developer</h3>

            <p className="hero-mern">
              I build modern web applications with React,
              Node.js and AI-powered solutions that solve
              real-world problems.
            </p>

            <div className="hero-bullets">
              <p id="bullet1" className="bullets">
                Full Stack MERN Development
              </p>

              <p id="bullet2" className="bullets">
                RESTful APIs, JWT Authentication & Secure Backends
              </p>

              <p id="bullet3" className="bullets">
                Clean Code, Scalable Architecture & Problem Solving
              </p>
            </div>

            <div className="hero-buttons">
              <a href="#projects">View Projects</a>

              <a href="/resume.pdf">Download CV</a>
            </div>
          </div>
        </div>

        <div className="hero-right" ref={imageRef}>
          <PixelTransition
            firstContent={
              <img
                src={hero}
                alt="akshat"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            }
            secondContent={
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "grid",
                  placeItems: "center",
                  backgroundColor: "#111",
                }}
              >
                <p
                  style={{
                    fontWeight: 900,
                    fontSize: "3rem",
                    color: "#fff",
                  }}
                >
                  Hello
                </p>
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