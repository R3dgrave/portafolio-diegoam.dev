// src/Components/Projects.jsx
import React, { useState, useEffect } from "react";
import { Github, ExternalLink, X } from "lucide-react";
import { AnimatedElement } from "../Components/AnimatedElement";
import { motion, AnimatePresence } from "framer-motion";
import { SiReact, SiTailwindcss, SiSupabase, SiShadcnui } from "react-icons/si";

const projects = [
  {
    title: "Bettys Cakes",
    id: "bettys-cakes",
    description:
      "Página web responsiva para una pastelería, con un panel de administrador CRUD para gestionar productos y pedidos. Desarrollada con React, Tailwind CSS y Supabase.",
    longDescription:
      "Este proyecto es una aplicación web completa para un negocio de postres caseros. Implementé un panel de administración robusto que permite al cliente realizar operaciones CRUD (Crear, Leer, Actualizar, Borrar) para manejar su catálogo de productos. La aplicación está construida con React para una interfaz de usuario dinámica, Tailwind CSS para un diseño moderno y totalmente responsivo, y Supabase como backend-as-a-service para la gestión de la base de datos y la autenticación de usuarios. El resultado es una experiencia de usuario fluida tanto para clientes como para administradores, optimizada para cualquier dispositivo.",
    image: "/bettys_cake_1.png",
    demoGif: "/bettyscakesgif.gif",
    gallery: ["/bettys_cake_2.png", "/bettys_cake_3.png"],
    externalLink: "https://bettys-cake.vercel.app/",
    githubLink: "https://github.com/R3dgrave/bettys_cake",
    technologies: ["React", "Tailwind", "Supabase"],
  },
  {
    title: "Dashboard Financiero Personal",
    id: "financial-dashboard",
    description:
      "Un dashboard personal para el seguimiento de finanzas, construido con React y TailwindCSS. Permite registrar ingresos y gastos, visualizar datos en gráficos y gestionar transacciones localmente con LocalStorage.",
    longDescription:
      "Desarrollé este dashboard financiero para que los usuarios puedan gestionar sus finanzas personales de manera intuitiva. La aplicación permite ingresar y categorizar transacciones de gastos e ingresos, y genera automáticamente gráficos para visualizar el comportamiento financiero. Los datos se almacenan en el navegador del usuario utilizando LocalStorage, lo que garantiza la privacidad y la persistencia de la información sin necesidad de un backend. El proyecto utiliza un stack tecnológico moderno, incluyendo React, TailwindCSS para los estilos, y Shadcn para componentes de UI de alta calidad.",
    image: "/Finantial-Dashboard.webp",
    demoGif: "/finantial-dashboard-gif1.gif",
    gallery: ["/Finantial-Dashboard.webp"],
    externalLink: "https://financial-dashboard-swart-one.vercel.app/",
    githubLink: "https://github.com/R3dgrave/financial-dashboard/",
    technologies: ["React", "Tailwind", "Shadcn"],
  },
  {
    title: "YourNotebook",
    id: "yournotebook",
    description:
      "Aplicación de notas responsiva con editor de texto enriquecido y organización por etiquetas. Creada con React y Tailwind.",
    longDescription:
      "Esta aplicación es un cuaderno digital para tomar y organizar notas de forma eficiente. Fue desarrollada con React para una experiencia de usuario fluida y reactiva. Incluye un editor de texto que permite a los usuarios personalizar sus notas con diferentes formatos. Una de sus funcionalidades clave es la capacidad de organizar las notas mediante etiquetas, facilitando la búsqueda y gestión del contenido. El diseño es completamente adaptable, proporcionando una experiencia consistente en dispositivos de escritorio, tabletas y móviles.",
    image: "/YourNotebook.webp",
    externalLink: "https://r3dgrave.github.io/YourNotebook/",
    githubLink: "https://github.com/R3dgrave/YourNotebook",
    technologies: ["React", "Tailwind"],
  },
];

// Mapeo de nombres de tecnologías a componentes de iconos
const techIcons = {
  React: <SiReact size={20} className="text-blue-500" />,
  Tailwind: <SiTailwindcss size={20} className="text-cyan-500" />,
  Supabase: <SiSupabase size={20} className="text-green-400" />,
  Shadcn: <SiShadcnui size={20} className="text-black dark:text-white" />,
};

// Componente Modal que se mostrará al hacer clic en un proyecto
const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 overflow-y-auto transition-opacity h-[100dvh]"
        >
          <motion.div
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 50 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-white dark:bg-zinc-900 rounded-lg shadow-xl p-6 md:p-8 transform transition-transform"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                {project.demoGif && (
                  <img
                    src={project.demoGif}
                    alt={project.title}
                    className="w-full h-auto rounded-lg mb-4"
                  />
                )}
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.longDescription}
                </p>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Tecnologías
                </h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 dark:bg-zinc-700 text-gray-900 dark:text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2"
                    >
                      {techIcons[tech] || null} {/* Muestra el icono */}
                      {tech} {/* Muestra el nombre de la tecnología */}
                    </span>
                  ))}
                </div>
                <div className="flex flex-row gap-2 mt-4 justify-start">
                  <a
                    href={project.externalLink}
                    aria-label="demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary inline-flex items-center px-4 py-2"
                  >
                    Demo <ExternalLink className="ml-2 h-5 w-5" />
                  </a>
                  <a
                    href={project.githubLink}
                    aria-label="repositorio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-neutral inline-flex items-center rounded-lg px-4 py-2 transition-colors duration-200"
                  >
                    Repositorio <Github className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="md:w-1/2">
                {project.gallery && project.gallery.length > 0 && (
                  <>
                    <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                      Galería
                    </h4>
                    <div className="grid grid-cols-1 gap-4">
                      {project.gallery.map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          alt={`${project.title} - imagen ${index + 1}`}
                          className="w-full h-auto rounded-lg shadow-md"
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section
        id="proyectos"
        title="Proyectos"
        className="py-20 dark:bg-zinc-900 dark:text-white transition-colors"
      >
        <div className="container mx-auto px-4">
          <AnimatedElement
            delay={0}
            animation="fade-up"
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Proyectos</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Aquí puedes ver algunos de mis trabajos más recientes.
            </p>
          </AnimatedElement>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <AnimatedElement animation="fade-up" key={project.id}>
                <div
                  onClick={() => setSelectedProject(project)}
                  className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-zinc-700 cursor-pointer group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white dark:bg-zinc-800 flex flex-col h-full"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {project.description}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      Ver Detalles
                    </span>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};

export default Projects;
