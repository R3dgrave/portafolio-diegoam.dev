// src/Components/Experience.jsx
import React from "react";
import { AnimatedElement } from "./AnimatedElement";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experience = [
    {
      id: 1,
      company: "Latam Trade Capital Chile",
      position: "Practica Profesional",
      description:
        "Contribuí de manera efectiva con el equipo de soporte TI atiendo tickets con el sistema Jira, mis tareas eran atender consultas y ofrecer soluciones en temas relacionados con la informática de manera remota o en campo. También contribuí con el equipo de desarrolladores de la empresa usando tecnologías como Angular, TypeScript, Bootstrap donde implementé mejoras en la interfaz, añadí funcionalidades como un editor de texto en la sección de notas al registrar una operación de un cliente, etc.",
      date: "Jun 2024 - Ago 2024",
    },
    {
      id: 2,
      company: "Independiente",
      position: "Tecnico en Computadoras",
      description:
        "Servicio de reparación y armado de computadoras",
      date: "Enero 2022 - Actualmente...",
    },
  ];

  return (
    <>
      <section id="experiencia" className="py-20 bg-white dark:bg-zinc-900 dark:text-white transition-colors">
        <div className="container mx-auto px-4">
          <AnimatedElement animation="fade-up" className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 flex justify-center items-center gap-4">
              <Briefcase size={32} className="text-primary dark:text-white" />
              Experiencia Laboral
            </h2>
            <div className="h-1 w-20 bg-black dark:bg-white mx-auto mb-8" />
          </AnimatedElement>
          <div className="max-w-3xl mx-auto">
            <div className="relative border-l-2 border-gray-200 dark:border-zinc-700 pl-8 ml-4">
              {experience.map((item) => (
                <AnimatedElement animation="fade-up" key={item.id} className="mb-12 relative">
                  <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-primary dark:bg-white border-2 border-white dark:border-zinc-900 flex items-center justify-center -translate-x-1/2">
                    <Briefcase size={16} className="text-white dark:text-zinc-900" />
                  </div>
                  <div className="bg-white dark:bg-zinc-950 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row md:justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.position}</h3>
                      <span className="text-gray-500 dark:text-gray-400 text-sm mt-1 md:mt-0">{item.date}</span>
                    </div>
                    <h4 className="text-primary dark:text-blue-300 mb-4 font-semibold">{item.company}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;