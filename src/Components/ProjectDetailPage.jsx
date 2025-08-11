import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiSequelize,
  SiSupabase,
  SiShadcnui,
} from "react-icons/si";
import { projectsData } from "./ProjectsData";

const techIcons = {
  React: <SiReact size={20} className="text-blue-500" />,
  Tailwind: <SiTailwindcss size={20} className="text-cyan-500" />,
  NodeJS: <SiNodedotjs size={20} className="text-green-600" />,
  ExpressJS: <SiExpress size={20} className="text-black dark:text-white" />,
  PostgreSQL: <SiPostgresql size={20} className="text-blue-500" />,
  Sequelize: <SiSequelize size={20} className="text-blue-400" />,
  Supabase: <SiSupabase size={20} className="text-green-400" />,
  Shadcn: <SiShadcnui size={20} className="text-white" />,
};

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const project = projectsData[projectId];
  const [activeSection, setActiveSection] = useState(
    project?.sections[0].id || ""
  );
  const titleRef = useRef(null);

  // useEffect para detectar la sección activa basada en el scroll
  useEffect(() => {
    const handleScroll = () => {
      let currentActive = "";
      for (let i = project.sections.length - 1; i >= 0; i--) {
        const section = project.sections[i];
        const element = document.getElementById(section.id);
        if (
          element &&
          element.getBoundingClientRect().top <= window.innerHeight / 2
        ) {
          currentActive = section.id;
          break;
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [project.sections]);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold">Proyecto no encontrado.</h2>
      </div>
    );
  }

  const sections = project.sections;
  const content = project.content;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      ref={titleRef}
      id={project.sections[0].id}
      className="flex flex-col lg:flex-row min-h-screen dark:bg-zinc-900 dark:text-white transition-colors pt-24 lg:pt-16"
    >
      <aside className="w-full lg:w-1/4 xl:w-[20%] 2xl:w-[15%] bg-gray-100 dark:bg-zinc-800 lg:fixed lg:h-screen lg:overflow-y-auto p-6 border-r border-gray-200 dark:border-zinc-700">
        <Link
          to="/"
          className="flex items-center text-[#0a4c91] dark:text-[#00BAFE] hover:underline mb-6 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Volver a Proyectos
        </Link>
        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2">Enlaces</h3>
          <div className="flex flex-col gap-2">
            <a
              href={project.externalLink}
              aria-label="demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300 bg-[#0a4c91] hover:bg-[#083a73] dark:bg-[#00BAFE] dark:hover:bg-[#009bd5]"
            >
              Demo <ExternalLink className="ml-2 h-5 w-5" />
            </a>

            {project.githubLink.map((link, index) => (
              <a
                key={index}
                href={link.enlace}
                aria-label="demo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-zinc-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >
                {link.name}
                <Github className="ml-2 h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2">Tecnologías</h3>
          <div className="flex flex-wrap gap-2">
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
      </aside>

      <main
        id={project.sections[0].id}
        className="w-full lg:w-1/2 xl:w-[60%] lg:ml-[25%] xl:ml-[20%] lg:mr-[25%] xl:mr-[20%] p-6 md:p-10"
      >
        <div className="mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {project.description}
          </p>
        </div>
        <hr className="my-8 border-gray-200 dark:border-zinc-700" />
        {sections.map((section) => (
          <motion.div
            key={section.id}
            id={section.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
            <div className="prose dark:prose-invert max-w-none">
              {content[section.id]}
            </div>
          </motion.div>
        ))}
      </main>

      <aside className="w-full lg:w-1/4 xl:w-[20%] 2xl:w-[15%] bg-gray-100 dark:bg-zinc-800 lg:fixed lg:right-0 lg:h-screen lg:overflow-y-auto p-6 border-l border-gray-200 dark:border-zinc-700">
        <h3 className="text-lg font-bold mb-4">Contenido</h3>
        <nav>
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveSection(section.id);
                    document
                      .getElementById(section.id)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`block px-4 py-2 rounded-lg transition-colors ${
                    activeSection === section.id
                      ? "bg-[#0a4c91] dark:bg-[#00BAFE] text-white shadow-md"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-700"
                  }`}
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </motion.div>
  );
};

export default ProjectDetailPage;
