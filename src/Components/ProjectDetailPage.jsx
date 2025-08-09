import React, { useState, useEffect } from "react";
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
import CodeHighlight from "./CodeHighlight";

// Datos de los proyectos para la página de detalles
const projectsData = {
  "bettys-cakes": {
    title: "Bettys Cakes",
    description:
      "Una descripción larga y detallada del proyecto Bettys Cakes...",
    technologies: ["React", "Tailwind", "Supabase"],
    externalLink: "https://bettys-cake.vercel.app/",
    githubLink: "https://github.com/R3dgrave/bettys_cake",
    sections: [
      { id: "overview", title: "Visión General" },
      { id: "features", title: "Funcionalidades Clave" },
      { id: "tech-stack", title: "Tecnologías" },
    ],
    content: {
      overview: (
        <div>
          <p>
            Este es un proyecto de demostración para una pastelería. La
            aplicación es completamente responsiva y cuenta con un panel de
            administración para gestionar productos y pedidos.
          </p>
        </div>
      ),
      features: (
        <div>
          <ul className="list-disc list-inside">
            <li>Panel de administración CRUD.</li>
            <li>Carrito de compras.</li>
            <li>Autenticación de usuarios con Supabase.</li>
          </ul>
        </div>
      ),
      "tech-stack": (
        <div>
          <p>
            El proyecto fue desarrollado con **React** para el frontend,
            **Tailwind CSS** para los estilos y **Supabase** como
            backend-as-a-service, que maneja la base de datos y la
            autenticación.
          </p>
        </div>
      ),
    },
  },
  "financial-dashboard": {
    title: "Dashboard Financiero Personal",
    description:
      "Este proyecto es un dashboard financiero personal desarrollado para ayudarte a controlar y visualizar tus finanzas de manera sencilla e intuitiva. Permite a los usuarios registrar ingresos y gastos, obteniendo una visión clara de su situación financiera a través de resúmenes y gráficos. La aplicación es ideal para cualquiera que quiera tomar el control de su presupuesto personal.",
    technologies: ["React", "Tailwind", "Shadcn"],
    externalLink: "https://financial-dashboard-swart-one.vercel.app/",
    githubLink: "https://github.com/R3dgrave/financial-dashboard/",
    sections: [
      { id: "overview", title: "Visión General" },
      { id: "features", title: "Funcionalidades Clave" },
      { id: "tech-stack", title: "Tecnologías y Arquitectura" },
      { id: "learning", title: "Aprendizajes y Desafíos" },
    ],
    content: {
      overview: (
        <div>
          <p>
            Este proyecto es un dashboard financiero personal desarrollado para
            ayudarte a controlar y visualizar tus finanzas de manera sencilla e
            intuitiva. Permite a los usuarios registrar ingresos y gastos,
            obteniendo una visión clara de su situación financiera a través de
            resúmenes y gráficos. La aplicación es ideal para cualquiera que
            quiera tomar el control de su presupuesto personal.
          </p>
        </div>
      ),
      // Se ha modificado la sección de características para usar tarjetas con bordes
      features: (
        <div className="space-y-6">
          {/* Tarjeta de Registro de Transacciones */}
          <div className="bg-gray-100 dark:bg-[#1E293B] p-6 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm transition-colors">
            <span className="text-xl font-bold text-[#0a4c91] dark:text-[#00BAFE]">
              Registro de Transacciones
            </span>
            <p className="pt-4 text-gray-700 dark:text-gray-300">
              Una interfaz simple para agregar nuevos ingresos y gastos con
              detalles como tipo, categoría, monto, fecha y descripción.
            </p>
            <div className="my-4 flex justify-center">
              <img
                src="/fd-agregar-transaccion.jpg"
                alt="Captura de pantalla de la interfaz de registro de transacciones"
                className="w-[70%] rounded-lg shadow-md"
              />
            </div>
          </div>
          {/* Tarjeta de Resumen Financiero */}
          <div className="bg-gray-100 dark:bg-[#1E293B] p-6 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm transition-colors">
            <span className="text-xl font-bold text-[#0a4c91] dark:text-[#00BAFE]">
              Resumen Financiero
            </span>
            <p className="pt-4 text-gray-700 dark:text-gray-300">
              Visualización en tiempo real del balance total, ingresos y
              gastos totales.
            </p>
            <div className="my-4 flex justify-center">
              <img
                src="/fd-resumen.jpg"
                alt="Resumen financiero"
                className="w-[100%] rounded-lg shadow-md"
              />
            </div>
          </div>
          {/* Tarjeta de Análisis de Gastos por Categoría */}
          <div className="bg-gray-100 dark:bg-[#1E293B] p-6 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm transition-colors">
            <span className="text-xl font-bold text-[#0a4c91] dark:text-[#00BAFE]">
              Análisis de Gastos por Categoría
            </span>
            <p className="pt-4 text-gray-700 dark:text-gray-300">
              Un gráfico de pastel (<CodeHighlight>PieChart</CodeHighlight> de
              Recharts) que muestra la distribución de los gastos por
              categoría, lo que facilita identificar en qué áreas se está
              gastando más.
            </p>
            <div className="my-4 flex justify-center">
              <img
                src="/fd-pie.jpg"
                alt="Gráfico de pastel mostrando el análisis de gastos"
                className="w-[70%] rounded-lg shadow-md"
              />
            </div>
          </div>
          {/* Tarjeta de Historial de Transacciones */}
          <div className="bg-gray-100 dark:bg-[#1E293B] p-6 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm transition-colors">
            <span className="text-xl font-bold text-[#0a4c91] dark:text-[#00BAFE]">
              Historial de Transacciones
            </span>
            <p className="pt-4 text-gray-700 dark:text-gray-300">
              Una tabla con todas las transacciones registradas, con opciones
              para eliminarlas.
            </p>
            <div className="my-4 flex justify-center">
              <img
                src="/fd-historial.jpg"
                alt="Tabla de historial de transacciones"
                className="w-[100%] rounded-lg shadow-md"
              />
            </div>
          </div>
          {/* Tarjeta de Persistencia de Datos */}
          <div className="bg-gray-100 dark:bg-[#1E293B] p-6 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm transition-colors">
            <span className="text-xl font-bold text-[#0a4c91] dark:text-[#00BAFE]">
              Persistencia de Datos
            </span>
            <p className="pt-4 text-gray-700 dark:text-gray-300">
              Los datos se guardan en el almacenamiento local (
              <CodeHighlight>localStorage</CodeHighlight>), lo que permite que
              la información persista incluso después de cerrar el navegador.
            </p>
            <div className="my-4 flex justify-center">
              <img
                src="/fd-localstorage.png"
                alt="Verificando el persistencia de datos en LocalStorage"
                className="w-[100%] rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      ),
      "tech-stack": (
        <div>
          <p>
            El proyecto se construyó con un enfoque en la eficiencia y una
            experiencia de usuario moderna.
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>
              Frontend: La interfaz de usuario fue desarrollada con React y
              TypeScript. Para el diseño, se usó Tailwind CSS y Shadcn UI, una
              librería de componentes reutilizables que aceleró el desarrollo.
              La visualización de datos se implementó con Recharts.
            </li>
            <li>
              Hooks Personalizados: Se crearon hooks personalizados como
              <CodeHighlight>useTransactions</CodeHighlight>,
              <CodeHighlight>useFinancialSummary</CodeHighlight>, y
              <CodeHighlight>useLocalStorage</CodeHighlight> para centralizar la
              lógica de negocio, la gestión de estado y la persistencia de
              datos, siguiendo las mejores prácticas de React.
            </li>
            <li>
              Arquitectura: El estado de la aplicación se maneja directamente en
              React. La persistencia de datos en el
              <CodeHighlight>localStorage</CodeHighlight> del navegador elimina
              la necesidad de un backend externo, lo que simplifica la
              arquitectura.
            </li>
          </ul>
        </div>
      ),
      learning: (
        <div>
          <p>
            Durante el desarrollo de este proyecto, se obtuvieron valiosos
            aprendizajes y se superaron varios desafíos:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>
              Integración de librerías de UI: Aprendí a integrar librerías
              modernas como Shadcn con Tailwind para crear componentes elegantes
              y funcionales de forma rápida.
            </li>
            <li>
              Gestión de estado y persistencia: Me familiaricé con el manejo
              eficiente del estado de React y la implementación de la
              persistencia de datos usando{" "}
              <CodeHighlight>localStorage</CodeHighlight>.
            </li>
            <li>
              Visualización de datos: Implementé visualizaciones claras y
              comprensibles con Recharts para representar la información
              financiera de manera efectiva.
            </li>
            <li>
              Desarrollo con TypeScript: La utilización de TypeScript mejoró la
              calidad del código, haciéndolo más robusto y fácil de mantener a
              largo plazo.
            </li>
          </ul>
        </div>
      ),
    },
  },
  "sistema-medico": {
    title: "Sistema de Gestión para Consultorio Médico",
    description:
      "Este es un sistema de gestión integral para consultorios médicos, diseñado para optimizar la administración de pacientes, citas e historias clínicas. El proyecto está dividido en un frontend (React) y un backend (Node.js/Express) que se comunican a través de una API RESTful.",
    technologies: [
      "React",
      "NodeJS",
      "ExpressJS",
      "PostgreSQL",
      "Sequelize",
      "Tailwind",
    ],
    externalLink: "#",
    githubLink: "https://github.com/tu-usuario/proyecto-medico", // Reemplaza con tu URL
    sections: [
      { id: "overview", title: "Visión General" },
      { id: "backend", title: "Backend (API REST)" },
      { id: "frontend", title: "Frontend (Interfaz de Usuario)" },
      { id: "clinical-history", title: "Historia Clínica Electrónica" },
      { id: "architecture", title: "Arquitectura" },
    ],
    content: {
      overview: (
        <div>
          <p>
            Este sistema permite a los administradores gestionar de forma segura
            todos los aspectos de un consultorio. La aplicación ofrece una
            experiencia de usuario fluida y eficiente, respaldada por una API
            robusta y una base de datos relacional.
          </p>
        </div>
      ),
      backend: (
        <div>
          <h4 className="text-xl font-bold mb-2">
            Funcionalidades del Backend
          </h4>
          <p>
            El backend, construido con **Node.js** y **Express.js**, se encarga
            de:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>
              **Autenticación y Autorización:** Registro, inicio de sesión, y
              protección de rutas con JWT.
            </li>
            <li>
              **Gestión de Pacientes:** CRUD completo para pacientes y sus
              contactos de emergencia.
            </li>
            <li>
              **Gestión de Citas:** Creación, actualización y consulta de citas.
            </li>
            <li>
              **API de Historia Clínica:** Puntos finales para manejar la HCE de
              forma estructurada (anamnesis, diagnósticos, etc.).
            </li>
          </ul>
        </div>
      ),
      frontend: (
        <div>
          <h4 className="text-xl font-bold mb-2">Interfaz de Usuario</h4>
          <p>
            El frontend fue desarrollado con **React**, utilizando **Tailwind
            CSS** para un diseño responsivo y **Zustand** para la gestión de
            estado. Proporciona una interfaz intuitiva para la administración
            diaria.
          </p>
        </div>
      ),
      "clinical-history": (
        <div>
          <h4 className="text-xl font-bold mb-2">Módulo de Historia Clínica</h4>
          <p>
            Este es el módulo más complejo, permitiendo una gestión detallada
            de:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Anamnesis, exploración física.</li>
            <li>Diagnósticos y planes de tratamiento.</li>
          </ul>
          <div className="mt-4">
            <img
              src="/hce-demo.gif"
              alt="Demo de la Historia Clínica"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      ),
      architecture: (
        <div>
          <h4 className="text-xl font-bold mb-2">Arquitectura</h4>
          <p>
            El proyecto sigue una arquitectura de **monolito modular**, donde el
            frontend y el backend se desarrollan por separado pero se despliegan
            como una única aplicación. El backend se comunica con una base de
            datos **PostgreSQL** a través de **Sequelize ORM**.
          </p>
          <div className="mt-4">
            {/* Aquí podrías insertar un diagrama de arquitectura si tienes uno */}
          </div>
        </div>
      ),
    },
  },
};

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

  // useEffect para detectar la sección activa basada en el scroll
  useEffect(() => {
    const handleScroll = () => {
      let currentActive = "";
      for (let i = project.sections.length - 1; i >= 0; i--) {
        const section = project.sections[i];
        const element = document.getElementById(section.id);
        if (element && element.getBoundingClientRect().top <= window.innerHeight / 2) {
          currentActive = section.id;
          break;
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [project.sections]);

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
    // Contenedor principal con flexbox para la distribución de tres columnas en pantallas grandes
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col lg:flex-row min-h-screen dark:bg-zinc-900 dark:text-white transition-colors pt-24 lg:pt-16"
    >
      {/* Aside Izquierdo - Información del proyecto */}
      {/* Se hace fixed en pantallas grandes para que se mantenga visible al hacer scroll */}
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
            <a
              href={project.githubLink}
              aria-label="repositorio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-zinc-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              Repositorio <Github className="ml-2 h-4 w-4" />
            </a>
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

      {/* Contenido principal del proyecto */}
      {/* El main tiene un margen izquierdo para dejar espacio al aside izquierdo fijo */}
      {/* y un margen derecho para dejar espacio al nuevo aside derecho fijo */}
      <main className="w-full lg:w-1/2 xl:w-[60%] lg:ml-[25%] xl:ml-[20%] lg:mr-[25%] xl:mr-[20%] p-6 md:p-10">
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

      {/* Nuevo Aside Derecho - Navegación por secciones */}
      {/* Se hace fixed en pantallas grandes para que se mantenga visible al hacer scroll */}
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
