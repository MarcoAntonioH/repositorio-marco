import { Link } from "react-scroll";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar({ open, setOpen }) {
  const links = [
    { name: "Inicio", to: "home" },
    { name: "Proyectos", to: "projects" },
    { name: "Estudios", to: "studies" },
    { name: "Servicios", to: "services" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-teal-600 text-white flex items-center justify-between px-9 py-3 shadow-md z-[9999]">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setOpen(!open)}
          className="focus:outline-none hover:scale-110 transition-transform"
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
        <span className="font-bold text-lg">MarcoDev</span>
      </div>

      <ul className="hidden md:flex gap-6">
        {links.map(link => (
          <li key={link.to}>
            <Link
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-gray-800 transition-colors font-bold"
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
