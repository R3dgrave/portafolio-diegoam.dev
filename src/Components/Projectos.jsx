import React, { useState } from "react";
import { AnimatedElement } from "./AnimatedElement";
import {
  Code,
  ExternalLink,
  Github,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
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

const allProjects = [
  {
    title: "Dashboard Financiero Personal",
    id: "financial-dashboard",
    description:
      "Este proyecto es un dashboard financiero personal desarrollado para ayudarte a controlar y visualizar tus finanzas de manera sencilla e intuitiva. Permite a los usuarios registrar ingresos y gastos, obteniendo una visión clara de su situación financiera a través de resúmenes y gráficos. La aplicación es ideal para cualquiera que quiera tomar el control de su presupuesto personal.",
    image: "/dashboardfinanciero/fd-ui.webp",
    technologies: ["React", "Typescript", "Tailwind", "Shadcn"],
    website: "https://financial-dashboard-swart-one.vercel.app/",
    github: ["https://github.com/R3dgrave/financial-dashboard/"],
  },
  {
    title: "Sistema Médico",
    id: "sistema-medico",
    description:
      "Desarrollé una solución full-stack para digitalizar la gestión de consultorios médicos, abordando las ineficiencias de los procesos manuales. El proyecto se centra en la optimización de la administración de pacientes, citas y, especialmente, en la creación de una robusta Historia Clínica Electrónica (HCE).",
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
      "Este es un proyecto de demostración para una pastelería, sin carrito de compras ya que la idea es que las ventas se realicen previa coordinacion por WhatsApp, entonces la pagina funcionaria mas como un catalogo para mostar los postres al publico. La aplicación es completamente responsiva y cuenta con un panel de administración para gestionar productos.",
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
    title: "Api E-commerce Node.js",
    id: "ecommerceApi",
    description:
      "API RESTful para un sistema de e-commerce, desarrollada con Node.js y Express.js. Incluye funcionalidades para gestionar productos, usuarios y pedidos. Se conecta una base de datos MongoDB para el almacenamiento de datos. Bycript para el hash de contraseñas y JWT para la autenticación. Moongose para interactuar con MongoDB.",
    image: "/landing/api.webp",
    technologies: ["NodeJS", "ExpressJS", "Javascript"],
    website: null,
    github: ["https://github.com/R3dgrave/ecommerce-nodejs"],
  },
];

const techIcons = {
  React: <SiReact size={30} className="text-blue-300" />,
  Tailwind: <SiTailwindcss size={30} className="text-cyan-500" />,
  Supabase: <SiSupabase size={30} className="text-green-400" />,
  Shadcn: <SiShadcnui size={30} className="text-black dark:text-white" />,
  NodeJS: <SiNodedotjs size={30} className="text-green-600" />,
  ExpressJS: <SiExpress size={30} className="text-black dark:text-white" />,
  Html5: <SiHtml5 size={30} className="text-orange-600 dark:text-orange-600" />,
  Css3: <SiCss3 size={30} className="text-blue-500 dark:text-blue-500" />,
  Javascript: (
    <SiJavascript size={30} className="text-yellow-500 dark:text-yellow-500" />
  ),
  Astro: <SiAstro size={30} className="text-black dark:text-white" />,
  Typescript: (
    <SiTypescript size={30} className="text-blue-500 dark:text-blue-500" />
  ),
};

const Projectos = () => {
  const [showAll, setShowAll] = useState(false);
  const INITIAL_COUNT = 3;
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
    <section className="w-full max-w-7xl mx-auto py-6 md:py-10">
      <div className="flex flex-col justify-start items-start px-4 md:py-0 py-5 rounded-xl">
        <AnimatedElement delay={0} animation="fade-up">
          <div className="w-full my-4 flex justify-start pb-8">
            <h2 className="text-4xl font-bold flex items-center gap-4 uppercase font-sans">
              <Code size={30} className="text-primary dark:text-white" />
              <span className="dark:text-white text-black text-sm">[</span>{" "}
              Proyectos{" "}
              <span className="dark:text-white text-black text-sm">]</span>
            </h2>
          </div>
        </AnimatedElement>
        <div className="flex flex-col items-end">
          {projectsToShow.map((project) => (
            <AnimatedElement animation="fade-up" key={project.id}>
              <div
                key={project.id}
                className="w-full flex flex-col md:flex-row md:p-0 rounded-xl border dark:border-white mb-8 gap-2 shadow-lg"
              >
                <div className="w-full md:w-1/2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full aspect-video object-cover md:rounded-tl-xl md:rounded-bl-xl"
                  />
                </div>

                <div className="w-full md:w-1/2 pr-5 py-5 flex flex-col justify-between p-2">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h2>

                    {/* Tecnologías */}
                    <div className="flex flex-wrap mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1"
                          title={tech}
                        >
                          {techIcons[tech] || null}
                        </span>
                      ))}
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Links */}
                  <div className="flex flex-col xl:flex-row items-end gap-4 mt-4">
                    {project.website && (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn bg-[#0a4c91] dark:bg-[#00BAFE] text-white group flex items-center border-none"
                      >
                        <ExternalLink
                          size={18}
                          className="text-white h-4 w-4 transition-custom group-hover:-translate-y-1"
                        />
                        Demo
                      </a>
                    )}
                    <div className="flex flex-row gap-2">
                      {/* Repositorios (frontend / backend) */}
                      {project.github.map((repo, index) => (
                        <a
                          key={index}
                          href={repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-ghost border border-gray-400 dark:border-gray-600 group flex items-center text-black dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors"
                        >
                          <Github size={18} />
                          {getRepoLabel(index, project.github.length)}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          ))}

          {hasMoreProjects && (
            <AnimatedElement animation="fade-up" className="text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="btn btn-wide px-6 bg-[#0a4c91] dark:bg-[#00BAFE] text-white group flex items-center border-none"
              >
                {showAll ? (
                  <>
                    Ver Menos <ChevronUp size={20} className="text-white h-4 w-4 transition-custom group-hover:-translate-y-1" />
                  </>
                ) : (
                  <>
                    Ver Más Proyectos <ChevronDown size={20} className="text-white h-4 w-4 transition-custom group-hover:-translate-y-1" />
                  </>
                )}
              </button>
            </AnimatedElement>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projectos;
