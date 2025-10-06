import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Studies from "./pages/Studies";
import { useState } from "react";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import RobotAnimation from "./components/botChat";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="overflow-x-hidden relative min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar open={menuOpen} setOpen={setMenuOpen} />

      {/* Contenido principal */}
      <div
        className={`transition-transform duration-300 ${
          menuOpen ? "translate-x-64" : ""
        }`}
      >
        <Home />

        <section
          id="services"
          className="w-full bg-gray-100 flex items-center justify-center"
        >
          <Services />
        </section>

        <section
          id="studies"
          className="w-full min-h-screen bg-gray-300 flex items-center justify-center"
        >
          <Studies />
        </section>

        <section
          id="projects"
          className="w-full min-h-screen bg-gray-200 flex items-center justify-center"
        >
          <Projects />
        </section>
      </div>

      {/* 🤖 Bot animado flotante */}
      <div className="fixed bottom-6 right-6 z-50">
        <RobotAnimation />
      </div>
    </div>
  );
}
