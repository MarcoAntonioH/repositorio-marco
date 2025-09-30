import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Studies() {
  const experiences = [
    {
      title: "Programador",
      company: "Municipalidad de San Juan de Lurigancho",
      date: "10 Septiembre 2024 – 1 Marzo 2024",
      points: [
        "Desarrollo de aplicaciones web “Tareaje” para control de personal.",
        "Sistema web de Fiscalización con flujo completo de control de datos.",
        "APIs REST (PATCH, DELETE, PUT, POST) y arquitectura modular con handlers y modelos.",
        "Tecnologías: Node.js, Express.js, Sequelize, PostgreSQL, HTML, CSS.",
      ],
    },
    {
      title: "Programador",
      company: "Amerik AG",
      date: "Agosto 2023 - Junio 2024",
      points: [
        "Desarrollo de una aplicación web que mejoró la gestión de almacenes.",
        "Implementación de una base de datos MySQL eficiente, mejorando tiempos de respuesta.",
      ],
    },
    {
      title: "Programador",
      company: "Cesar Atilano Marín Aguirre",
      date: "Abril 2023 - Junio 2023",
      points: [
        "Desarrollo de una base de datos personalizada que facilitó el almacenamiento y recuperación de información.",
        "Optimización de procesos internos y flujo de trabajo.",
        "Tecnologías: Laravel 7, MySQL, PHP, Blade, MVC.",
      ],
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide solo en desktop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % experiences.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + experiences.length) % experiences.length);
  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % experiences.length);

  return (
    <motion.div
      className="flex flex-col lg:flex-row w-11/12 lg:w-4/5 max-w-6xl mx-auto gap-8 mt-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* ==================== Estudios ==================== */}
      <motion.div
        className="w-full lg:w-1/2 flex flex-col gap-6"
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4 border-b-2 pb-2 border-teal-500">
          Estudios
        </h2>

        <motion.div
          className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-xl font-semibold">
            Técnico en Desarrollo de Software
          </h3>
          <p className="text-gray-500 mb-2">SENATI | 2021 - 2024</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              Formación en desarrollo de aplicaciones web y de escritorio, bases de datos y arquitectura de software.
            </li>
            <li>
              Proyectos académicos con Java, PHP, JavaScript, Node.js, C#, MySQL, PostgreSQL y frameworks modernos como Laravel.
            </li>
            <li>
              Conocimientos en metodologías ágiles (Scrum), control de versiones con Git/GitHub y buenas prácticas de programación.
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-xl font-semibold">Ingeniería de Software</h3>
          <p className="text-gray-500">UTP | convalidación – II CICLO</p>
        </motion.div>
      </motion.div>

      {/* ==================== Experiencia Laboral ==================== */}
      <motion.div
        className="w-full lg:w-1/2 flex flex-col gap-4"
        initial={{ x: 80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4 border-b-2 pb-2 border-teal-500">
          Experiencia Laboral
        </h2>

        {/* -------- Desktop: carrusel clásico -------- */}
        <div className="hidden lg:flex flex-col gap-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="p-6 bg-gray-100 shadow-md rounded-xl min-h-[320px]"
            >
              <h3 className="text-xl font-semibold">{experiences[current].title}</h3>
              <p className="text-gray-500 mb-2">
                {experiences[current].company} | {experiences[current].date}
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {experiences[current].points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between mt-4 gap-2">
            <button
              onClick={prevSlide}
              className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition"
            >
              Anterior
            </button>
            <button
              onClick={nextSlide}
              className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition"
            >
              Siguiente
            </button>
          </div>

          <div className="flex justify-center mt-3 space-x-2 flex-wrap">
            {experiences.map((_, idx) => (
              <span
                key={idx}
                className={`w-3 h-3 rounded-full transition-colors ${
                  idx === current ? "bg-teal-500" : "bg-gray-400"
                }`}
              ></span>
            ))}
          </div>
        </div>

        {/* -------- Mobile: scroll horizontal -------- */}
        <div className="flex lg:hidden overflow-x-auto snap-x snap-mandatory gap-4 scrollbar-hide">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="flex-shrink-0 w-80 p-6 bg-gray-100 shadow-md rounded-xl snap-start"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-lg font-semibold">{exp.title}</h3>
              <p className="text-gray-500 mb-2">
                {exp.company} | {exp.date}
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
