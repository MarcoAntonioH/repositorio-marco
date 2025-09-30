import { useEffect, useState } from "react";

export default function Proyectos() {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    fetch("https://backend-marco.onrender.com/proyectos") 
      .then((res) => res.json())
      .then((data) => setProyectos(data))
      .catch((err) => console.error("Error cargando proyectos:", err));
  }, []);

  return (
    <div>
      <h2>Mis Proyectos</h2>
      <ul>
        {proyectos.map((proyecto) => (
          <li key={proyecto.id}>
            <h3>{proyecto.nombre}</h3>
            <p>{proyecto.descripcion}</p>
            <a href={proyecto.link} target="_blank" rel="noreferrer">
              Ver proyecto
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
