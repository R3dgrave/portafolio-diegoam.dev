import CodeHighlight from "./CodeHighlight";
import ZoomableImage from "./ZoomableImage";

export const projectsData = {
  "financial-dashboard": {
    title: "Dashboard Financiero Personal",
    description:
      "Este proyecto es un dashboard financiero personal desarrollado para ayudarte a controlar y visualizar tus finanzas de manera sencilla e intuitiva. Permite a los usuarios registrar ingresos y gastos, obteniendo una visión clara de su situación financiera a través de resúmenes y gráficos. La aplicación es ideal para cualquiera que quiera tomar el control de su presupuesto personal.",
    technologies: ["React", "Tailwind", "Shadcn"],
    externalLink: "https://financial-dashboard-swart-one.vercel.app/",
    githubLink: [
      {
        enlace: "https://github.com/R3dgrave/financial-dashboard/",
        name: "Frontend",
      },
    ],
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
              <ZoomableImage
                src="/dashboardfinanciero/fd-agregar-transaccion.jpg"
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
              Visualización en tiempo real del balance total, ingresos y gastos
              totales.
            </p>
            <div className="my-4 flex justify-center">
              <ZoomableImage
                src="/dashboardfinanciero/fd-resumen.jpg"
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
              Recharts) que muestra la distribución de los gastos por categoría,
              lo que facilita identificar en qué áreas se está gastando más.
            </p>
            <div className="my-4 flex justify-center">
              <ZoomableImage
                src="/dashboardfinanciero/fd-pie.jpg"
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
              <ZoomableImage
                src="/dashboardfinanciero/fd-historial.jpg"
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
              <ZoomableImage
                src="/dashboardfinanciero/fd-localstorage.png"
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
          <ul className="list-disc list-inside mt-4 ml-2 space-y-2">
            <li>
              <span className="font-bold">Frontend: </span>La interfaz de
              usuario fue desarrollada con React y TypeScript. Para el diseño,
              se usó Tailwind CSS y Shadcn UI, una librería de componentes
              reutilizables que aceleró el desarrollo. La visualización de datos
              se implementó con Recharts.
            </li>
            <li>
              <span className="font-bold">Hooks Personalizados: </span>Se
              crearon hooks personalizados como
              <CodeHighlight>useTransactions</CodeHighlight>,
              <CodeHighlight>useFinancialSummary</CodeHighlight>, y
              <CodeHighlight>useLocalStorage</CodeHighlight> para centralizar la
              lógica de negocio, la gestión de estado y la persistencia de
              datos, siguiendo las mejores prácticas de React.
            </li>
            <li>
              <span className="font-bold">Arquitectura: </span>El estado de la
              aplicación se maneja directamente en React. La persistencia de
              datos en el
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
          <ul className="list-disc list-inside mt-4 ml-2 space-y-2">
            <li>
              <span className="font-bold">
                Integración de librerías de UI:{" "}
              </span>
              Aprendí a integrar librerías modernas como Shadcn con Tailwind
              para crear componentes elegantes y funcionales de forma rápida.
            </li>
            <li>
              <span className="font-bold">
                Gestión de estado y persistencia:{" "}
              </span>
              Me familiaricé con el manejo eficiente del estado de React y la
              implementación de la persistencia de datos usando{" "}
              <CodeHighlight>localStorage</CodeHighlight>.
            </li>
            <li>
              <span className="font-bold">Visualización de datos: </span>
              Implementé visualizaciones claras y comprensibles con Recharts
              para representar la información financiera de manera efectiva.
            </li>
            <li>
              <span className="font-bold">Desarrollo con TypeScript: </span>La
              utilización de TypeScript mejoró la calidad del código, haciéndolo
              más robusto y fácil de mantener a largo plazo.
            </li>
          </ul>
        </div>
      ),
    },
  },
  "sistema-medico": {
    title:
      "Sistema de Gestión para Consultorio Médico 🩺 (Enfocado en consultas Matrona, Estética, Obstétrica)",
    description:
      "Desarrollé una solución full-stack para digitalizar la gestión de consultorios médicos, abordando las ineficiencias de los procesos manuales. El proyecto se centra en la optimización de la administración de pacientes, citas y, especialmente, en la creación de una robusta Historia Clínica Electrónica (HCE).",
    technologies: [
      "React",
      "NodeJS",
      "ExpressJS",
      "PostgreSQL",
      "Sequelize",
      "Tailwind",
      "Supabase",
      "Shadcn",
      "TanStack Query",
    ],
    externalLink: "https://lafleur-sistemamedico-ui.vercel.app/",
    githubLink: [
      {
        enlace: "https://github.com/R3dgrave/lafleur-sistemamedico-ui",
        name: "Frontend",
      },
      {
        enlace: "https://github.com/R3dgrave/lafleur-sistemamedico-api",
        name: "Backend",
      },
    ],
    sections: [
      { id: "overview", title: "Visión General y Desafío" },
      { id: "architecture", title: "Arquitectura del Proyecto" },
      { id: "bdd", title: "Arquitectura de la Base de Datos Actual" },
      { id: "features", title: "Funcionalidades Clave" },
      { id: "frontend", title: "Frontend (Interfaz de Usuario)" },
      { id: "mejoras", title: "Futuras mejoras del proyecto" },
    ],
    content: {
      overview: (
        <div>
          <p>
            Este sistema nació de una colaboración directa con una profesional
            de la salud. Su perspectiva fue clave para entender a fondo los
            procesos clínicos y desarrollar una plataforma que realmente
            resuelve las ineficiencias del sector. El resultado es una solución
            full-stack que centraliza la información y optimiza la gestión
            diaria, demostrando mi capacidad para construir soluciones completas
            y adaptadas a necesidades reales.
          </p>
        </div>
      ),
      bdd: (
        <div className="bg-gray-100 dark:bg-[#1E293B] p-6 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm transition-colors">
          <h4 className="text-xl font-bold text-[#0a4c91] dark:text-[#00BAFE]">
            Arquitectura de la Base de Datos Actual 🏛️
          </h4>
          <p className="pt-4 text-gray-700 dark:text-gray-300">
            La base de datos actual está diseñada para ser la columna vertebral
            de la plataforma, permitiendo la gestión eficiente de la clínica a
            través de un modelo de datos relacional robusto. Su estructura se
            centra en cuatro pilares principales:{" "}
            <span className="font-bold">
              Administración, Pacientes, Citas y la Historia Clínica.
            </span>
          </p>
          <div className="my-4 flex justify-center">
            <ZoomableImage
              src="/sistemamedico/sistemamedico_bdd.png"
              alt="Esquema de la base de datos de la clínica"
              className="mt-4 rounded-xl shadow-md"
            />
          </div>
          <h5 className="text-lg font-bold text-[#0a4c91] dark:text-[#00BAFE] mt-6">
            Características Clave del Diseño 🛠️
          </h5>
          <ul className="list-disc list-inside mt-3 ml-2 space-y-2 text-sm">
            <li>
              <span className="font-semibold">
                Administración y Roles de Usuario:
              </span>{" "}
              La tabla
              <CodeHighlight>Administradores</CodeHighlight> maneja la
              autenticación y seguridad, incluyendo campos para el hash de
              contraseñas (<CodeHighlight>password_hash</CodeHighlight>), un
              sistema de roles (<CodeHighlight>role</CodeHighlight>) y tokens de
              recuperación de contraseña. Esto garantiza un acceso seguro y
              diferenciado para el personal de la clínica.
            </li>
            <li>
              <span className="font-semibold">
                Gestión Detallada de Pacientes:
              </span>{" "}
              La tabla
              <CodeHighlight>Pacientes</CodeHighlight> almacena la información
              personal de los usuarios, incluyendo datos demográficos, de
              contacto y el <span className="font-bold">RUT</span>
              como identificador único. También se complementa con la tabla
              <CodeHighlight>Contactos_Emergencia</CodeHighlight> para una
              atención más completa en situaciones críticas.
            </li>
            <li>
              <span className="font-semibold">
                Sistema de Citas y Disponibilidad:
              </span>{" "}
              Este es uno de los módulos más complejos. La tabla{" "}
              <CodeHighlight>Citas</CodeHighlight> se relaciona con
              <CodeHighlight>Pacientes</CodeHighlight>,{" "}
              <CodeHighlight>Administradores</CodeHighlight> y
              <CodeHighlight>Tipo_Atencion</CodeHighlight>. Además, se apoya en
              <CodeHighlight>Horarios_Disponibles</CodeHighlight> y
              <CodeHighlight>Excepciones_Disponibilidad</CodeHighlight> para
              calcular de manera dinámica la agenda, previniendo conflictos y
              optimizando el tiempo del personal.
            </li>
            <li>
              <span className="font-semibold">
                Historia Clínica Estructurada:
              </span>{" "}
              La tabla
              <CodeHighlight>Historia_Clinica</CodeHighlight> es el nodo central
              que se relaciona con el <CodeHighlight>paciente_id</CodeHighlight>{" "}
              de forma única. A partir de esta, se ramifican sub-módulos para
              organizar la información médica de forma detallada y cronológica:
            </li>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-sm">
              <li>
                <span className="font-bold">Pruebas_Iniciales:</span> Registra
                los signos vitales y mediciones básicas.
              </li>
              <li>
                <span className="font-bold">Anamnesis:</span> Contiene el
                historial médico, alergias, antecedentes y motivo de la
                consulta.
              </li>
              <li>
                <span className="font-bold">Exploracion_Fisica:</span> Detalla
                los hallazgos de la exploración física.
              </li>
              <li>
                <span className="font-bold">Diagnosticos:</span> Permite
                registrar diagnósticos con sus respectivos códigos y estados.
              </li>
              <li>
                <span className="font-bold">Plan_Tratamiento:</span> Almacena el
                plan de acción, medicamentos y recomendaciones.
              </li>
            </ul>
          </ul>
          <p className="pt-4 text-gray-700 dark:text-gray-300">
            Este diseño modular y bien normalizado asegura la{" "}
            <span className="font-bold">integridad de los datos</span> y sienta
            las bases para las próximas funcionalidades, como los módulos de
            atención especializada que has planificado.
          </p>
        </div>
      ),
      features: (
        <div className="space-y-6">
          {/* Tarjeta de Sistema de Autenticación Avanzado */}
          <div className="bg-gray-100 dark:bg-[#1E293B] p-6 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm transition-colors">
            <h4 className="text-xl font-bold text-[#0a4c91] dark:text-[#00BAFE]">
              Módulo de Autenticación y Seguridad Avanzado 🔐
            </h4>
            <p className="pt-4 text-gray-700 dark:text-gray-300">
              Implementé un sistema de autenticación robusto y seguro que va más
              allá de lo básico, demostrando mi comprensión de las mejores
              prácticas de seguridad en aplicaciones web:
            </p>
            <ul className="list-disc list-inside mt-3 ml-2 space-y-2 text-sm">
              <li>
                <span className="font-semibold">Doble Token JWT:</span> Sistema
                con
                <CodeHighlight>Access Token</CodeHighlight> (corta duración) y
                <CodeHighlight>Refresh Token</CodeHighlight> (larga duración)
                para máxima seguridad.
              </li>
              <li>
                <span className="font-semibold">Cookies HttpOnly:</span> Los
                refresh tokens se almacenan en cookies seguras con flags{" "}
                <CodeHighlight>httpOnly</CodeHighlight>,{" "}
                <CodeHighlight>secure</CodeHighlight> y
                <CodeHighlight>sameSite</CodeHighlight>.
              </li>
              <li>
                <span className="font-semibold">Hash de Contraseñas:</span>{" "}
                Implementación de bcrypt con hooks de Sequelize para hash
                automático en creación y actualización.
              </li>
              <li>
                <span className="font-semibold">
                  Recuperación de Contraseña:
                </span>{" "}
                Sistema completo con tokens temporales, envío de emails via
                Nodemailer y validación de expiración.
              </li>
              <li>
                <span className="font-semibold">
                  Gestión de Perfiles y Fotos:
                </span>{" "}
                Permite a los usuarios subir y gestionar su foto de perfil. Para
                ello se utiliza la biblioteca{" "}
                <CodeHighlight>Multer</CodeHighlight>
                para manejar la subida de archivos y{" "}
                <CodeHighlight>Supabase Storage</CodeHighlight> para el
                almacenamiento seguro de las imágenes. El sistema maneja la
                subida, actualización y eliminación de las imágenes,
                garantizando que el almacenamiento sea óptimo y que no queden
                archivos huérfanos.
              </li>
              <li>
                <span className="font-semibold">Validación de Datos:</span> Uso
                de Zod para validación robusta de esquemas en todos los
                endpoints del controlador.
              </li>
              <li>
                <span className="font-semibold">
                  Manejo de Errores Personalizado:
                </span>{" "}
                Sistema de errores tipados (
                <CodeHighlight>UnauthorizedError</CodeHighlight>,{" "}
                <CodeHighlight>BadRequestError</CodeHighlight>, etc.).
              </li>
            </ul>
            <div className="my-4 flex justify-center">
              <ZoomableImage
                src="/sistemamedico/smedico_perfil_19.webp"
                alt="Captura de pantalla de la interfaz sistema medico"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>

          <div className="bg-gray-100 dark:bg-[#1E293B] p-6 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm transition-colors">
            <h4 className="text-xl font-bold text-[#0a4c91] dark:text-[#00BAFE]">
              Módulo de Gestión de Pacientes 🩺
            </h4>
            <p className="pt-4 text-gray-700 dark:text-gray-300">
              Este módulo se encarga de la gestión integral de la información de
              los pacientes. La implementación sigue principios sólidos de
              desarrollo, garantizando eficiencia, validación de datos y un
              manejo de errores claro.
            </p>
            <ul className="list-disc list-inside mt-3 ml-2 space-y-2 text-sm">
              <li>
                <span className="font-semibold">
                  Validación de Datos con Zod:
                </span>{" "}
                Se utilizan esquemas de validación
                <CodeHighlight>createPacienteSchema</CodeHighlight> y{" "}
                <CodeHighlight>updatePacienteSchema</CodeHighlight>
                para asegurar que todos los datos de entrada, tanto en la
                creación como en la actualización de pacientes, sean correctos y
                sigan un formato definido.
              </li>
              <li>
                <span className="font-semibold">
                  Operaciones CRUD Completas:
                </span>{" "}
                El módulo permite realizar todas las operaciones básicas para la
                gestión de pacientes:
                <CodeHighlight>Crear</CodeHighlight>,{" "}
                <CodeHighlight>Obtener todos</CodeHighlight>,
                <CodeHighlight>Obtener por ID</CodeHighlight> y{" "}
                <CodeHighlight>Actualizar</CodeHighlight> y
                <CodeHighlight>Eliminar</CodeHighlight>.
              </li>
              <li>
                <span className="font-semibold">
                  Búsqueda Avanzada de Pacientes:
                </span>{" "}
                Un endpoint dedicado permite la búsqueda de pacientes por{" "}
                <CodeHighlight>nombre</CodeHighlight>,{" "}
                <CodeHighlight>apellido</CodeHighlight> o{" "}
                <CodeHighlight>rut</CodeHighlight>
                usando el operador <CodeHighlight>iLike</CodeHighlight> de
                Sequelize para búsquedas insensibles a mayúsculas y minúsculas.
                Requiere un mínimo de 3 caracteres para optimizar el
                rendimiento.
              </li>
              <li>
                <span className="font-semibold">
                  Manejo de Errores Específico:
                </span>{" "}
                Utiliza errores personalizados como
                <CodeHighlight>NotFoundError</CodeHighlight> y{" "}
                <CodeHighlight>BadRequestError</CodeHighlight>
                para manejar situaciones como pacientes no encontrados o
                búsquedas inválidas, facilitando el diagnóstico y la respuesta
                de la API.
              </li>
              <li>
                <span className="font-semibold">
                  Optimización de Consultas:
                </span>{" "}
                Las consultas a la base de datos están optimizadas. Por ejemplo,
                en <CodeHighlight>getAllPacientes</CodeHighlight>, se
                seleccionan solo los atributos necesarios y se ordenan por
                apellido y nombre para una presentación de datos más eficiente.
              </li>
            </ul>
            <div className="my-4 flex justify-center">
              <ZoomableImage
                src="/sistemamedico/smedico_crearpaciente_3.webp"
                alt="Captura de pantalla de la interfaz de registro de pacientes"
                className="w-[100%] rounded-lg shadow-md"
              />
            </div>
          </div>

          <div className="bg-gray-100 dark:bg-[#1E293B] p-6 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm transition-colors">
            <h4 className="text-xl font-bold text-[#0a4c91] dark:text-[#00BAFE]">
              Módulos de Citas y Disponibilidad 🗓️
            </h4>
            <p className="pt-4 text-gray-700 dark:text-gray-300">
              Estos módulos trabajan en conjunto para gestionar de manera
              sofisticada la reserva de horas. El sistema no solo crea y
              modifica citas, sino que también maneja la disponibilidad del
              personal de manera dinámica, considerando horarios base,
              excepciones y citas existentes.
            </p>
            <div className="my-4 flex justify-center">
              <ZoomableImage
                src="/sistemamedico/smedico_citas_12.webp"
                alt="Captura de pantalla de la interfaz de citas"
                className="w-[100%] rounded-lg shadow-md"
              />
            </div>
            <ul className="list-disc list-inside mt-3 ml-2 space-y-2 text-sm">
              <li>
                <span className="font-semibold">
                  Manejo de Transacciones Atómicas:
                </span>{" "}
                Se utiliza{" "}
                <CodeHighlight>sequelize.transaction()</CodeHighlight>
                en la creación y actualización de citas para garantizar que, si
                alguna operación falla, todos los cambios se revierten (
                <CodeHighlight>rollback</CodeHighlight>), manteniendo la
                integridad de los datos.
              </li>
              <div className="my-4 flex justify-center">
                <ZoomableImage
                  src="/sistemamedico/smedico_crearcitapaso2_15.webp"
                  alt="Captura de pantalla de la interfaz crear cita"
                  className="w-[100%] rounded-lg shadow-md"
                />
              </div>
              <li>
                <span className="font-semibold">
                  Citas por Tipo de Atención y Administrador:
                </span>{" "}
                La creación de citas está vinculada directamente a un tipo de
                atención específico (ej. "Control anual", "Primera visita") y a
                un administrador en particular. La duración de la cita y el
                tiempo de buffer se determinan a partir del
                <CodeHighlight>TipoAtencion</CodeHighlight> seleccionado,
                garantizando una planificación precisa.
              </li>
              <div className="my-4 flex justify-center">
                <ZoomableImage
                  src="/sistemamedico/smedico_crearcitapaso3_16.webp"
                  alt="Captura de pantalla de la interfaz crear cita"
                  className="w-[100%] rounded-lg shadow-md"
                />
              </div>
              <li>
                <span className="font-semibold">
                  Lógica de Disponibilidad Compleja:
                </span>{" "}
                El endpoint <CodeHighlight>getFranjasDisponibles</CodeHighlight>
                calcula dinámicamente las horas disponibles para un
                administrador, tomando en cuenta su horario semanal base (
                <CodeHighlight>HorarioDisponible</CodeHighlight>), las
                excepciones de días o franjas de tiempo (
                <CodeHighlight>ExcepcionDisponibilidad</CodeHighlight>) y las
                citas ya agendadas, lo que previene sobreagendamiento.
              </li>
              <div className="my-4 flex justify-center">
                <ZoomableImage
                  src="/sistemamedico/smedico_crearcitapaso4_17.webp"
                  alt="Captura de pantalla de la interfaz crear cita"
                  className="w-[100%] rounded-lg shadow-md"
                />
              </div>
              <li>
                <span className="font-semibold">
                  Detección de Solapamiento Inteligente:
                </span>{" "}
                Al crear o actualizar una cita, el sistema realiza una consulta
                robusta para detectar conflictos de horario tanto para el
                paciente como para el administrador, lanzando un error
                específico en caso de conflicto.
              </li>
              <li>
                <span className="font-semibold">API de Búsqueda Flexible:</span>{" "}
                El endpoint <CodeHighlight>getAllCitas</CodeHighlight>
                permite filtrar las citas por una variedad de parámetros
                (paciente, tipo de atención, estado, rango de fechas),
                ofreciendo una gran flexibilidad para la interfaz de usuario.
              </li>
              <li>
                <span className="font-semibold">Manejo de Zona Horaria:</span>{" "}
                La biblioteca <CodeHighlight>Luxon</CodeHighlight> se utiliza
                para manejar fechas y horas, asegurando que las conversiones
                entre UTC y la zona horaria local de Chile (
                <CodeHighlight>America/Santiago</CodeHighlight>) se realicen de
                forma precisa.
              </li>
              <li>
                <span className="font-semibold">
                  Gestión de Disponibilidad para Administradores:
                </span>{" "}
                Los administradores pueden gestionar su propio horario de
                trabajo base (<CodeHighlight>HorarioDisponible</CodeHighlight>)
                y definir excepciones de disponibilidad (
                <CodeHighlight>ExcepcionDisponibilidad</CodeHighlight>),
                permitiendo un control granular sobre cuándo están disponibles.
              </li>
            </ul>
            <div className="my-4 flex justify-center">
              <ZoomableImage
                src="/sistemamedico/smedico_crearcitapaso5_18.webp"
                alt="Captura de pantalla de la interfaz crear cita final"
                className="w-[100%] rounded-lg shadow-md"
              />
            </div>
          </div>

          <div className="bg-gray-100 dark:bg-[#1E293B] p-6 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm transition-colors">
            <h4 className="text-xl font-bold text-[#0a4c91] dark:text-[#00BAFE]">
              Módulo de Historia Clínica 📂
            </h4>
            <p className="pt-4 text-gray-700 dark:text-gray-300">
              El módulo de Historia Clínica está diseñado para ser el
              repositorio central de la información médica de cada paciente. Se
              estructura de forma modular, permitiendo gestionar y consultar
              registros médicos detallados, organizados en subsecciones
              específicas y relacionados directamente con el paciente.
            </p>
            <ul className="list-disc list-inside mt-3 ml-2 space-y-2 text-sm">
              <li>
                <span className="font-semibold">
                  Estructura Modular y Reutilizable:
                </span>{" "}
                El controlador está diseñado bajo un patrón de clase (
                <CodeHighlight>ClinicalHistoryController</CodeHighlight>) que
                utiliza una clase base genérica (
                <CodeHighlight>BaseController</CodeHighlight>). Esto permite
                reutilizar la lógica de búsqueda y manejo de errores para cada
                sub-módulo (Anamnesis, Diagnóstico, etc.), haciendo el código
                más limpio y mantenible.
              </li>
              <div className="my-4 flex justify-center">
                <ZoomableImage
                  src="/sistemamedico/smedico_historiaclinica_7.webp"
                  alt="Captura de pantalla de la interfaz historia clinica"
                  className="w-[100%] rounded-lg shadow-md"
                />
              </div>
              <li>
                <span className="font-semibold">Relación con Pacientes:</span>{" "}
                Cada instancia de <CodeHighlight>HistoriaClinica</CodeHighlight>
                está vinculada de forma única a un{" "}
                <CodeHighlight>paciente_id</CodeHighlight>. El sistema verifica
                que el paciente exista antes de crear una historia clínica y
                evita la duplicación mediante una comprobación de conflicto (
                <CodeHighlight>ConflictError</CodeHighlight>).
              </li>
              <li>
                <span className="font-semibold">Consulta Flexible:</span> Es
                posible acceder a la historia clínica y sus subsecciones
                mediante el ID del paciente (
                <CodeHighlight>pacienteId</CodeHighlight>) o, de manera aún más
                útil, a través de su RUT (
                <CodeHighlight>getHistoriaClinicaByPacienteRut</CodeHighlight>),
                lo que facilita la integración con flujos de trabajo clínicos.
              </li>
              <li>
                <span className="font-semibold">
                  Sub-módulos Detallados (Anamnesis, Exploración, Diagnóstico,
                  etc.):
                </span>
                El módulo principal se divide en secciones especializadas, como{" "}
                <CodeHighlight>Anamnesis</CodeHighlight>
                (historial del paciente),{" "}
                <CodeHighlight>ExploracionFisica</CodeHighlight>,{" "}
                <CodeHighlight>Diagnostico</CodeHighlight>,
                <CodeHighlight>PlanTratamiento</CodeHighlight> y{" "}
                <CodeHighlight>PruebasIniciales</CodeHighlight>. Cada uno tiene
                sus propios métodos CRUD completos, lo que permite un manejo
                granular y estructurado de la información clínica.
              </li>
              <li>
                <span className="font-semibold">Integración con Citas:</span>{" "}
                Las subsecciones de la historia clínica pueden vincularse a una
                cita específica (<CodeHighlight>cita_id</CodeHighlight>),
                proporcionando un contexto temporal y facilitando el seguimiento
                de la evolución del paciente a lo largo del tiempo.
              </li>
              <div className="my-4 flex justify-center">
                <ZoomableImage
                  src="/sistemamedico/smedico_exploracionfisica_9.webp"
                  alt="Captura de pantalla de la interfaz formulario exploracion fisica"
                  className="w-[100%] rounded-lg shadow-md"
                />
              </div>
            </ul>
          </div>

          <div className="bg-gray-100 dark:bg-[#1E293B] p-6 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm transition-colors">
            <h4 className="text-xl font-bold text-[#0a4c91] dark:text-[#00BAFE]">
              Próximas Funcionalidades ✨
            </h4>
            <p className="pt-4 text-gray-700 dark:text-gray-300">
              Para expandir la capacidad y especialización de la plataforma, se
              ha planificado la implementación de nuevas funcionalidades que se
              centrarán en la atención médica especializada y la gestión
              integral de la clínica. Esto permitirá manejar historiales
              clínicos más detallados y optimizar los procesos administrativos.
            </p>

            <h5 className="text-lg font-bold text-[#0a4c91] dark:text-[#00BAFE] mt-6">
              Módulos de Atención Especializada
            </h5>
            <p className="text-gray-700 dark:text-gray-300">
              Se crearán módulos dedicados para los siguientes tipos de
              atención, cada uno con tablas diseñadas para registrar información
              clínica específica y relevante:
            </p>
            <ul className="list-disc list-inside mt-3 ml-2 space-y-2 text-sm">
              <li>
                <span className="font-semibold">Atención Ginecológica:</span>{" "}
                Gestionará exámenes (
                <CodeHighlight>Examenes_Ginecologicos</CodeHighlight>),
                exploraciones (
                <CodeHighlight>Exploracion_Ginecologica</CodeHighlight>),
                anamnesis detallada (
                <CodeHighlight>Anamnesis_Ginecologica</CodeHighlight>) e
                indicaciones especializadas (
                <CodeHighlight>Indicaciones_Ginecologicas</CodeHighlight>),
                todas vinculadas a una cita específica para un seguimiento
                preciso.
              </li>
              <li>
                <span className="font-semibold">Atención Obstétrica:</span>{" "}
                Contará con un seguimiento exhaustivo del embarazo, incluyendo
                antecedentes del ingreso (
                <CodeHighlight>Antecedentes_Ingreso_Obstetricos</CodeHighlight>
                ), del padre (<CodeHighlight>Antecedentes_Padre</CodeHighlight>
                ), gineco-obstétricos (
                <CodeHighlight>Antecedentes_Gineco_Obstetricos</CodeHighlight>),
                registro de vacunas (
                <CodeHighlight>Vacunas_Obstetricas</CodeHighlight>), exámenes
                por trimestre (<CodeHighlight>Examenes_Trimestre</CodeHighlight>
                ) e indicaciones específicas (
                <CodeHighlight>Indicaciones_Obstetricas</CodeHighlight>).
              </li>
              <li>
                <span className="font-semibold">Atención Estética Facial:</span>{" "}
                Permitirá registrar hábitos del paciente relevantes para
                tratamientos estéticos (
                <CodeHighlight>Habitos_Estetica</CodeHighlight>) y personalizar
                los planes de cuidado de la piel.
              </li>
            </ul>

            <h5 className="text-lg font-bold text-[#0a4c91] dark:text-[#00BAFE] mt-6">
              Tablas Adicionales para una Historia Clínica Integral
            </h5>
            <p className="text-gray-700 dark:text-gray-300">
              Para complementar el historial clínico, se añadirán tablas que
              mejorarán la trazabilidad y la gestión de la información del
              paciente:
            </p>
            <ul className="list-disc list-inside mt-3 ml-2 space-y-2 text-sm">
              <li>
                <span className="font-semibold">
                  Resultados de Exámenes Complementarios:
                </span>{" "}
                Una tabla genérica (
                <CodeHighlight>
                  Resultados_Examenes_Complementarios
                </CodeHighlight>
                ) para almacenar y adjuntar resultados de cualquier tipo de
                examen (laboratorio, imagenología, etc.), permitiendo cargar
                archivos externos (como PDFs) y asociarlos tanto a una cita como
                al historial completo.
              </li>
              <li>
                <span className="font-semibold">Evolución Clínica:</span> Una
                tabla (<CodeHighlight>Evolucion_Clinica</CodeHighlight>) para
                documentar la progresión del estado de salud del paciente a lo
                largo del tiempo, con notas, cambios en la medicación e
                indicaciones actualizadas.
              </li>
              <li>
                <span className="font-semibold">
                  Consentimientos Informados y Documentos Anexos:
                </span>
                Tablas especializadas para la gestión legal y administrativa,
                permitiendo almacenar y rastrear consentimientos (
                <CodeHighlight>Consentimientos_Informados</CodeHighlight>) y
                otros documentos relevantes (
                <CodeHighlight>Documentos_Anexos</CodeHighlight>) de manera
                segura, con sus respectivas URL de almacenamiento.
              </li>
            </ul>

            <h5 className="text-lg font-bold text-[#0a4c91] dark:text-[#00BAFE] mt-6">
              Módulos de Gestión Administrativa
            </h5>
            <ul className="list-disc list-inside mt-3 ml-2 space-y-2 text-sm">
              <li>
                <span className="font-semibold">Módulo de Inventario:</span> Se
                creará un módulo de inventario (
                <CodeHighlight>Inventario</CodeHighlight>) para gestionar
                productos e insumos de la clínica. Permitirá registrar el{" "}
                <span className="font-bold">
                  nombre, descripción, unidad de medida, cantidad, precio de
                  costo, precio de venta y categoría
                </span>{" "}
                de cada ítem, facilitando el control de stock.
              </li>
              <li>
                <span className="font-semibold">Módulo de Finanzas:</span> Este
                módulo (<CodeHighlight>Finanzas</CodeHighlight>) se enfocará en
                el registro de transacciones financieras. Podrá manejar{" "}
                <span className="font-bold">ingresos y egresos</span> con
                categorías detalladas y se podrá relacionar cada transacción con
                una
                <span className="font-bold">cita</span> o un{" "}
                <span className="font-bold">paciente</span>, ofreciendo una
                visión clara y completa de la salud financiera de la clínica.
              </li>
            </ul>
          </div>
        </div>
      ),
      frontend: (
        <div>
          <p>
            La interfaz de usuario fue desarrollada con{" "}
            <CodeHighlight>React</CodeHighlight> para asegurar una experiencia
            fluida e intuitiva. Para el diseño, utilicé
            <CodeHighlight>Tailwind CSS</CodeHighlight> y{" "}
            <CodeHighlight>Shadcn</CodeHighlight>, lo que me permitió crear un
            layout responsivo y moderno. La gestión del estado se manejó con
            <CodeHighlight>Zustand</CodeHighlight> , una librería ligera y
            eficiente que simplifica el flujo de datos. También integré{" "}
            <CodeHighlight>TanStack Query</CodeHighlight> para la gestión del
            estado del servidor y las llamadas a la API.
          </p>
          <div className="my-4 flex justify-center">
            <ZoomableImage
              src="/sistemamedico/smedico_pacientes_2.webp"
              alt="Captura de pantalla de la interfaz"
              className="w-[100%] rounded-lg shadow-md"
            />
          </div>
        </div>
      ),
      architecture: (
        <div>
          <p>
            El proyecto sigue una arquitectura distribuida, con el frontend
            desarrollado en React y desplegado en Vercel, el backend en
            Node.js/Express.js desplegado en Render, y la base de datos en Neon
            (PostgreSQL). Esta separación de servicios permite un desarrollo
            independiente, una mayor tolerancia a fallos y una escalabilidad
            horizontal más sencilla para cada componente.
          </p>
          <div className="mt-4"></div>
        </div>
      ),
      mejoras: (
        <div className="bg-gray-100 dark:bg-[#1E293B] p-6 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm transition-colors">
          <h4 className="text-xl font-bold text-[#0a4c91] dark:text-[#00BAFE]">
            Próximas Funcionalidades, soluciones a bugs y testing del sistema✨
          </h4>
          <p className="pt-4 text-gray-700 dark:text-gray-300">
            Para expandir la capacidad y especialización de la plataforma, se ha
            planificado la implementación de nuevas funcionalidades que se
            centrarán en la atención médica especializada y la gestión integral
            de la clínica. Esto permitirá manejar historiales clínicos más
            detallados y optimizar los procesos administrativos.
          </p>

          <h5 className="text-lg font-bold text-[#0a4c91] dark:text-[#00BAFE] mt-6">
            Módulos de Atención Especializada
          </h5>
          <p className="text-gray-700 dark:text-gray-300">
            Se crearán módulos dedicados para los siguientes tipos de atención,
            cada uno con tablas diseñadas para registrar información clínica
            específica y relevante:
          </p>
          <ul className="list-disc list-inside mt-3 ml-2 space-y-2 text-sm">
            <li>
              <span className="font-semibold">Atención Ginecológica:</span>{" "}
              Gestionará exámenes (
              <CodeHighlight>Examenes_Ginecologicos</CodeHighlight>),
              exploraciones (
              <CodeHighlight>Exploracion_Ginecologica</CodeHighlight>),
              anamnesis detallada (
              <CodeHighlight>Anamnesis_Ginecologica</CodeHighlight>) e
              indicaciones especializadas (
              <CodeHighlight>Indicaciones_Ginecologicas</CodeHighlight>), todas
              vinculadas a una cita específica para un seguimiento preciso.
            </li>
            <li>
              <span className="font-semibold">Atención Obstétrica:</span>{" "}
              Contará con un seguimiento exhaustivo del embarazo, incluyendo
              antecedentes del ingreso (
              <CodeHighlight>Antecedentes_Ingreso_Obstetricos</CodeHighlight>
              ), del padre (<CodeHighlight>Antecedentes_Padre</CodeHighlight>
              ), gineco-obstétricos (
              <CodeHighlight>Antecedentes_Gineco_Obstetricos</CodeHighlight>),
              registro de vacunas (
              <CodeHighlight>Vacunas_Obstetricas</CodeHighlight>), exámenes por
              trimestre (<CodeHighlight>Examenes_Trimestre</CodeHighlight>) e
              indicaciones específicas (
              <CodeHighlight>Indicaciones_Obstetricas</CodeHighlight>).
            </li>
            <li>
              <span className="font-semibold">Atención Estética Facial:</span>{" "}
              Permitirá registrar hábitos del paciente relevantes para
              tratamientos estéticos (
              <CodeHighlight>Habitos_Estetica</CodeHighlight>) y personalizar
              los planes de cuidado de la piel.
            </li>
          </ul>

          <h5 className="text-lg font-bold text-[#0a4c91] dark:text-[#00BAFE] mt-6">
            Tablas Adicionales para una Historia Clínica Integral
          </h5>
          <p className="text-gray-700 dark:text-gray-300">
            Para complementar el historial clínico, se añadirán tablas que
            mejorarán la trazabilidad y la gestión de la información del
            paciente:
          </p>
          <ul className="list-disc list-inside mt-3 ml-2 space-y-2 text-sm">
            <li>
              <span className="font-semibold">
                Resultados de Exámenes Complementarios:
              </span>{" "}
              Una tabla genérica (
              <CodeHighlight>Resultados_Examenes_Complementarios</CodeHighlight>
              ) para almacenar y adjuntar resultados de cualquier tipo de examen
              (laboratorio, imagenología, etc.), permitiendo cargar archivos
              externos (como PDFs) y asociarlos tanto a una cita como al
              historial completo.
            </li>
            <li>
              <span className="font-semibold">Evolución Clínica:</span> Una
              tabla (<CodeHighlight>Evolucion_Clinica</CodeHighlight>) para
              documentar la progresión del estado de salud del paciente a lo
              largo del tiempo, con notas, cambios en la medicación e
              indicaciones actualizadas.
            </li>
            <li>
              <span className="font-semibold">
                Consentimientos Informados y Documentos Anexos:
              </span>
              Tablas especializadas para la gestión legal y administrativa,
              permitiendo almacenar y rastrear consentimientos (
              <CodeHighlight>Consentimientos_Informados</CodeHighlight>) y otros
              documentos relevantes (
              <CodeHighlight>Documentos_Anexos</CodeHighlight>) de manera
              segura, con sus respectivas URL de almacenamiento.
            </li>
          </ul>

          <h5 className="text-lg font-bold text-[#0a4c91] dark:text-[#00BAFE] mt-6">
            Módulos de Gestión Administrativa
          </h5>
          <ul className="list-disc list-inside mt-3 ml-2 space-y-2 text-sm">
            <li>
              <span className="font-semibold">Módulo de Inventario:</span> Se
              creará un módulo de inventario (
              <CodeHighlight>Inventario</CodeHighlight>) para gestionar
              productos e insumos de la clínica. Permitirá registrar el{" "}
              <span className="font-bold">
                nombre, descripción, unidad de medida, cantidad, precio de
                costo, precio de venta y categoría
              </span>{" "}
              de cada ítem, facilitando el control de stock.
            </li>
            <li>
              <span className="font-semibold">Módulo de Finanzas:</span> Este
              módulo (<CodeHighlight>Finanzas</CodeHighlight>) se enfocará en el
              registro de transacciones financieras. Podrá manejar{" "}
              <span className="font-bold">ingresos y egresos</span> con
              categorías detalladas y se podrá relacionar cada transacción con
              una
              <span className="font-bold">cita</span> o un{" "}
              <span className="font-bold">paciente</span>, ofreciendo una visión
              clara y completa de la salud financiera de la clínica.
            </li>
          </ul>
        </div>
      ),
    },
  },
  "bettys-cakes": {
    title: "Tienda Postres caseros",
    description: "",
    technologies: ["React", "Tailwind", "Supabase"],
    externalLink: "https://tiendapostres-ui.vercel.app/",
    githubLink: [
      {
        enlace: "https://github.com/R3dgrave/tiendapostres-ui",
        name: "Frontend",
      },
    ],
    sections: [
      { id: "overview", title: "Visión General" },
      { id: "features", title: "Funcionalidades Clave" },
      { id: "tech-stack", title: "Tecnologías" },
    ],
    content: {
      overview: (
        <div>
          <p>
            Este es un proyecto de demostración para una pastelería, sin carrito
            de compras ya que la idea es que las ventas se realicen previa
            coordinacion por WhatsApp, entonces la pagina funcionaria mas como
            un catalogo para mostar los postres al publico. La aplicación es
            completamente responsiva y cuenta con un panel de administración
            para gestionar productos.
          </p>
          <div className="my-4 flex justify-center">
            <ZoomableImage
              src="/tiendapostres/bettys_cake_1.webp"
              alt="Captura de pantalla de la interfaz"
              className="w-[80%] rounded-lg shadow-md"
            />
          </div>
        </div>
      ),
      features: (
        <div>
          <ul className="list-disc list-inside">
            <li>Panel de administración CRUD.</li>
            <li>Catalogo de productos</li>
            <li>Productos divididos por categoria</li>
            <li>Autenticación de administrador con Supabase.</li>
          </ul>
          <div className="my-4 flex justify-center">
            <ZoomableImage
              src="/tiendapostres/bettys_cake_2.webp"
              alt="Captura de pantalla de la interfaz"
              className="w-[80%] rounded-lg shadow-md"
            />
          </div>
        </div>
      ),
      "tech-stack": (
        <div>
          <p>
            El proyecto fue desarrollado con React para el frontend, Tailwind
            CSS para los estilos y Supabase como backend-as-a-service, que
            maneja la base de datos y la autenticación.
          </p>
          <div className="my-4 flex justify-center">
            <ZoomableImage
              src="/tiendapostres/bettys_cake_3.webp"
              alt="Captura de pantalla de la interfaz"
              className="w-[80%] rounded-lg shadow-md"
            />
          </div>
          <div className="my-4 flex justify-center">
            <ZoomableImage
              src="/tiendapostres/bettys_cake_4.webp"
              alt="Captura de pantalla de la interfaz"
              className="w-[80%] rounded-lg shadow-md"
            />
          </div>
          <div className="my-4 flex justify-center">
            <ZoomableImage
              src="/tiendapostres/bettys_cake_5.webp"
              alt="Captura de pantalla de la interfaz"
              className="w-[80%] rounded-lg shadow-md"
            />
          </div>
        </div>
      ),
    },
  },
  "currency-converter": {
    title: "Proyecto Conversor de Monedas",
    description:
      "Aplicación web que permite convertir entre diferentes monedas utilizando tasas de cambio en tiempo real, con gráficos generados por la librería Chart.js. Ideal para aprender sobre consumo de APIs y manipulación del DOM con Vanilla JavaScript.",
    technologies: ["Html5", "Css3", "Javascript"],
    externalLink: "https://r3dgrave.github.io/Conversor-de-monedas-USD-EUR/",
    githubLink: [
      {
        enlace: "https://github.com/R3dgrave/Conversor-de-monedas-USD-EUR",
        name: "Ver Código",
      },
    ],
    sections: [
      { id: "overview", title: "Visión General" },
      { id: "features", title: "Características Principales" },
      { id: "tech-stack", title: "Tecnología Utilizada" },
    ],
    content: {
      overview: (
        <div>
          <p>
            Este proyecto es una aplicación de **conversión de monedas** que
            obtiene las tasas de cambio en tiempo real mediante el consumo de
            una API externa. Fue desarrollado con **HTML, CSS y JavaScript
            puro** (Vanilla JS) para demostrar habilidades en la manipulación
            del DOM y peticiones asíncronas.
          </p>
          <p className="mt-4">
            Además de la conversión, se integra la librería **Chart.js** para
            visualizar las tendencias históricas de las monedas seleccionadas en
            un gráfico interactivo.
          </p>
        </div>
      ),
      features: (
        <div className="space-y-6">
          <div className="bg-gray-100 dark:bg-[#1E293B] p-6 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm transition-colors">
            <span className="text-xl font-bold text-[#0a4c91] dark:text-[#00BAFE]">
              Conversión en Tiempo Real
            </span>
            <p className="pt-4 text-gray-700 dark:text-gray-300">
              Permite a los usuarios seleccionar dos monedas y obtener la
              conversión instantánea basada en las tasas de cambio más
              recientes.
            </p>
            <div className="my-4 flex justify-center">
              <ZoomableImage
                src="/conversorMoneda/conversor.webp"
                alt="Captura de pantalla del conversor de monedas"
                className="w-[100%] rounded-lg shadow-md"
              />
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-[#1E293B] p-6 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm transition-colors">
            <span className="text-xl font-bold text-[#0a4c91] dark:text-[#00BAFE]">
              Gráficos Históricos (Chart.js)
            </span>
            <p className="pt-4 text-gray-700 dark:text-gray-300">
              Muestra un gráfico de líneas que ilustra el comportamiento de la
              tasa de cambio a lo largo del tiempo, utilizando la popular
              librería **Chart.js**.
            </p>
            <div className="my-4 flex justify-center">
              <ZoomableImage
                src="/conversorMoneda/conversor-chart.webp"
                alt="Gráfico de Chart.js en el conversor"
                className="w-[100%] rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      ),
      "tech-stack": (
        <div>
          <p>
            El proyecto se enfoca en el uso de herramientas fundamentales del
            desarrollo web:
          </p>
          <ul className="list-disc list-inside mt-4 ml-2 space-y-2">
            <li>
              <span className="font-bold">Front-end: </span> Desarrollado
              completamente con **HTML, CSS y JavaScript**.
            </li>
            <li>
              <span className="font-bold">Consumo de API: </span> Se utiliza
              <CodeHighlight>fetch API</CodeHighlight> de JavaScript para
              realizar peticiones asíncronas a una API de tasas de cambio.
            </li>
            <li>
              <span className="font-bold">Visualización: </span> **Chart.js**
              permite generar gráficos interactivos de forma sencilla.
            </li>
          </ul>
        </div>
      ),
    },
  },

  "Development-Services": {
    title: "Servicios de Desarrollo web Profesional",
    description:
      "Página web promocional para servicios de desarrollo web, destacando habilidades y proyectos. Construida con el framework moderno Astro para un rendimiento ultrarrápido y SEO optimizado.",
    technologies: ["Astro", "Tailwind", "Typescript"],
    externalLink: "https://redgravecode.vercel.app/",
    githubLink: [
      {
        enlace: "https://github.com/R3dgrave/diegoamcode",
        name: "Ver Código",
      },
    ],
    sections: [
      { id: "overview", title: "Visión General" },
      { id: "performance", title: "Rendimiento y Astro" },
      { id: "tech-stack", title: "Tecnologías y Diseño" },
    ],
    content: {
      overview: (
        <div>
          <p>
            Este sitio web sirve como **carta de presentación profesional** para
            servicios de desarrollo web. Su principal objetivo es mostrar mi
            experiencia, habilidades y portafolio de manera clara y profesional.
          </p>
          <p className="mt-4">
            Se priorizó la **velocidad de carga y la optimización SEO** para
            asegurar un alto rendimiento. La arquitectura del proyecto permite
            una fácil actualización y mantenimiento del contenido.
          </p>
          <div className="my-4 flex justify-center">
            <ZoomableImage
              src="/developmentService/service.webp"
              alt="Captura de la landing page de servicios de desarrollo"
              className="w-[100%] rounded-lg shadow-md"
            />
          </div>
        </div>
      ),
      performance: (
        <div className="space-y-4">
          <p>
            Una de las decisiones clave fue usar **Astro**, un generador de
            sitios estáticos moderno, para maximizar el rendimiento.
          </p>
          <ul className="list-disc list-inside ml-2 space-y-2">
            <li>
              <span className="font-bold">Zero JavaScript por defecto: </span>{" "}
              Astro envía la menor cantidad de JavaScript posible, lo que
              resulta en tiempos de carga notablemente rápidos.
            </li>
            <li>
              <span className="font-bold">Arquitectura de Islas: </span> Permite
              hidratar solo las islas de interactividad (como carruseles o menús
              interactivos) con frameworks como React, dejando el resto como
              HTML/CSS estático de alto rendimiento.
            </li>
            <li>
              <span className="font-bold">Optimización SEO: </span> El marcado
              estático ayuda a los motores de búsqueda a indexar el contenido de
              manera más efectiva.
            </li>
          </ul>
        </div>
      ),
      "tech-stack": (
        <div>
          <ul className="list-disc list-inside mt-4 ml-2 space-y-2">
            <li>
              <span className="font-bold">Framework: </span> **Astro** para un
              enfoque de contenido primero y un alto rendimiento.
            </li>
            <li>
              <span className="font-bold">Estilos: </span> **Tailwind CSS** para
              un desarrollo rápido y flexible del diseño responsivo.
            </li>
            <li>
              <span className="font-bold">Lenguaje: </span> **TypeScript** para
              agregar seguridad de tipos y mejorar la escalabilidad del código.
            </li>
          </ul>
        </div>
      ),
    },
  },

  "landing-page": {
    title: "Landing Page",
    description:
      "Landing page de programador freelance, diseñada para practicar el diseño responsivo avanzado y la creación de componentes reutilizables con React y Tailwind CSS.",
    technologies: ["React", "Tailwind", "Javascript"],
    externalLink:
      "https://r3dgrave.github.io/landingpage-programadorfreelance/",
    githubLink: [
      {
        enlace: "https://github.com/R3dgrave/landingpage-programadorfreelance",
        name: "Ver Código",
      },
    ],
    sections: [
      { id: "overview", title: "Visión General" },
      { id: "design", title: "Diseño y Responsive" },
      { id: "tech-stack", title: "Tecnología Utilizada" },
    ],
    content: {
      overview: (
        <div>
          <p>
            Esta landing page fue construida con el objetivo de simular una
            **página de servicios profesional**. El foco del desarrollo estuvo
            en dominar las habilidades de **diseño responsivo** y la estructura
            de componentes en **React**.
          </p>
          <p className="mt-4">
            A través de secciones claras y un llamado a la acción (CTA) bien
            definido, busca guiar al usuario a través de los servicios
            ofrecidos.
          </p>
        </div>
      ),
      design: (
        <div className="space-y-4">
          <p>
            El diseño se creó directamente en el código utilizando las
            utilidades de Tailwind CSS, prestando especial atención a cómo se
            adapta a diferentes tamaños de pantalla.
          </p>
          <ul className="list-disc list-inside ml-2 space-y-2">
            <li>
              <span className="font-bold">Mobile First: </span> Se siguió la
              metodología *mobile first* para asegurar una excelente experiencia
              en dispositivos móviles.
            </li>
            <li>
              <span className="font-bold">Componentes Reutilizables: </span> Se
              modularizó el diseño en componentes de React (e.g., Header, CTA,
              Testimonios) para facilitar el mantenimiento y la escalabilidad.
            </li>
          </ul>
          <div className="my-4 flex justify-center">
            <ZoomableImage
              src="/landing/landing.webp"
              alt="Captura de la landing page"
              className="w-[100%] rounded-lg shadow-md"
            />
          </div>
        </div>
      ),
      "tech-stack": (
        <div>
          <ul className="list-disc list-inside mt-4 ml-2 space-y-2">
            <li>
              <span className="font-bold">Framework: </span> **React** para la
              estructura de la interfaz de usuario.
            </li>
            <li>
              <span className="font-bold">Estilos: </span> **Tailwind CSS** para
              un sistema de diseño basado en utilidades.
            </li>
            <li>
              <span className="font-bold">Despliegue: </span> Alojado en
              **GitHub Pages**.
            </li>
          </ul>
        </div>
      ),
    },
  },

  "random-color": {
    title: "Color Aleatorio",
    description:
      "Generador de colores hexadecimales aleatorios. Una sencilla aplicación web construida con HTML, CSS y JavaScript para practicar la generación de datos y manipulación del DOM.",
    technologies: ["Html5", "Css3", "Javascript"],
    externalLink: "https://r3dgrave.github.io/ColorHexAleatorios-Javascript/",
    githubLink: [
      {
        enlace: "https://github.com/R3dgrave/ColorHexAleatorios-Javascript",
        name: "Ver Código",
      },
    ],
    sections: [
      { id: "overview", title: "Visión General" },
      { id: "logic", title: "Lógica de Generación" },
      { id: "tech-stack", title: "Tecnología Utilizada" },
    ],
    content: {
      overview: (
        <div>
          <p>
            **Color Aleatorio** es un proyecto pequeño pero fundamental para
            practicar la generación de datos dinámicos en el cliente. La
            aplicación tiene un único propósito: generar y mostrar un color
            hexadecimal al azar con solo presionar un botón.
          </p>
          <p className="mt-4">
            Fue un ejercicio para comprender cómo manipular el DOM para
            actualizar tanto el estilo de fondo como el texto que muestra el
            código hexadecimal.
          </p>
          <div className="my-4 flex justify-center">
            <ZoomableImage
              src="/landing/colorhex.webp"
              alt="Captura de la aplicación de color aleatorio"
              className="w-[100%] rounded-lg shadow-md"
            />
          </div>
        </div>
      ),
      logic: (
        <div className="space-y-4">
          <p>
            El corazón de esta aplicación reside en la función de JavaScript que
            genera el código hexadecimal de 6 dígitos.
          </p>
          <ul className="list-disc list-inside ml-2 space-y-2">
            <li>
              <span className="font-bold">Algoritmo: </span> Se genera un número
              aleatorio y se convierte a base 16 (hexadecimal).
            </li>
            <li>
              <span className="font-bold">Manipulación del DOM: </span> El color
              generado se asigna al `background-color` del body y el código se
              inserta en un elemento de texto.
            </li>
          </ul>
        </div>
      ),
      "tech-stack": (
        <div>
          <p>
            Este proyecto está completamente construido con los fundamentos de
            la web:
          </p>
          <ul className="list-disc list-inside mt-4 ml-2 space-y-2">
            <li>
              <span className="font-bold">Front-end: </span> **HTML, CSS, y
              JavaScript** puro.
            </li>
          </ul>
        </div>
      ),
    },
  },

  calculator: {
    title: "Calculadora",
    description:
      "Calculadora web básica desarrollada con React. Permite realizar operaciones aritméticas simples con una interfaz intuitiva, sirviendo como una práctica de la gestión de estado de React.",
    technologies: ["React", "Html5", "Css3", "Javascript"],
    externalLink: "https://r3dgrave.github.io/YourCalculator/",
    githubLink: [
      {
        enlace: "https://github.com/R3dgrave/YourCalculator",
        name: "Ver Código",
      },
    ],
    sections: [
      { id: "overview", title: "Visión General" },
      { id: "react-state", title: "Gestión de Estado con React" },
      { id: "tech-stack", title: "Tecnología Utilizada" },
    ],
    content: {
      overview: (
        <div>
          <p>
            Una **calculadora funcional** es un proyecto clásico para dominar
            cualquier framework. Esta versión, construida con **React**, permite
            realizar las operaciones aritméticas básicas (+, -, x, /).
          </p>
          <p className="mt-4">
            El principal enfoque fue la correcta **gestión de la lógica de
            entrada** (manejo de números, operadores y el botón de igual) y la
            **actualización del estado** de la pantalla.
          </p>
          <div className="my-4 flex justify-center">
            <ZoomableImage
              src="/landing/calculadora.webp"
              alt="Captura de la calculadora web"
              className="w-[100%] rounded-lg shadow-md"
            />
          </div>
        </div>
      ),
      "react-state": (
        <div className="space-y-4">
          <p>
            El desafío central fue gestionar el flujo de datos y el estado de la
            aplicación.
          </p>
          <ul className="list-disc list-inside ml-2 space-y-2">
            <li>
              <span className="font-bold">Hooks: </span> Se utiliza el hook
              <CodeHighlight>useState</CodeHighlight> para manejar la entrada de
              la calculadora, el operador actual y el número anterior.
            </li>
            <li>
              <span className="font-bold">Lógica de Cálculo: </span> La lógica
              para evaluar la expresión se encapsula en una función manejadora,
              asegurando que los estados se actualicen correctamente y que la
              interfaz se re-renderice de forma eficiente.
            </li>
          </ul>
        </div>
      ),
      "tech-stack": (
        <div>
          <ul className="list-disc list-inside mt-4 ml-2 space-y-2">
            <li>
              <span className="font-bold">Framework: </span> **React**
            </li>
            <li>
              <span className="font-bold">Estilos: </span> **CSS/HTML** simple
              para un diseño de matriz de botones tradicional.
            </li>
          </ul>
        </div>
      ),
    },
  },

  "quick-notes": {
    title: "Notas Rápidas",
    description:
      "Aplicación web para tomar notas rápidas, desarrollada con React. Permite crear, editar y eliminar notas de forma sencilla, incluyendo un editor de texto enriquecido con Quill.js.",
    technologies: ["React", "Html5", "Css3", "Javascript"],
    externalLink: "https://r3dgrave.github.io/YourNotebook/",
    githubLink: [
      {
        enlace: "https://github.com/R3dgrave/YourNotebook",
        name: "Ver Código",
      },
    ],
    sections: [
      { id: "overview", title: "Visión General" },
      { id: "editor", title: "Integración de Quill.js" },
      { id: "tech-stack", title: "Tecnología Utilizada" },
    ],
    content: {
      overview: (
        <div>
          <p>
            **Notas Rápidas** es una aplicación de productividad simple que
            simula un cuaderno digital. Permite a los usuarios crear, almacenar,
            editar y eliminar notas, con el valor añadido de un **editor de
            texto enriquecido**.
          </p>
          <p className="mt-4">
            El principal aprendizaje en este proyecto fue la **integración de
            una librería externa compleja** como Quill.js en un entorno de
            React, incluyendo la persistencia de datos complejos.
          </p>
        </div>
      ),
      editor: (
        <div className="space-y-4">
          <span className="text-xl font-bold text-[#0a4c91] dark:text-[#00BAFE]">
            Editor de Texto Enriquecido
          </span>
          <p>
            Para ofrecer una mejor experiencia al usuario, se integró
            **Quill.js**, un editor de código abierto, permitiendo formatos como
            negrita, cursiva, listas y encabezados dentro de las notas.
          </p>
          <ul className="list-disc list-inside ml-2 space-y-2">
            <li>
              <span className="font-bold">Manejo de Contenido: </span> Quill.js
              maneja el contenido en un formato propio (`Delta` o `HTML`), lo
              que requiere un manejo cuidadoso del estado de React y la
              conversión para su almacenamiento.
            </li>
            <li>
              <span className="font-bold">Persistencia: </span> Las notas se
              almacenan en el navegador (
              <CodeHighlight>localStorage</CodeHighlight>) para mantener la
              información entre sesiones.
            </li>
          </ul>
          <div className="my-4 flex justify-center">
            <ZoomableImage
              src="/landing/notas.webp"
              alt="Captura de la aplicación de notas con editor Quill"
              className="w-[100%] rounded-lg shadow-md"
            />
          </div>
        </div>
      ),
      "tech-stack": (
        <div>
          <ul className="list-disc list-inside mt-4 ml-2 space-y-2">
            <li>
              <span className="font-bold">Framework: </span> **React**
            </li>
            <li>
              <span className="font-bold">Librería de Editor: </span>{" "}
              **Quill.js**
            </li>
          </ul>
        </div>
      ),
    },
  },
};
