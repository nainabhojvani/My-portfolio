// App.jsx
import { useEffect, useState } from "react";
import BackgroundParticles from "./BackgroundParticles";
import Header from "./Header";
import Home from "./Home";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./contact";
import Footer from "./Footer";


function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
     window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
  window.history.scrollRestoration = "manual";
  window.scrollTo(0, 0);
}, []);

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    { threshold: 0.5 } // optionally reduce
  );

  // 👇 Delay the observer until DOM is fully loaded
  const timeout = setTimeout(() => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));
  }, 100); // 100ms delay

  return () => {
    clearTimeout(timeout);
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.unobserve(section));
  };
}, []);


  return (
    <div>
      <BackgroundParticles />
      <Header activeSection={activeSection} />
      <Home />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
