import { Link } from "react-router";
import { navLinks } from "../constants/navLinks";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <section className="w-full h-full flex items-center justify-center min-h-[calc(100vh-68.8px)]  flex-col gap-8">
      <h1 className="text-7xl text-primary-1">Welcome to the home page</h1>
      <div className="flex items-center justify-between w-full gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.url}
            to={link.url}
            className="border border-primary-1 rounded-md w-full p-4 flex items-center justify-between hover:scale-105 transition-transform duration-200"
          >
            {link.title}
            <FaArrowRight />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Home;
