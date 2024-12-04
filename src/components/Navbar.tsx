import { Link } from "react-router";
import { navLinks } from "../constants/navLinks";

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-12 border-b border-secondary-1 flex justify-between items-center">
      <Link to="/" className="font-bold text-3xl">
        TEST LOGO
      </Link>

      <div className="flex items-center gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.url}
            to={link.url}
            className="hover:text-primary-2 text-primary-1 font-semibold transition-colors duration-150"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
