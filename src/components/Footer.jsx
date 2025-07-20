import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full px-2 md:px-24 py-6 bg-gradient-to-t">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* COPYRIGHT */}
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} MovieInfo. All rights reserved.
        </p>

        {/* ICONS */}
        <div className="flex items-center gap-5 text-gray-800 text-lg">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:you@example.com"
            className="hover:text-red-500 transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}
