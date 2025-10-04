
import React from "react";
import { motion } from "framer-motion";

export default function Services() {
  const servicios = [
    {
      title: "Desarrollo Web Personalizado",
      description:
        "Creo páginas web modernas, adaptadas a tus necesidades, con HTML, CSS, JavaScript y React.",
      emoji: "💻",
    },
    {
      title: "Backend y APIs",
      description:
        "Desarrollo servidores, APIs REST y manejo de bases de datos con Node.js, Express, Sequelize y PostgreSQL.",
      emoji: "🛠️",
    },
    {
      title: "Tiendas Online / E-commerce",
      description:
        "Implementación de carritos de compra, gestión de productos y pagos para negocios online.",
      emoji: "🛒",
    },
    {
      title: "Mantenimiento y Optimización",
      description:
        "Mejoro el rendimiento, seguridad y escalabilidad de tus aplicaciones web existentes.",
      emoji: "⚡",
    },
    {
      title: "Asesoría Tecnológica",
      description:
        "Revisión de proyectos, sugerencias de mejoras y recomendaciones sobre buenas prácticas.",
      emoji: "📈",
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen bg-gray-100 flex flex-col items-center px-8 py-24"
    >
     
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold mb-12 text-gray-900"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Mis Servicios
      </motion.h1>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {servicios.map((service, index) => (
          <motion.div
            key={service.title}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition hover:scale-105"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}
          >
            <div className="text-3xl mb-4">{service.emoji}</div>
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
