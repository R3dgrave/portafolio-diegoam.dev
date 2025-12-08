import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Github,
  ExternalLink,
  Code,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { AnimatedElement } from "../Components/AnimatedElement";
import {
  SiReact,
  SiTailwindcss,
  SiSupabase,
  SiShadcnui,
  SiNodedotjs,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiAstro,
  SiTypescript,
} from "react-icons/si";

const techIcons = {
  React: <SiReact size={20} className="text-blue-300" />,
  Tailwind: <SiTailwindcss size={20} className="text-cyan-500" />,
  Supabase: <SiSupabase size={20} className="text-green-400" />,
  Shadcn: <SiShadcnui size={20} className="text-black dark:text-white" />,
  NodeJS: <SiNodedotjs size={20} className="text-green-600" />,
  ExpressJS: <SiExpress size={20} className="text-black dark:text-white" />,
  Html5: <SiHtml5 size={20} className="text-orange-600 dark:text-orange-600" />,
  Css3: <SiCss3 size={20} className="text-blue-500 dark:text-blue-500" />,
  Javascript: (
    <SiJavascript size={20} className="text-yellow-500 dark:text-yellow-500" />
  ),
  Astro: <SiAstro size={20} className="text-black dark:text-white" />,
  Typescript: (
    <SiTypescript size={20} className="text-blue-500 dark:text-blue-500" />
  ),
};

