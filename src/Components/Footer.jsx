import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Diego Abanto.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://github.com/R3dgrave"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-circle"
              size="icon"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/diegoabantomendoza"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-circle"
              size="icon"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:diegoabm.dev@gmail.com"
              aria-label="Email"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-circle"
              size="icon"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
