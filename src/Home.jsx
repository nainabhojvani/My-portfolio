import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./Style.css";
import LaptopAnimation from "./LaptopAnimation";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="content text-left">
        <h1 className="title">Hi, I am {" "}
          <TypeAnimation
            sequence={[
              500,
              "Naina Bhojvani", // Types your name
              
            ]}
            speed={50}
            repeat={Infinity}
            wrapper="span"
            className="typewriter"
          />
        </h1>
        <p className="subtitle">
        - a passionate and detail-oriented web developer with a strong foundation in React.js, Node.js, and modern web technologies. I love turning ideas into clean, responsive, and user-friendly web applications. With hands-on project experience and a problem-solving mindset, I'm always eager to learn and grow in the tech world. Let's build something amazing together!
        </p>
        <a href="#projects" className="btn">
          View My Work
        </a>
         <a href="/Naina_Resume.pdf" download className="btn">
          Download Resume
        </a>
      </div>

      <LaptopAnimation />
    </section>
  );
};

export default Home;
