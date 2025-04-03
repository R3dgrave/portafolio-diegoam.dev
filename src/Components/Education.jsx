import React from "react";
import { AnimatedElement } from "./AnimatedElement";

const Education = () => {
  return (
    <>
      <section id="educacion" className="py-20 bg-muted/30">
        <div className="container">
          <AnimatedElement
            animation="fade-up"
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Educación</h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-8" />
          </AnimatedElement>
          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {[1].map((item, index) => (
              <AnimatedElement
                key={item}
                animation="fade-up"
                className="bg-card rounded-lg p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full-custom bg-primary-light flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-medium">CFT</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">
                      Técnico de Nivel Superior Analista Programador
                    </h3>
                    <h4 className="text-primary mb-2">
                      Centro de Formación Técnica INACAP
                    </h4>
                    <p className="text-muted mb-2">2020 - 2022</p>
                    <p className="text-sm">
                      Especialización en desarrollo de software, programación
                      orientada a objetos, bases de datos, redes, etc. Proyectos
                      destacados en tecnologías frontend y experiencia de
                      usuario.
                    </p>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
