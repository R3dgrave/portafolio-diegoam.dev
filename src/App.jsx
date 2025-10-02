import { useRef, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Resume from "./Components/Resume";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ProjectDetailPage from "./Components/ProjectDetailPage";

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
      <Router>
      <div className="w-full min-h-screen bg-background dark:bg-zinc-900 text-black dark:text-white transition-colors">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero heroRef={heroRef} heroStyle={heroStyle} />
                <About/>
                <Resume/>
                <Projects />
                <Contact />
              </>
            } />
            <Route path="/proyectos/:projectId" element={<ProjectDetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </>
  );
}

export default App;
