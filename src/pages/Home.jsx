import { motion } from "framer-motion";

export default function Home() {
  const techs = [
    {
      name: "JavaScript",
      src: "https://res.cloudinary.com/djijf0myw/image/upload/v1758329555/javascript_original_logo_icon_146455_sxe9b7.png",
    },
    {
      name: "Node.js",
      src: "https://res.cloudinary.com/djijf0myw/image/upload/v1758329554/Node.js_logo.svg_s403mg.png",
    },
    {
      name: "React",
      src: "https://res.cloudinary.com/djijf0myw/image/upload/v1758329553/React-icon.svg_i2rsjo.png",
    },
    {
      name: "Express.js",
      src: "https://res.cloudinary.com/djijf0myw/image/upload/v1758840880/Express_fozxf4.png",
    },
    {
      name: "Socket.io",
      src: "https://res.cloudinary.com/djijf0myw/image/upload/v1758840879/Socket-io.svg_ajb6zz.png",
    },
    {
      name: "Sequelize",
      src: "https://res.cloudinary.com/djijf0myw/image/upload/v1758840124/sequelize_zilotx.png",
    },
    {
      name: "PostgreSQL",
      src: "https://res.cloudinary.com/djijf0myw/image/upload/v1758840087/Postgresql_jj7qyt.png",
    },
    {
      name: "Scrum",
      src: "https://res.cloudinary.com/djijf0myw/image/upload/v1758840068/ScrumLogo-293x300_sg6bya.png",
    },
    {
      name: "HTML5",
      src: "https://res.cloudinary.com/djijf0myw/image/upload/v1758840068/HTML5_logo_and_wordmark.svg_fyzjbb.png",
    },
    {
      name: "CSS3",
      src: "https://res.cloudinary.com/djijf0myw/image/upload/v1758840067/CSS3_logo.svg_ve23b5.png",
    },
    {
      name: "Git",
      src: "https://res.cloudinary.com/djijf0myw/image/upload/v1758840065/Git_lmnokr.png",
    },
    {
      name: "GitHub",
      src: "https://res.cloudinary.com/djijf0myw/image/upload/v1758337155/GitHub_Invertocat_Logo.svg_dpzzdu.png",
    },
    {
      name: "REST APIs",
      src: "https://res.cloudinary.com/djijf0myw/image/upload/v1758840061/restapi_or6kiy.png",
    },
    {
      name: "Laravel",
      src: "https://res.cloudinary.com/djijf0myw/image/upload/v1758840054/Laravel.svg_rjyzzo.png",
    },
    {
      name: "MySQL",
      src: "https://res.cloudinary.com/djijf0myw/image/upload/v1758840053/mysql_i7fzer.png",
    },
    {
      name: "SQL Server",
      src: "https://res.cloudinary.com/djijf0myw/image/upload/v1758840051/Microsoft_SQL_Server.svg_rhpdyl.png",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center 
                 bg-gradient-to-br from-gray-100 to-gray-200 px-8 pt-24 text-center"
    >
      {/* Bio */}
      <motion.div
        initial={{ x: -150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-3xl space-y-6"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900">
          ¡Hola! Soy <span className="text-teal-500">Marco Antonio</span> 👋
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed">
          Programador <span className="font-semibold">backend</span> con experiencia en{" "}
          <span className="font-semibold">JavaScript</span>,{" "}
          <span className="font-semibold">Node.js</span> y{" "}
          <span className="font-semibold">PostgreSQL</span>.  
          Conocimientos en React, C# y PHP.  
          <span className="font-medium"> Proactivo</span> y en constante aprendizaje.
        </p>
        <p className="text-gray-600 italic">
          Transformando ideas en experiencias digitales.
        </p>
      </motion.div>

      {/* Tecnologías */}
      <motion.div
        initial={{ x: 150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-12 max-w-5xl"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Tecnologías
        </h2>
        <motion.div
          className="flex flex-wrap gap-8 justify-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 },
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
              className="flex flex-col items-center space-y-2 group"
              whileHover={{ scale: 1.1 }}
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
