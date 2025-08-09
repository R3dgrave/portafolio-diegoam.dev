import React from "react";
import { AnimatedElement } from "./AnimatedElement";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiSupabase,
  SiGit,
  SiGithub,
  SiVercel,
} from "react-icons/si";

const About = () => {
  return (
    <>
      <section id="sobre-mi" className="py-20 bg-gray-100 dark:bg-zinc-950 dark:text-white transition-colors">
        <div className="container">
          <AnimatedElement
            animation="fade-up"
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Sobre Mí</h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-8" />
          </AnimatedElement>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedElement animation="slide-in-left" className="space-y-6">
              <p className="text-md text-gray-700 dark:text-gray-300">
                Soy Diego, un Analista Programador de 26 años con experiencia tanto en hardware como en software. Mi verdadera pasión es el desarrollo web, la cual descubrí a través de proyectos personales y académicos. Actualmente, me enfoco en el desarrollo Front-End y me mantengo en constante formación para estar siempre a la vanguardia de las tecnologías del mercado. En mi tiempo libre, disfruto de los videojuegos y las series.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2 text-black dark:text-white">
                    Lenguajes de Programación
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center gap-2">
                      <SiJavascript className="text-yellow-400" />
                      JavaScript
                    </li>
                    <li className="flex items-center gap-2">
                      <SiTypescript className="text-blue-500" />
                      TypeScript
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-black dark:text-white">Bases de datos</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center gap-2">
                      <SiPostgresql className="text-blue-600" />
                      PostgreSQL
                    </li>
                    <li className="flex items-center gap-2">
                      <SiMongodb className="text-green-500" />
                      MongoDB
                    </li>
                    <li className="flex items-center gap-2">
                      <SiSupabase className="text-green-400" />
                      Supabase
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-black dark:text-white">Frameworks o librerías</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center gap-2">
                      <SiReact className="text-blue-400" />
                      React
                    </li>
                    <li className="flex items-center gap-2">
                      <SiNodedotjs className="text-green-500" />
                      Node.js
                    </li>
                    <li className="flex items-center gap-2">
                      <SiExpress className="dark:text-gray-200" />
                      Express
                    </li>
                    <li className="flex items-center gap-2">
                      <SiTailwindcss className="text-cyan-500" />
                      Tailwind CSS
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-black dark:text-white">
                    Herramientas de Desarrollo
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center gap-2">
                      <SiGit className="text-red-600" />
                      Git
                    </li>
                    <li className="flex items-center gap-2">
                      <SiGithub className="dark:text-white" />
                      GitHub
                    </li>
                    <li className="flex items-center gap-2">
                      <SiVercel className="dark:text-white" />
                      Vercel
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedElement>
            <AnimatedElement animation="slide-in-right" className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary/20 via-primary/0 to-primary/20 blur-xl opacity-50" />
              <img
                src="/about-me.webp"
                alt="Sobre mí"
                loading="lazy"
                width={600}
                height={400}
                className="aspect-square rounded-xl object-cover border border-white/10 dark:border-black shadow-lg shadow-gray-900/50"
              />
            </AnimatedElement>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;