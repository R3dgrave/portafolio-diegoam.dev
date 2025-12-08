import React, { useState } from "react";
import { Github, Linkedin, Mail, Phone, Copy, Check } from "lucide-react";
import { AnimatedElement } from "./AnimatedElement";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const githubUrl = "github.com/R3dgrave";
  const email = "diegoabm.dev@gmail.com";
  const phoneNumber = "+56 9 7689 6260";
  const linkedinUrl = "linkedin.com/in/diegoabantomendoza/";
  const año = new Date().getFullYear();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <footer className="py-10 bg-[#0a4c91] dark:bg-[#00BAFE] text-white dark:text-black transition-colors">
        <AnimatedElement animation="fade-up">
          <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-between gap-6">
            <div className="flex flex-col lg:flex-row gap-6 text-sm items-center">
              <a
                href="https://github.com/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <Github size={20} />
                <span>{githubUrl}</span>
              </a>

              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center gap-2 hover:text-white transition"
              >
                <Phone size={20} />
                <span>{phoneNumber}</span>
              </a>

              {/* Correo con botón copiar */}
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  <Mail size={20} />
                  <span>{email}</span>
                </a>

                {/* Botón pequeño */}
                <button
                  onClick={copyToClipboard}
                  className="p-1 rounded hover:bg-zinc-800 transition"
                >
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                </button>

                {/* Mensaje de copiado */}
                {copied && (
                  <span className="text-green-400 text-xs transition">
                    Copiado!
                  </span>
                )}
              </div>

              <a
                href="https://www.linkedin.com/in/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <Linkedin size={20} />
                <span>{linkedinUrl}</span>
              </a>
            </div>
            <div className="text-sm font-semibold text-center">
              © {año} - Diego Abanto
            </div>
          </div>
        </AnimatedElement>
      </footer>
    </>
  );
};

export default Footer;
