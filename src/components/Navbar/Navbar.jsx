// import GooeyNav from "../../effects/Navbar/GooeyNav";
// import "./Navbar.css";

// const Navbar = () => {

//   const navItems = [
//     {
//       label: "Home",
//       href: "#home",
//     },
//     {
//       label: "About",
//       href: "#about",
//     },
//     {
//       label: "Skills",
//       href: "#skills",
//     },
//     {
//       label: "Projects",
//       href: "#projects",
//     },
//     {
//       label: "Achievements",
//       href: "#achievements",
//     },
//     {
//       label: "Contact",
//       href: "#contact",
//     },
//   ];

//   return (
//     <header className="navbar">

//       <div className="logo">
//         Akshat<span>.</span>
//       </div>

//       <GooeyNav
//         items={navItems}
//         particleCount={15}
//         particleDistances={[90, 10]}
//         particleR={100}
//         initialActiveIndex={0}
//         animationTime={600}
//         timeVariance={300}
//         colors={[1,2,3,1,2,3,1,4]}
//       />

//       <a
//         href="/resume.pdf"
//         className="resume-btn"
//         target="_blank"
//         rel="noreferrer"
//       >
//         Resume
//       </a>

//     </header>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

import GooeyNav from "../../effects/Navbar/GooeyNav";
import "./Navbar.css";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (

    <header className="navbar">

      {/* Logo */}

      <div className="logo">
        Akshat<span>.</span>
      </div>

      {/* Desktop Navbar */}

      <div className="desktop-nav">

        <GooeyNav
          items={navItems}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1,2,3,1,2,3,1,4]}
        />

      </div>

      {/* Resume */}

      <a
        href="/resume.pdf"
        className="resume-btn desktop-resume"
        target="_blank"
        rel="noreferrer"
      >
        Resume
      </a>

      {/* Hamburger */}

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(true)}
      >
        <HiOutlineMenuAlt3 />
      </button>

      {/* Overlay */}

      <div
        className={`mobile-overlay ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu */}

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

        <button
          className="close-btn"
          onClick={() => setMenuOpen(false)}
        >
          <HiOutlineX />
        </button>

        {navItems.map((item) => (

          <a
            key={item.label}
            href={item.href}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>

        ))}

        <a
          href="/resume.pdf"
          className="mobile-resume"
        >
          Download Resume
        </a>

      </div>

    </header>

  );

};

export default Navbar;