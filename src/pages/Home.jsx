import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import techs from "../data/tech";

function AnimatedNumber({ value }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: "easeOut",
    });
    return controls.stop;
  }, [value, count]);

  return (
    <motion.span
      className="drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-400"
    >
      {rounded}
    </motion.span>
  );
}

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center bg-white px-8 pt-24 text-center"
    >
    
      <motion.div
        initial={{ y: -100, opacity: 0, scale: 0.8 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: "spring" }}
        className="relative z-10 max-w-3xl space-y-6"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900">
          ¡Hola! Soy{" "}
          <motion.span
            initial={{ backgroundSize: "0% 100%" }}
            animate={{ backgroundSize: "100% 100%" }}
            transition={{ duration: 2 }}
            className="bg-gradient-to-r from-teal-500 to-cyan-400 bg-clip-text text-transparent"
          >
            Marco Antonio
          </motion.span>{" "}
          👋
        </h1>
        <motion.p
          className="text-xl text-gray-700 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Programador <span className="font-semibold">backend</span> con
          experiencia en <span className="font-semibold">JavaScript</span>,{" "}
          <span className="font-semibold">Node.js</span> y{" "}
          <span className="font-semibold">PostgreSQL</span>.  
          Conocimientos en React, C# y PHP.  
          <span className="font-medium"> Proactivo</span> y en constante aprendizaje.
        </motion.p>
        <motion.p
          className="text-gray-600 italic"
          animate={{ opacity: [0, 1, 0.7, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          ✨ Transformando ideas en experiencias digitales.
        </motion.p>
      </motion.div>

      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 flex gap-12 justify-center items-center mt-12"
      >
        <motion.div whileHover={{ scale: 1.1 }} className="text-center">
          <p className="text-5xl font-extrabold">
            <AnimatedNumber value={2} />+
          </p>
          <p className="text-gray-700 font-medium">Años de experiencia</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="text-center">
          <p className="text-5xl font-extrabold">
            <AnimatedNumber value={4} />+
          </p>
          <p className="text-gray-700 font-medium">Proyectos completados</p>
        </motion.div>
      </motion.div>

      
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative z-10 mt-16 max-w-5xl"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          🚀 Tecnologías
        </h2>
        <motion.div
          className="flex flex-wrap gap-10 justify-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {techs.map((tech) => (
            <motion.div
              key={tech.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              whileHover={{
                scale: 1.2,
                rotate: [0, 5, -5, 0],
              }}
              className="flex flex-col items-center space-y-2 group"
            >
              <img
                src={tech.src}
                alt={tech.name}
                className="w-20 h-20 object-contain drop-shadow-md"
              />
              <span className="text-gray-700 font-medium text-sm group-hover:text-teal-600 transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
