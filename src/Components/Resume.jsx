import React from "react";
import { AnimatedElement } from "./AnimatedElement";
import { Briefcase, FileUser } from "lucide-react";
import { GraduationCap } from "lucide-react";

const Resume = () => {
  const experience = [
    {
      id: 1,
      company: "Latam Trade Capital Chile",
      position: "Practicante de Desarrollo y Transformación Digital",
      description:
        "Refactoricé y mantuve componentes críticos en Angular 7, reduciendo errores de UI en un entorno ágil (Bitbucket). Optimicé el rendimiento y resolví bugs de forma autónoma",
      date: "Jun 2024 - Ago 2024",
    },
  ];

  const education = [
    {
      id: 1,
      titulo: "Bootcamp Desarrollador Full Stack JavaScript",
      institucion: "Desafio Latam",
      fecha: "2025 - Actualmente",
      descripcion:
        "Bootcamp enfocado en el desarrollo de aplicaciones web y móviles utilizando tecnologías como React, Node.js, Express, MongoDB, Git y GitHub.",
    },
    {
      id: 2,
      titulo: "Técnico de Nivel Superior Analista Programador",
      institucion: "Centro de Formación Técnica INACAP",
      fecha: "2020 - 2022",
      descripcion:
        "Especialización en desarrollo de software, programación orientada a objetos, bases de datos, redes, etc. Proyectos destacados en tecnologías frontend y experiencia de usuario",
    },
  ];

  return (
    <div
      className="w-full max-w-7xl mx-auto flex flex-col justify-center px-4 py-6 md:py-32"
      id="resumen"
    >
      <div className="flex flex-col lg:flex-row justify-between gap-8 w-full">
        <div className="w-full lg:w-1/2 px-4">
          <AnimatedElement animation="fade-up" className="mx-auto text-center">
            <div className="w-full my-4 flex justify-start items-center">
              <h2 className="text-4xl font-sans font-bold flex items-center gap-4 uppercase">
                <GraduationCap
                  size={40}
                  className="text-primary dark:text-white"
                />
                <span className="dark:text-white text-black text-sm">[</span>{" "}
                Educación{" "}
                <span className="dark:text-white text-black text-sm">]</span>
              </h2>
            </div>
          </AnimatedElement>
          <div className="mx-auto">
            <div className="">
              {education.map((item) => (
                <AnimatedElement animation="fade-up" key={item.id}>
                  <div className="rounded-lg p-6 text-sm">
                    <div className="flex flex-col lg:flex-row md:justify-between mb-2">
                      <h3 className="font-bold text-gray-900 dark:text-white pb-2 lg:pb-0">
                        {item.titulo}
                      </h3>
                      <span className="text-gray-500 dark:text-gray-400 mt-1 md:mt-0">
                        {item.fecha}
                      </span>
                    </div>
                    <h4 className="text-[#0a4c91] dark:text-[#00BAFE] mb-4 font-semibold">
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
        <div className="w-full lg:w-1/2 px-4">
          <AnimatedElement animation="fade-up" className="mx-auto">
            <div className="w-full my-4 flex justify-start items-center">
              <h2 className="text-4xl font-sans font-bold flex items-center gap-4 uppercase">
                <Briefcase size={30} className="text-primary dark:text-white" />
                <span className="dark:text-white text-black text-sm">
                  [
                </span>{" "}
                Experiencia Laboral{" "}
                <span className="dark:text-white text-black text-sm">]</span>
              </h2>
            </div>
          </AnimatedElement>
          <div className="mx-auto">
            <div className="">
              {experience.map((item) => (
                <AnimatedElement animation="fade-up" key={item.id}>
                  <div className="rounded-lg p-6 text-sm">
                    <div className="flex flex-col lg:flex-row md:justify-between mb-2">
                      <h3 className="text-sm font-bold text-gray-900 dark:text-white pb-2 lg:pb-0">
                        {item.position}
                      </h3>
                      <span className="text-gray-500 dark:text-gray-400 text-sm mt-1 md:mt-0">
                        {item.date}
                      </span>
                    </div>
                    <h4 className="text-sm text-[#0a4c91] dark:text-[#00BAFE] mb-2 font-semibold">
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
      </div>
    </div>
  );
};

export default Resume;
