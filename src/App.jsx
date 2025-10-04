import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Studies from "./pages/Studies"; 
import { useState } from "react";
import Services from "./pages/Services";
import Projects from "./pages/Projects";


export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="overflow-x-hidden">
    
      <Navbar open={menuOpen} setOpen={setMenuOpen} />

      
      <div
        className={`transition-transform duration-300 ${
          menuOpen ? "translate-x-64" : ""
        }`}
      >
        <Home />

        <section
          id="services"
          className="w-full  bg-gray-100 flex items-center justify-center"
        >
          <Services />
        </section>

        

       
        <section
          id="studies"
          className="w-full  min-h-screen bg-gray-300 flex items-center justify-center"
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
    </div>
  );
}
