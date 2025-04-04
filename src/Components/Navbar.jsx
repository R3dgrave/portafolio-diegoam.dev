import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Mail } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Sobre mí", href: "#sobre-mi" },
    { name: "Experiencia", href: "#experiencia" },
    { name: "Educación", href: "#educacion" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-custom ${
        isScrolled
          ? "bg-background/90 backdrop-blur-3xl shadow-custom border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container w-full mx-auto flex items-center justify-between h-16">
        <Link to="#inicio" className="text-lg font-bold">
          Portafolio
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6 justify-center items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="link link-hover transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <ThemeToggle />

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden dark:text-white btn dark:btn-neutral"
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
              <a
                key={link.name}
                href={link.href}
                className="link link-hover transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