const allProjects = [
  {
    title: "Dashboard Financiero Personal",
    id: "financial-dashboard",
    description:
      "Un dashboard personal para el seguimiento de finanzas, construido con React y TailwindCSS. Permite registrar ingresos y gastos y gestionar transacciones.",
    image: "/dashboardfinanciero/fd-ui.webp",
    technologies: ["React", "Typescript", "Tailwind", "Shadcn"],
    website: "https://financial-dashboard-swart-one.vercel.app/",
    github: ["https://github.com/R3dgrave/financial-dashboard/"],
  },
  {
    title: "Sistema Médico",
    id: "sistema-medico",
    description:
      "Sistema de gestión integral para consultorios médicos, con un robusto backend y una interfaz de usuario moderna.",
    image: "/sistemamedico/smedico_login_1.webp",
    technologies: ["React", "Typescript", "NodeJS", "ExpressJS", "Tailwind"],
    website: "https://lafleur-sistemamedico-ui.vercel.app/",
    github: [
      "https://github.com/R3dgrave/lafleur-sistemamedico-api",
      "https://github.com/R3dgrave/lafleur-sistemamedico-ui",
    ],
  },
  {
    title: "Tienda Postres",
    id: "bettys-cakes",
    description:
      "Página web responsiva para una pastelería, con un panel de administrador CRUD para gestionar productos y pedidos. Desarrollada con React, Tailwind CSS y Supabase.",
    image: "/tiendapostres/bettys_cake_1.webp",
    technologies: ["React", "Typescript", "Tailwind", "Supabase"],
    website: "https://tiendapostres-ui.vercel.app/",
    github: ["https://github.com/R3dgrave/tiendapostres-ui"],
  },
  {
    title: "Proyecto Conversor de Monedas",
    id: "currency-converter",
    description:
      "Aplicación web que permite convertir entre diferentes monedas utilizando tasas de cambio en tiempo real, graficos usando la libreria chart.js",
    image: "/conversorMoneda/conversor.webp",
    technologies: ["Html5", "Css3", "Javascript"],
    website: "https://r3dgrave.github.io/Conversor-de-monedas-USD-EUR/",
    github: ["https://github.com/R3dgrave/Conversor-de-monedas-USD-EUR"],
  },
  {
    title: "Servicios de Desarrollo web Profesional",
    id: "Development-Services",
    description:
      "Página web promocional para servicios de desarrollo web, destacando habilidades y proyectos anteriores. Construida con Astro y Tailwind CSS.",
    image: "/developmentService/service.webp",
    technologies: ["Astro", "Tailwind", "Typescript"],
    website: "https://redgravecode.vercel.app/",
    github: ["https://github.com/R3dgrave/diegoamcode"],
  },
  {
    title: "Api E-commerce Node.js",
    id: "ecommerceApi",
    description:
      "API RESTful para un sistema de e-commerce, desarrollada con Node.js y Express.js. Incluye funcionalidades para gestionar productos, usuarios y pedidos. Se conecta una base de datos MongoDB para el almacenamiento de datos. Bycript para el hash de contraseñas y JWT para la autenticación. Moongose para interactuar con MongoDB.",
    image: "/landing/api.webp",
    technologies: ["Node.js", "Express.js", "Javascript"],
    website: null,
    github: ["https://github.com/R3dgrave/ecommerce-nodejs"],
  },
  {
    title: "Landing Page",
    id: "landing-page",
    description:
      "Landing page programada con React y Tailwind CSS. Para practicar diseño responsivo y componentes reutilizables.",
    image: "/landing/landing.webp",
    technologies: ["React", "Tailwind", "Javascript"],
    website: "https://r3dgrave.github.io/landingpage-programadorfreelance/",
    github: ["https://github.com/R3dgrave/landingpage-programadorfreelance"],
  },
  {
    title: "Color Aleatorio",
    id: "random-color",
    description:
      "Generador de colores hexadecimales aleatorios. Una sencilla aplicación web para obtener colores al azar, ideal para diseñadores y desarrolladores.",
    image: "/landing/colorhex.webp",
    technologies: ["Html5", "Css3", "Javascript"],
    website: "https://r3dgrave.github.io/ColorHexAleatorios-Javascript/",
    github: ["https://github.com/R3dgrave/ColorHexAleatorios-Javascript"],
  },
  {
    title: "Calculadora",
    id: "calculator",
    description:
      "Calculadora web básica desarrollada con React. Permite realizar operaciones aritméticas simples con una interfaz intuitiva.",
    image: "/landing/calculadora.webp",
    technologies: ["React", "Html5", "Css3", "Javascript"],
    website: "https://r3dgrave.github.io/YourCalculator/",
    github: ["https://github.com/R3dgrave/YourCalculator"],
  },
  {
    title: "Notas Rápidas",
    id: "quick-notes",
    description:
      "Aplicación web para tomar notas rápidas, desarrollada con React. Permite crear, editar y eliminar notas de manera sencilla. Inlcuye un editor de texto enriquecido con Quill.js.",
    image: "/landing/notas.webp",
    technologies: ["React", "Html5", "Css3", "Javascript"],
    website: "https://r3dgrave.github.io/YourNotebook/",
    github: ["https://github.com/R3dgrave/YourNotebook"],
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const INITIAL_COUNT = 6;
  const projectsToShow = showAll
    ? allProjects
    : allProjects.slice(0, INITIAL_COUNT);
  const hasMoreProjects = allProjects.length > INITIAL_COUNT;

  const getRepoLabel = (index, totalRepos) => {
    if (totalRepos === 1) return "Ver Código";
    if (totalRepos === 2) {
      return index === 0 ? "Código Back-end" : "Código Front-end";
    }
    return `Código Repo ${index + 1}`;
  };

  return (
    <section
      id="proyectos"
      title="Proyectos"
      className="w-full max-w-7xl mx-auto flex flex-col justify-center px-4 py-10 "
    >
      <div className="bg-black/10 mx-auto px-4 py-5 rounded-xl">
        <AnimatedElement delay={0} animation="fade-up" className="mb-16">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-4">
            <Code size={20} className="text-primary dark:text-white" />
            Proyectos
          </h2>
          <p className="text-md text-gray-600 dark:text-gray-400">
            Aquí puedes ver algunos de mis proyectos más recientes.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projectsToShow.map((project) => (
            <AnimatedElement animation="fade-up" key={project.id}>
              <div className="rounded-xl overflow-hidden shadow-lg transition-shadow duration-300 bg-white dark:bg-zinc-950 flex flex-col h-full">
                <Link to={`/proyectos/${project.id}`}>
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                </Link>

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
                  <Link
                    to={`/proyectos/${project.id}`}
                    className="flex items-center justify-start pt-2 text-primary dark:text-[#00BAFE] hover:underline text-sm font-medium dark:border-zinc-700 mt-2"
                  >
                    Ver más detalles <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>

                {/* Sección de Botones al final de la tarjeta */}
                <div className="p-6 pt-4 border-t border-gray-200 dark:border-zinc-800 flex flex-col gap-4">
                  {/* Botón para Visitar Sitio Web - Destacado */}
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-semibold text-white bg-[#0a4c91] dark:bg-[#117aa1] rounded-lg hover:bg-opacity-90 transition-opacity"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Visitar Sitio Web
                  </a>

                  {/* Enlaces a Repositorios (GitHub) */}
                  <div className="flex flex-wrap justify-center gap-4">
                    {project.github.map((repo, index) => (
                      <a
                        key={index}
                        href={repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-slate-800 inline-flex items-center text-sm font-medium text-white px-4 py-2 rounded-xl hover:bg-opacity-90 transition-opacity"
                      >
                        <Github size={16} className="mr-1" />
                        {getRepoLabel(index, project.github.length)}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>

        {hasMoreProjects && (
          <AnimatedElement animation="fade-up" className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center px-6 py-3 text-base font-semibold rounded-lg text-white bg-slate-800 hover:bg-slate-700 transition-colors shadow-lg"
            >
              {showAll ? (
                <>
                  Ver Menos <ChevronUp size={20} className="ml-2" />
                </>
              ) : (
                <>
                  Ver Más Proyectos <ChevronDown size={20} className="ml-2" />
                </>
              )}
            </button>
          </AnimatedElement>
        )}
      </div>
    </section>
  );
};

export default Projects;
