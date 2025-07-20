/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { FaLightbulb } from "react-icons/fa6";

import { motion } from "framer-motion";

export default function Navbar({ isDarkMode, setIsDarkMode }) {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="absolute top-0 left-0 z-20 w-full h-15 flex justify-between items-center p-5 px-2 md:px-24"
    >
      <Link to="/" className="text-3xl font-logo font-bold text-primary">
        MovieInfo - 2.0
      </Link>

      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="button-handle-theme w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
        aria-label="Toggle Dark Mode"
      >
        <i>
          <FaLightbulb className="text-xl duration-200" />
        </i>
      </button>
    </motion.nav>
  );
}
