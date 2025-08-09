// src/Components/Navbar.jsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Mail } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // Obtiene la ubicación actual de la ruta

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Inicio", href: "/#inicio" },
    { name: "Sobre mí", href: "/#sobre-mi" },
    { name: "Experiencia", href: "/#experiencia" },
    { name: "Educación", href: "/#educacion" },
    { name: "Proyectos", href: "/#proyectos" },
    { name: "Contacto", href: "/#contacto" },
  ];

  // Función para manejar el clic en los enlaces
  const handleNavLinkClick = (e, href) => {
    // Si ya estamos en la página principal, prevenimos el comportamiento por defecto y hacemos scroll
    if (location.pathname === '/') {
      e.preventDefault();
      const targetId = href.substring(href.indexOf('#') + 1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-custom ${
        isScrolled
          ? "bg-[#F3F4F6] dark:bg-[#18181A] shadow-custom"
          : "bg-transparent"
      }`}
    >
      <div className="container w-full mx-auto flex items-center justify-between h-16">
        <Link to="/" className="text-lg font-bold text-[#0a4c91] dark:text-[#00BAFE]"> {/* Cambiado a '/' para siempre ir al inicio */}
          Portafolio
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6 justify-center items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={(e) => handleNavLinkClick(e, link.href)}
              className="btn btn-ghost transition-colors shadow-none border-none dark:border-none rounded-full dark:hover:bg-[#181B23] dark:hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <ThemeToggle />

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden dark:text-white btn btn-ghost dark:hover:bg-[#1a1a1b] border-none shadow-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-background shadow-custom-md">
          <div className="container mx-auto p-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="link link-hover transition-colors py-2 text-center"
                onClick={(e) => {
                  toggleMenu();
                  handleNavLinkClick(e, link.href);
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}