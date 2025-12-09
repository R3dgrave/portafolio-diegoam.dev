import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Resume from "./Components/Resume";
import Projectos from "./Components/Projectos";

function App() {
  return (
    <>
      <Router>
        <div className="w-full min-h-screen bg-background dark:bg-zinc-900 text-black dark:text-white transition-colors">
          <Navbar />
          <main>
            <Hero />
            <Projectos />
            <Resume />
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
