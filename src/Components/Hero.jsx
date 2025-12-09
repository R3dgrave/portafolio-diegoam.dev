import React, { useState } from "react";
import {
  Download,
  Copy,
  Github,
  Linkedin,
  ArrowDown,
  Mail,
  Phone,
} from "lucide-react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";
import { AnimatedElement } from "../Components/AnimatedElement";

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const email = "diegoabm.dev@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="inicio"
      className="flex flex-col bg-background dark:bg-zinc-900 transition-colors pt-20"
    >
      <div className="p-4 md:container max-w-4xl gap-4 items-start flex-grow">
        <div className="space-y-6">
          {/*Foto*/}
          <AnimatedElement animation="fade-up">
            <div className="relative w-36 h-36 md:mx-0 mb-6">
              <div className="absolute inset-0 rounded-full bg-blue-800 dark:bg-sky-500/65 blur-3xl opacity-50" />
              <img
                src="/photo-me.webp"
                alt="Diego Abanto"
                className="relative rounded-full object-cover border-2 border-white dark:border-zinc-800 shadow-xl shadow-gray-900/50 w-full h-full"
              />
            </div>
          </AnimatedElement>

          {/* NOMBRE */}
          <AnimatedElement animation="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight pb-4 uppercase font-sans">
              <span>
                Diego Abanto
              </span>
            </h1>
            <p className="text-xl text-[#0a4c91] dark:text-[#00BAFE] font-sans font-semibold">Desarrollador Junior</p>
          </AnimatedElement>

          {/* TECNOLOGÍAS */}
          <AnimatedElement animation="fade-up">
            <div className="mt-6 flex flex-row gap-2 flex-wrap items-center">
              <SiJavascript className="text-yellow-400 size-8 rounded-lg" />
              <SiReact className="text-sky-400 size-8" />
              <SiTailwindcss className="text-sky-300 size-8" />
              <span> | </span>
              <SiNodedotjs className="text-green-600 size-8" />
              <SiExpress className="text-gray-700 size-8" />
              <span> | </span>
              <SiPostgresql className="text-blue-700 size-8" />
              <SiMongodb className="text-green-500 size-8" />
            </div>
          </AnimatedElement>

          {/* DESCRIPCIÓN */}
          <AnimatedElement animation="fade-up">
            <p className="text-md text-gray-800 dark:text-gray-200 leading-relaxed max-w-prose transition-colors pt-4">
              Soy Diego, Analista Programador enfocado en
              <span className="font-semibold"> Desarrollo Web</span>. Tengo
              experiencia con
              <span className="font-semibold">
                {" "}
                JavaScript, React, TailwindCSS, Node.js/Express y gestores de
                bases de datos como PostgreSQL y MongoDB.
              </span>{" "}
            </p>
            <p className="py-4 text-md text-gray-800 dark:text-gray-200 leading-relaxed max-w-prose transition-colors">
              Actualmente continúo formándome de manera autodidacta en{" "}
              <span className="font-semibold">
                arquitectura de software, buenas prácticas y patrones de diseño
              </span>
              . Si deseas conocer más sobre mi perfil o experiencia, estaré
              encantado de conversar.
            </p>
          </AnimatedElement>

          {/* BOTONES DE CONTACTO */}
          <AnimatedElement animation="fade-up">
            <div className="flex flex-row gap-2">
              <a
                href="https://drive.google.com/file/d/1OPVeAMSmIHZAk1p9jjh-bzPDWFSvqv0Y/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-[#0a4c91] dark:bg-[#00BAFE] text-white group flex items-center border-none"
              >
                <Download className="text-white h-4 w-4 transition-custom group-hover:-translate-y-1" />
                Ver CV
              </a>
              <a
                href="https://github.com/R3dgrave"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost hover:bg-[#0a4c91] hover:dark:bg-[#00BAFE] hover:text-white transition-colors border-none"
              >
                <Github className="h-6 w-6" />
              </a>

              <a
                href="https://www.linkedin.com/in/diegoabantomendoza"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost hover:bg-[#0a4c91] hover:dark:bg-[#00BAFE] hover:text-white transition-colors border-none"
              >
                <Linkedin className="h-6 w-6" />
              </a>

              <a
                href="mailto:diegoabm.dev@gmail.com"
                aria-label="Email"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost hover:bg-[#0a4c91] hover:dark:bg-[#00BAFE] hover:text-white transition-colors border-none"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </AnimatedElement>

          {/* CONTACTO */}
          <AnimatedElement animation="fade-up">
            <div className="flex flex-col lg:flex-row gap-4">
              <button
                className="btn btn-ghost btn-wide border border-gray-400 dark:border-gray-600 group flex items-center text-black dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors"
                onClick={copyToClipboard}
                aria-label="Copiar a portapapeles"
              >
                {copied ? "¡Copiado!" : email}
                <Copy className="ml-2 h-4 w-4" />
              </button>

              <button className="btn btn-wide border border-gray-400 dark:border-gray-600 group flex items-center text-black dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors">
                +56 9 7689 6260
                <Phone className="ml-2 h-4 w-4" />
              </button>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default Hero;
