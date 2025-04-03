import React from "react";
import { AnimatedElement } from "./AnimatedElement";

const About = () => {
  return (
    <>
      <section id="sobre-mi" className="py-20 bg-muted/30">
        <div className="container">
          <AnimatedElement
            animation="fade-up"
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Sobre Mí</h2>
            <div className="h-1 w-20 bg-black dark:bg-white mx-auto mb-8" />
          </AnimatedElement>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedElement
              animation="slide-in-left"
              className="space-y-6"
            >
              <p className="text-lg">
                Mi nombre es Diego, tengo 26 años, mis pasatiempos e intereses
                son ver series, jugar videojuegos y la programación y desarrollo
                web en general. Estudie la carrera de Analista Programador,
                tengo experiencia en hardware(armando, diagnosticando y
                reparando ordenadores) y software. Durante mi formación descubrí
                mi pasión por el desarrollo web mientras desarrollaba proyectos
                personales y académicos y conforme fui adentrándome más en el
                tema.
              </p>
              <p className="text-lg">
                Actualmente, busco empleo como desarrollador web Front-End, a la
                par que sigo formándome día a día de manera autodidacta sobre
                las tecnologías actuales y demandadas del mercado para siempre
                estar a la vanguardia.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">
                    Lenguajes de Programación
                  </h3>
                  <ul className="space-y-1  text-gray-400">
                    <li>• JavaScript</li>
                    <li>• TypeScript</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Bases de datos</h3>
                  <ul className="space-y-1 text-gray-400">
                    <li>• PostgreSQL</li>
                    <li>• MongoDB</li>
                    <li>• Supabase</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Frameworks o librerías</h3>
                  <ul className="space-y-1 text-gray-400">
                    <li>• React</li>
                    <li>• Node.js</li>
                    <li>• Express</li>
                    <li>• Tailwind CSS</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">
                    Herramientas de Desarrollo
                  </h3>
                  <ul className="space-y-1 text-gray-400">
                    <li>• Git</li>
                    <li>• GitHub</li>
                    <li>• Vercel</li>
                  </ul>
                </div>
              </div>
            </AnimatedElement>
            <AnimatedElement
              animation="slide-in-right"
              className="relative"
            >
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary/20 via-primary/0 to-primary/20 blur-xl opacity-50" />
              <img
                src="/about-me.webp"
                alt="Sobre mí"
                width={600}
                height={400}
                className="aspect-square rounded-xl object-cover border border-white/10 border-black shadow-lg shadow-gray-900/50"
              />
            </AnimatedElement>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
