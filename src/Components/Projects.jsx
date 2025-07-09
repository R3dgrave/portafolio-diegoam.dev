import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { AnimatedElement } from "../Components/AnimatedElement";

const Projects = () => {
  const projects = [
    {
      title: "Bettys’ Cakes",
      description:
        "Adaptado a todos los dispositivos. Bettys’ Cakes Página web venta al público postres caseros, panel de administrador CRUD, React, Tailwind, Supabase, adaptado a todos los dispositivos",
      image: "/bettys-cake.webp",
      externalLink: "https://bettys-cake.vercel.app/",
      githubLink: "https://github.com/R3dgrave/bettys_cake",
      technologies: ["React", "Tailwind", "Supabase"],
    },
    {
      title: "YourNotebook",
      description:
        "App de notas creada con React, editor de texto para personalizar las notas, organizar las notas vinculando con etiquetas, adaptado a todos los dispositivos.",
      image: "/YourNotebook.webp",
      externalLink: "https://r3dgrave.github.io/YourNotebook/",
      githubLink: "https://github.com/R3dgrave/YourNotebook",
      technologies: ["React", "Tailwind"],
    },
    {
      title: "Servicios Freelance",
      description:
        "Página desarrollada con React y Tailwind, componentes reutilizables, adaptado a todos los dispositivos",
      image: "/Landing-page.webp",
      externalLink:
        "https://r3dgrave.github.io/landingpage-programadorfreelance/",
      githubLink:
        "https://github.com/R3dgrave/landingpage-programadorfreelance",
      technologies: ["React", "Tailwind"],
    },
    {
      title: "Portafolio v2",
      description:
        "Portafolio web personal con animaciones y diseño responsivo.",
      image: "/PortafolioV2.webp",
      externalLink: "https://r3dgrave.github.io/portafolio_v2/",
      githubLink: "https://github.com/R3dgrave/portafolio_v2",
      technologies: ["React", "Tailwind"],
    },
  ];
  const delay = 0;

  return (
    <>
      <section id="proyectos" title="Proyectos" className="py-20">
        <div className="container">
          <AnimatedElement
            delay={delay}
            animation="fade-up"
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Proyectos</h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-8" />
          </AnimatedElement>
          <div className="w-full mx-auto">
            <div className="mt-0">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <AnimatedElement animation="fade-up" key={index}>
                    <div className="card overflow-hidden group border border-gray-200 rounded-xl flex flex-col h-full transition-all duration-500 hover:shadow-lg hover:-translate-y-2">
                      <div className="relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                          className="object-cover aspect-video w-full h-full transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-105"
                        />
                      </div>
                      <div className="card-body p-4 flex-grow">
                        <div className="flex justify-between items-center gap-4">
                          <h3 className="card-title font-bold text-xl mb-1">
                            {project.title}
                          </h3>
                          <div className="flex flex-row items-center justify-center">
                            <a
                              href={project.githubLink}
                              aria-label="GitHub"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-ghost"
                            >
                              <Github className="h-5 w-5" />
                            </a>
                            <a
                              href={project.externalLink}
                              aria-label="External Link"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-ghost"
                            >
                              <ExternalLink className="h-5 w-5" />
                            </a>
                          </div>
                        </div>
                        <p className="card-description text-muted text-sm mb-2">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="text-xs bg-primary-light text-primary px-2 py-1 rounded-full-custom"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </AnimatedElement>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
