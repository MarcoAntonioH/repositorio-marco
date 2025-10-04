import { Link } from "react-scroll";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar({ open, setOpen }) {
  const links = [
    { name: "Inicio", to: "home" },
    { name: "Servicios", to: "services" },
    { name: "Estudios", to: "studies" },
    { name: "Proyectos", to: "projects" },
    
  ];

  return (
    <nav className="fixed top- w-full bg-teal-600 text-white flex items-center justify-between px-10 py-6 shadow-md z-[9999]">
      <div className="flex items-center gap-5">
        <button
          onClick={() => setOpen(!open)}
          className="focus:outline-none hover:scale- transition-transform"
        >
          <div className="space-y-1">
            <span className="block w-8 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-8 h-0.5 bg-white"></span>
          </div>
        </button>
        <span className="font-bold text-3xl">MarcoDev</span>
      </div>

      <ul className="hidden md:flex gap-5 text-3xl">
        {links.map(link => (
          <li key={link.to}>
            <Link
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer font-medium text-2xl hover:font-bold hover:underline hover:decoration-2 hover:underline-offset-4 transition-all  "
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <HamburgerMenu open={open} setOpen={setOpen} links={links} />
    </nav>
  );
}
