import React from "react";
import { AnimatedElement } from "./AnimatedElement";
import { Briefcase, FileUser } from "lucide-react";
import { GraduationCap } from "lucide-react";

const Resume = () => {
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

  const education = [
    {
      id: 1,
      titulo: "Técnico de Nivel Superior Analista Programador",
      institucion: "Centro de Formación Técnica INACAP",
      fecha: "2020 - 2022",
      descripcion:
        "Especialización en desarrollo de software, programación orientada a objetos, bases de datos, redes, etc. Proyectosdestacados en tecnologías frontend y experiencia de usuario",
    },
    {
      id: 2,
      titulo: "Bootcamp Desarrollador Full Stack JavaScript",
      institucion: "Desafio Latam",
      fecha: "2025 - Actualmente",
      descripcion:
        "Bootcamp enfocado en el desarrollo de aplicaciones web y móviles utilizando tecnologías como React, Node.js, Express, MongoDB, Git y GitHub.",
    },
  ];

  return (
    // Contenedor principal: Se utiliza 'flex-col' para que los hijos se apilen verticalmente.
    // Esto asegura que el título "Resumen" quede primero, seguido por las dos secciones.
    <div
      className="w-full max-w-7xl mx-auto flex flex-col justify-center py-10 px-4 md:py-20 md:px-10 gap-10"
      id="resumen"
    >
      <AnimatedElement
        animation="fade-up"
        // Centramos el título en el ancho del contenedor principal
        className="text-center w-full mb-8 md:mb-12 flex flex-col items-center"
      >
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-4">
          <FileUser size={32} className="text-primary dark:text-white" />
          Resumen
        </h2>
        <div className="h-1 w-20 bg-black dark:bg-white mb-8" />
      </AnimatedElement>

      {/* CONTENEDOR DE EXPERIENCIA Y EDUCACIÓN (Doble columna en MD+) */}
      <div className="flex flex-col lg:flex-row gap-10 w-full">
        {/* SECCIÓN EXPERIENCIA */}
        <section className="flex-1 bg-white dark:bg-zinc-900 dark:text-white transition-colors">
          <div className="container mx-auto">
            {/* Título de Experiencia */}
            <AnimatedElement
              animation="fade-up"
              className="text-left mb-8 md:mb-16"
            >
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-4">
                <Briefcase size={32} className="text-primary dark:text-white" />
                Experiencia Laboral
              </h2>
              {/* Barra separadora */}
              <div className="h-1 w-20 bg-black dark:bg-white mb-8" />
            </AnimatedElement>

            {/* Timeline de Experiencia */}
            <div className="mx-auto">
              <div className="relative border-l-2 border-gray-200 dark:border-zinc-700 pl-8 ml-4">
                {experience.map((item) => (
                  <AnimatedElement
                    animation="fade-up"
                    key={item.id}
                    className="mb-12 relative min-h-fit"
                  >
                    <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-primary dark:bg-white border-2 border-white dark:border-zinc-900 flex items-center justify-center -translate-x-1/2">
                      <Briefcase
                        size={16}
                        className="text-white dark:text-zinc-900"
                      />
                    </div>
                    <div className="p-0">
                      <div className="flex flex-col md:flex-row md:justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {item.position}
                        </h3>
                        <span className="text-gray-500 dark:text-gray-400 text-sm mt-1 md:mt-0 whitespace-nowrap">
                          {item.date}
                        </span>
                      </div>
                      <h4 className="text-primary dark:text-blue-300 mb-4 font-semibold">
                        {item.company}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </AnimatedElement>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN EDUCACIÓN */}
        <section className="flex-1 dark:text-white transition-colors">
          <div className="container mx-auto">
            {/* Título de Educación */}
            <AnimatedElement
              animation="fade-up"
              className="text-left mb-8 md:mb-16"
            >
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-4">
                <GraduationCap
                  size={32}
                  className="text-primary dark:text-white"
                />
                Educación
              </h2>
              {/* Barra separadora */}
              <div className="h-1 w-20 bg-primary mb-8" />
            </AnimatedElement>

            {/* Timeline de Educación */}
            <div className="mx-auto">
              <div className="relative border-l-2 border-gray-200 dark:border-zinc-700 pl-8 ml-4">
                {education.map((item) => (
                  <AnimatedElement
                    animation="fade-up"
                    key={item.id}
                    className="mb-12 relative min-h-fit"
                  >
                    <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-primary dark:bg-white border-2 border-white dark:border-zinc-950 flex items-center justify-center -translate-x-1/2">
                      <GraduationCap
                        size={16}
                        className="text-white dark:text-zinc-950"
                      />
                    </div>
                    <div className="p-0">
                      <div className="flex flex-col md:flex-row md:justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {item.titulo}
                        </h3>
                        <span className="text-gray-500 dark:text-gray-400 text-sm mt-1 md:mt-0 whitespace-nowrap">
                          {item.fecha}
                        </span>
                      </div>
                      <h4 className="text-primary dark:text-blue-300 mb-4 font-semibold">
                        {item.institucion}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.descripcion}
                      </p>
                    </div>
                  </AnimatedElement>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
