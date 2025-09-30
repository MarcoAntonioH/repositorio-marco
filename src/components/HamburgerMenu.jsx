import { Link } from "react-scroll";

export default function HamburgerMenu({ open, setOpen, links }) {
  return (
    <div
  className={`fixed top-0 left-0 h-full w-69 bg-teal-500 text-white font-bold transform
    ${open ? "translate-x-0" : "-translate-x-full"}
    transition-transform duration-300 ease-in-out z-40`}
>
  <div className="p-4">
    <button
      onClick={() => setOpen(false)}
      className="mb-4 text-2xl font-bold hover:text-black"
    >
      ×
    </button>

    <ul className="flex flex-col gap-4">
      {links.map((link) => (
        <li key={link.to}>
          <Link
            to={link.to}
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer hover:text-gray-800 font-bold"
            onClick={() => setOpen(false)}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>

    {/* Datos de contacto */}
    <div className="mt-8 border-t border-black/20 pt-4 text-sm space-y-2">
      <p>📞 +51 955248849</p>
      <p>📧 marcohuaman2604@gmail.com</p>
      <p>📍 Santa Anita, Perú</p>

      {/* Botones de GitHub y LinkedIn */}
      <div className="flex flex-col gap-2 mt-2">
        <a
          href="https://github.com/MarcoAntonioH"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-3 py-2 bg-black/10 rounded hover:bg-black/20 transition font-bold"
        >
          <img
            src="https://res.cloudinary.com/djijf0myw/image/upload/v1758337155/GitHub_Invertocat_Logo.svg_dpzzdu.png"
            alt="GitHub"
            className="w-6 h-6"
          />
          <span>GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/marco-huaman-garamende-27289b35a/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-3 py-2 bg-black/10 rounded hover:bg-black/20 transition font-bold"
        >
          <img
            src="https://res.cloudinary.com/djijf0myw/image/upload/v1758337156/linkedin-redes-contacto_q2ar9p.png"
            alt="LinkedIn"
            className="w-6 h-6"
          />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  </div>
</div>


  );
}
