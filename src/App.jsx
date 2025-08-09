import { useRef, useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  const heroRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const heroHeight = heroRef.current?.offsetHeight || 0
      const progress = Math.min(scrollPosition / (heroHeight * 0.5), 1)
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const heroStyle = {
    opacity: 1 - scrollProgress * 0.8,
    transform: `scale(${1 - scrollProgress * 0.1})`,
  }

  return (
    <>
      <div className="w-full min-h-screen bg-background dark:bg-zinc-900 text-black dark:text-white transition-colors">
        <Navbar />
        <main>
          <Hero heroRef={heroRef} heroStyle={heroStyle} />
          <About/>
          <Experience />
          <Education />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
