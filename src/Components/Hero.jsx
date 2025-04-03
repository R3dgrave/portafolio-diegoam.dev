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
  const email = "diego.abantomendoza@gmail.com";
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
    <section
      ref={heroRef}
      id="inicio"
      title="Inicio"
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <div
        style={heroStyle}
        className="p-4 md:container grid md:grid-cols-2 gap-8 items-center py-12"
      >
        <div className="space-y-6">
          <AnimatedElement animation="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hola, soy <span className="text-primary">Diego Abanto</span>
            </h1>
            <p className="text-xl text-muted">
              Desarrollador Web Frontend Junior
            </p>
          </AnimatedElement>
          <AnimatedElement
            animation="fade-up"
            delay={3}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="https://drive.google.com/file/d/1NCw4PSy_QHCeYWtBP8JtSn6_5OEsymrx/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-neutral group flex items-center">
              <Download  className="mr-2 h-4 w-4 transition-custom group-hover:-translate-y-1" />  
              Ver CV  
            </a>
            <button
              className="btn group flex items-center"
              onClick={copyToClipboard}
            >
              {copied ? "¡Copiado!" : email}
              <Copy className="ml-2 h-4 w-4" />
            </button>
          </AnimatedElement>

          <AnimatedElement animation="fade-up" delay={4} className="flex gap-4">
            <a href="https://github.com/R3dgrave" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/diego-abanto-b42b81289/" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:diego.abantomendoza@gmail.com" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <Mail className="h-5 w-5" />
            </a>
          </AnimatedElement>
        </div>
        <AnimatedElement
          animation="fade-up"
          delay={5}
          className="relative aspect-square max-w-lg mx-auto"
        >
          {/* Efecto de resplandor */}
          <div className="absolute inset-0 rounded-full bg-white/10 blur-3xl opacity-50" />

          {/* Imagen con sombra y bordes dobles */}
          <img
            src="/photo-me.webp"
            alt="Diego Abanto"
            className="relative rounded-full object-cover border border-white/10 border-black shadow-lg shadow-gray-900/50 w-full h-full"
          />
        </AnimatedElement>
      </div>
      <AnimatedElement
        animation="fade-up"
        delay={6}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a
          href="#sobre-mi"
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors text-gray-500"
        >
          <span className="text-sm mb-2">Descubre más</span>
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </a>
      </AnimatedElement>
    </section>
  );
};

export default Hero;
