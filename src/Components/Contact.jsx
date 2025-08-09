// src/Components/Contact.jsx
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Linkedin, Github, Copy } from "lucide-react";
import { AnimatedElement } from "./AnimatedElement";

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = "El nombre es obligatorio";
    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ingrese un email válido";
    }
    if (!formData.asunto.trim()) newErrors.asunto = "El asunto es obligatorio";
    if (!formData.mensaje.trim())
      newErrors.mensaje = "El mensaje no puede estar vacío";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSending(true);
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          setSending(false);
          setFormData({ nombre: "", email: "", asunto: "", mensaje: "" });
        },
        () => {
          setSuccess(false);
          setSending(false);
        }
      );
  };

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
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
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
                  <p className="text-gray-600 dark:text-gray-300">
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
                  <p className="text-gray-600 dark:text-gray-300">
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
            <AnimatedElement
              animation="fade-up"
              className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Envíame un mensaje
              </h3>
              <form className="space-y-4" onSubmit={sendEmail}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="nombre" className="text-sm font-medium">
                      Nombre
                    </label>
                    <input
                      id="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-zinc-700 rounded-md dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 transition-colors"
                      placeholder="Tu nombre"
                    />
                    {errors.nombre && (
                      <p className="text-red-500 text-sm">{errors.nombre}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-zinc-700 rounded-md dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 transition-colors"
                      placeholder="tu@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="asunto" className="text-sm font-medium">
                    Asunto
                  </label>
                  <input
                    id="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-zinc-700 rounded-md dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 transition-colors"
                    placeholder="Asunto del mensaje"
                  />
                  {errors.asunto && (
                    <p className="text-red-500 text-sm">{errors.asunto}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="mensaje" className="text-sm font-medium">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="w-full min-h-[120px] px-3 py-2 border border-gray-300 dark:border-zinc-700 rounded-md dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 transition-colors"
                    placeholder="Tu mensaje..."
                  />
                  {errors.mensaje && (
                    <p className="text-red-500 text-sm">{errors.mensaje}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-black text-white rounded-md font-semibold hover:bg-opacity-90 transition-colors"
                  disabled={sending}
                >
                  {sending ? "Enviando..." : "Enviar mensaje"}
                </button>
                {success !== null && (
                  <p
                    className={`text-center mt-2 font-medium ${
                      success ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {success
                      ? "¡Mensaje enviado correctamente! Te responderé pronto."
                      : "Hubo un error al enviar tu mensaje. Inténtalo de nuevo."}
                  </p>
                )}
              </form>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
