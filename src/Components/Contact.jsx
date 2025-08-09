// src/Components/Contact.jsx
import React, { useState } from "react";
import { Mail, Linkedin, Github, Copy } from "lucide-react";
import { AnimatedElement } from "./AnimatedElement";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "diegoabm.dev@gmail.com";
  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <section
        id="contacto"
        className="py-20 bg-gray-100 dark:bg-zinc-950 dark:text-white transition-colors"
      >
        <div className="container mx-auto px-4">
          <AnimatedElement
            animation="fade-up"
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Contacto</h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-8" />
            <p className="text-gray-600 dark:text-gray-400">
              ¿Interesado en trabajar juntos? Contáctame a través de los
              siguientes medios.
            </p>
          </AnimatedElement>
          <div className="w-full flex justify-center">
            <AnimatedElement
              animation="fade-up"
              className="space-y-8 p-6"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Información de Contacto
              </h3>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Email
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-xs md:text-base">
                    {email}
                  </p>
                  <button
                    className="flex items-center gap-2 mt-1 text-primary dark:text-blue-300 hover:underline"
                    onClick={copyToClipboard}
                  >
                    <Copy className="h-4 w-4" />
                    {copied ? "¡Copiado!" : "Copiar email"}
                  </button>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0">
                  <Linkedin className="h-5 w-5 text-primary" />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    LinkedIn
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-xs md:text-base break-words">
                    linkedin.com/in/diegoabantomendoza
                  </p>
                  <a
                    href="https://www.linkedin.com/in/diegoabantomendoza"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 mt-1 text-primary dark:text-blue-300 hover:underline"
                  >
                    Visitar perfil
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0">
                  <Github className="h-5 w-5 text-primary" />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    GitHub
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-xs md:text-base">
                    github.com/R3dgrave
                  </p>
                  <a
                    href="https://github.com/R3dgrave"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 mt-1 text-primary dark:text-blue-300 hover:underline"
                  >
                    Ver repositorios
                  </a>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
