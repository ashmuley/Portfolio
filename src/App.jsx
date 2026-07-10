

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";

import Ferrofluid from "./effects/backgd/Ferrofluid";


function App() { 

  return (

    <>

      <div
        style={{
          position:"fixed",
          inset:0,
          zIndex:-10,
           width: "100%",
    height: "100vh",
    background: "black",
    // position: "relative"
        }}
      >

        <Ferrofluid
          colors={["#000000","#e0cbcb","#d0b0b0"]}
          speed={0.45}
          scale={1.5}
          turbulence={1}
          fluidity={0.08}
          rimWidth={0.2}
          sharpness={2}
          shimmer={1.5}
          glow={2}
          flowDirection="down"
          opacity={0.9}
          mouseInteraction
          mouseStrength={1}
          mouseRadius={0.35}
        />

      </div> 

      <Navbar />

       <Hero />
       
       <About/>
       
       <Skills   />

    </>

  );

}

export default App;