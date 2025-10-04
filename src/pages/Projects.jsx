import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("https://backend-marco.onrender.com/proyectos");
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Error al cargar proyectos:", error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-extrabold text-center mb-14 text-gray-900">
        🚀 Mis <span className="text-teal-600">Proyectos</span>
      </h2>

    
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((proyecto, i) => (
          <motion.div
            key={proyecto.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ scale: 1.05, rotate: -1 }}
            className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 
                       shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 
                       flex flex-col justify-between"
          >
       
            <h3 className="text-2xl font-bold text-teal-600 mb-4">
              {proyecto.nombre}
            </h3>

            
            <p className="text-gray-700 flex-grow leading-relaxed">
              {proyecto.descripcion}
            </p>

            
            <div className="mt-6">
  <a
    href={proyecto.link}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl 
               bg-gradient-to-r from-teal-100 to-teal-800 text-white font-semibold 
               shadow-lg shadow-teal-300/40 
               hover:scale-105 hover:shadow-xl hover:from-teal-600 hover:to-blue-600 
               transition-all duration-300 ease-in-out"
  >
    🔗 Ver Proyecto
  </a>
</div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}
