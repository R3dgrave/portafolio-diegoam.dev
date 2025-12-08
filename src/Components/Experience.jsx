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
      description: "Servicio de reparación y armado de computadoras",
      date: "Enero 2022 - Actualmente...",
    },
  ];

  return (
    <>
      <section
        id="experiencia"
        className="py-20 bg-white dark:bg-zinc-900 dark:text-white transition-colors"
      >
        <div className="container mx-auto px-4">
          <AnimatedElement
            animation="fade-up"
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-md font-bold mb-4 flex justify-start items-center gap-4">
              <Briefcase size={16} className="text-primary dark:text-white" />
              Experiencia Laboral
            </h2>
          </AnimatedElement>
          <div className="max-w-xl mx-auto">
            <div className="relative border-gray-200 dark:border-zinc-700">
              {experience.map((item) => (
                <AnimatedElement
                  animation="fade-up"
                  key={item.id}
                  className="mb-4 relative"
                >
                  <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row md:justify-between mb-2">
                      <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                        {item.position}
                      </h3>
                      <span className="text-gray-500 dark:text-gray-400 text-sm mt-1 md:mt-0">
                        {item.date}
                      </span>
                    </div>
                    <h4 className="text-primary text-sm dark:text-blue-300 mb-4 font-semibold">
                      {item.company}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {item.description}
                    </p>
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
