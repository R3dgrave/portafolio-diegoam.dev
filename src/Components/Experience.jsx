import React from "react";
import { AnimatedElement } from "./AnimatedElement";

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
      <section id="experiencia" className="py-20">
        <div className="container">
          <AnimatedElement animation="fade-up" className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Experiencia Laboral</h2>
            <div className="h-1 w-20 bg-black dark:bg-white mx-auto mb-8" />
          </AnimatedElement>
          <div className="max-w-3xl mx-auto">
            <div className="relative border-l border-muted pl-8 ml-4">
              {experience.map((item, index) => (
                <AnimatedElement animation="fade-up" key={item.id} className="mb-12 relative">
                  <div className="absolute -left-12 top-0 w-8 h-8 rounded-full-custom bg-primary dark:bg-white flex items-center justify-center">
                    <span className="text-white dark:text-black font-medium">
                      {index + 1}
                    </span>
                  </div>
                  <div className="bg-card rounded-lg p-6 shadow-custom">
                    <div className="flex flex-wrap justify-between mb-2">
                      <h3 className="text-xl font-bold">{item.position}</h3>
                      <span className="text-muted">{item.date}</span>
                    </div>
                    <h4 className="text-primary mb-4">{item.company}</h4>
                    <p className="text-muted">{item.description}</p>
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
