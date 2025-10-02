// src/Components/Education.jsx
import React from "react";
import { AnimatedElement } from "./AnimatedElement";
import { GraduationCap } from "lucide-react";

const Education = () => {
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
    <>
      <section id="educacion" className="py-20 bg-gray-100 dark:bg-zinc-950 dark:text-white transition-colors">
        <div className="container mx-auto px-4">
          <AnimatedElement
            animation="fade-up"
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 flex justify-center items-center gap-4">
              <GraduationCap size={32} className="text-primary dark:text-white" />
              Educación
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-8" />
          </AnimatedElement>
          <div className="max-w-3xl mx-auto">
            <div className="relative border-l-2 border-gray-200 dark:border-zinc-700 pl-8 ml-4">
              {education.map((item) => (
                <AnimatedElement
                  animation="fade-up"
                  key={item.id}
                  className="mb-12 relative"
                >
                  <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-primary dark:bg-white border-2 border-white dark:border-zinc-950 flex items-center justify-center -translate-x-1/2">
                    <GraduationCap size={16} className="text-white dark:text-zinc-950" />
                  </div>
                  <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row md:justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.titulo}</h3>
                      <span className="text-gray-500 dark:text-gray-400 text-sm mt-1 md:mt-0">{item.fecha}</span>
                    </div>
                    <h4 className="text-primary dark:text-blue-300 mb-4 font-semibold">{item.institucion}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{item.descripcion}</p>
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

export default Education;