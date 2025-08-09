import React from "react";
import { Link } from "react-router-dom"; // Importamos Link
import { Github, ExternalLink, Code, ArrowRight } from "lucide-react"; 
import { AnimatedElement } from "../Components/AnimatedElement";
import { SiReact, SiTailwindcss, SiSupabase, SiShadcnui, SiNodedotjs, SiExpress } from "react-icons/si";

// Define un nuevo icono para Node.js y Express
const techIcons = {
  React: <SiReact size={20} className="text-blue-500" />,
  Tailwind: <SiTailwindcss size={20} className="text-cyan-500" />,
  Supabase: <SiSupabase size={20} className="text-green-400" />,
  Shadcn: <SiShadcnui size={20} className="text-black dark:text-white" />,
  NodeJS: <SiNodedotjs size={20} className="text-green-600" />,
  ExpressJS: <SiExpress size={20} className="text-black dark:text-white" />,
};

const projects = [
  {
    title: "Bettys Cakes",
    id: "bettys-cakes",
    description:
      "Página web responsiva para una pastelería, con un panel de administrador CRUD para gestionar productos y pedidos. Desarrollada con React, Tailwind CSS y Supabase.",
    image: "/bettys_cake_1.png",
    technologies: ["React", "Tailwind", "Supabase"],
  },
  {
    title: "Dashboard Financiero Personal",
    id: "financial-dashboard",
    description:
      "Un dashboard personal para el seguimiento de finanzas, construido con React y TailwindCSS. Permite registrar ingresos y gastos y gestionar transacciones.",
    image: "/Finantial-Dashboard.webp",
    technologies: ["React", "Tailwind", "Shadcn"],
  },
  {
    title: "Sistema Médico",
    id: "sistema-medico", // Nuevo ID para el proyecto
    description:
      "Sistema de gestión integral para consultorios médicos, con un robusto backend y una interfaz de usuario moderna.",
    image: "/Medical-System.webp", // Agrega una imagen para la card
    technologies: ["React", "NodeJS", "ExpressJS", "Tailwind"],
  },
];

const Projects = () => {
  return (
    <section id="proyectos" title="Proyectos" className="py-20 dark:bg-zinc-900 dark:text-white transition-colors">
      <div className="container mx-auto px-4">
        <AnimatedElement delay={0} animation="fade-up" className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 flex justify-center items-center gap-4">
            <Code size={32} className="text-primary dark:text-white" />
            Proyectos
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8" />
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Aquí puedes ver algunos de mis trabajos más recientes.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <AnimatedElement animation="fade-up" key={project.id}>
              <Link to={`/proyectos/${project.id}`}>
                <div
                  className="relative rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white dark:bg-zinc-950 flex flex-col h-full cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Overlay con el aviso "Ver detalles" */}
                  <div className="absolute inset-0 bg-[#0a4c91]/80 dark:bg-[#00BAFE]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-lg font-semibold flex items-center gap-2">
                      Ver detalles <ArrowRight size={20} />
                    </span>
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gray-200 dark:bg-zinc-700 text-gray-900 dark:text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2"
                        >
                          {techIcons[tech] || null}
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;