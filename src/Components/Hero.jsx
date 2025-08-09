import React, { useState, useEffect, useRef } from "react";
import {
  Download,
  Copy,
  Github,
  Linkedin,
  ArrowDown,
  Mail,
} from "lucide-react";
import { AnimatedElement } from "../Components/AnimatedElement";

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const email = "diegoabm.dev@gmail.com";
  const heroRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = heroRef.current?.offsetHeight || 0;
      // La animación comienza cuando el usuario ha hecho scroll un 10% del Hero
      const startScroll = heroHeight * 0.1;
      const endScroll = heroHeight * 0.6;
     
      let progress = 0;
      if (scrollPosition > startScroll) {
        progress = Math.min((scrollPosition - startScroll) / (endScroll - startScroll), 1);
      }
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const heroStyle = {
    opacity: 1 - scrollProgress,
    transform: `scale(${1 - scrollProgress * 0.05})`,
  };

  return (
    <section
      ref={heroRef}
      id="inicio"
      title="Inicio"
      className="min-h-screen flex flex-col pt-16 bg-background dark:bg-zinc-900 transition-colors"
    >
      <div
        style={heroStyle}
        className="p-4 md:container grid md:grid-cols-2 gap-8 items-center py-12 flex-grow"
      >
        <div className="space-y-6">
          <AnimatedElement animation="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hola, soy Diego Abanto
            </h1>
            <p className="text-xl dark:text-gray-200">
              Desarrollador Web Frontend Junior
            </p>
            <p className="text-md dark:text-gray-400">
              Construyo experiencias web interactivas y funcionales.
            </p>
          </AnimatedElement>
          <AnimatedElement
            animation="fade-up"
            delay={0.2}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://drive.google.com/file/d/1c01TfHn0r3cNul0qPtzjanrZwgDQ8v0l/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-black dark:text-white group flex items-center"
            >
              <Download className="text-black dark:text-white mr-2 h-4 w-4 transition-custom group-hover:-translate-y-1" />
              Ver CV
            </a>
            <button
              className="btn btn-ghost border border-gray-400 dark:border-gray-600 group flex items-center text-black dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors"
              onClick={copyToClipboard}
            >
              {copied ? "¡Copiado!" : email}
              <Copy className="ml-2 h-4 w-4" />
            </button>
          </AnimatedElement>

          <AnimatedElement animation="fade-up" delay={0.4} className="flex gap-4">
            <a
              href="https://github.com/R3dgrave"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost hover:text-black transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/diegoabantomendoza"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost hover:text-black transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:diegoabm.dev@gmail.com"
              aria-label="Email"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost hover:text-black transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </AnimatedElement>
        </div>
        <AnimatedElement
          animation="fade-up"
          delay={0.6}
          className="relative aspect-square max-w-lg mx-auto"
        >
          {/* Efecto de resplandor */}
          <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl opacity-50" />

          {/* Imagen con sombra y bordes dobles */}
          <img
            src="/photo-me.webp"
            alt="Diego Abanto"
            className="relative rounded-full object-cover border-4 border-white dark:border-zinc-800 shadow-xl shadow-gray-900/50 w-full h-full"
          />
        </AnimatedElement>
      </div>
      {/* Flecha "Descubre más" con flexbox para un centrado más fiable */}
      <div className="w-full flex justify-center py-4 md:translate-y-10 mb-10">
        <AnimatedElement
          animation="fade-up"
          delay={0.8}
        >
          <a
            href="#sobre-mi"
            className="flex flex-col items-center hover:text-primary transition-colors text-black dark:text-gray-200"
          >
            <span className="text-sm mb-2">Descubre más</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Hero;