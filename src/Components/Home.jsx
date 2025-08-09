import { useRef, useState, useEffect } from "react";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";
import { Contact } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  const heroRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = heroRef.current?.offsetHeight || 0;
      const progress = Math.min(scrollPosition / (heroHeight * 0.5), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const heroStyle = {
    opacity: 1 - scrollProgress * 0.8,
    transform: `scale(${1 - scrollProgress * 0.1})`,
  };

  return (
    <>
      <div className="min-h-screen bg-background">
        <main>
          <Hero heroRef={heroRef} heroStyle={heroStyle} />
          <About />
          <Experience />
          <Education />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  );
};

export default Home;
