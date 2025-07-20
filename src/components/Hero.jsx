/* eslint-disable no-unused-vars */
import { useState } from "react";
// Library animation fade in, slide
import { delay, motion } from "framer-motion";

import SearchInput from "./SearchMovie.jsx/SearchInput";

export default function Hero() {
  const [nameMovie, setNameMovie] = useState("");

  const containerAnimation = {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <motion.section
      variants={containerAnimation}
      initial="hidden"
      animate="show"
      id="hero"
      className="w-full md:h-screen text-white flex flex-col md:justify-between py-10 md:py-30"
    >
      {/* Greeting */}
      <div className="text-primary flex items-center gap-1 text-xl">
        <span className="waver">👋</span>
        <motion.p variants={item} className="text-gray">
          Hey! Selamat Datang di{" "}
          <span className="font-logo font-bold">Movie Info</span>,
        </motion.p>
      </div>

      {/* Heading */}
      <motion.div variants={item} className="w-full">
        <h1 className="text-5xl text-dark md:text-7xl font-bold leading-tight mt-5">
          <span className="text-primary">Temukan</span> dan{" "}
          <span className="text-primary">Tonton</span> Film Favoritmu
          <br />
          <span className="text-secondary">Dimana</span> &{" "}
          <span className="text-secondary">Kapan</span> saja!
        </h1>
      </motion.div>

      {/* Bottom Content */}
      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end mt-10 md:mt-0 ">
        {/* Left: Social Links */}
        <motion.div
          variants={item}
          className="w-100 grid grid-cols-4 md:grid-cols-2 nd:gap-2 lg:grid-cols-4 text-xs space-x-6 text-dark"
        >
          <a href="#" className="hover:underline">
            GITHUB ↗
          </a>
          <a href="#" className="hover:underline">
            Twiter ↗
          </a>
          <a href="#" className="hover:underline">
            INSTAGRAM ↗
          </a>
          <a href="#" className="hover:underline">
            GMAIL ↗
          </a>
        </motion.div>

        {/* Right: Description + Button */}
        <div className="w-full md:w-150 text-gray mt-10">
          <motion.p variants={item} className="mb-4 ">
            Kami membuat pengalaman menonton dan mencari film menjadi lebih
            cepat, mudah, dan menyenangkan. Temukan informasi film favoritmu,
            jelajahi ribuan judul, dan nikmati pengalaman menonton yang mulus —
            semuanya di satu tempat.
          </motion.p>

          <motion.span variants={item} className="flex ">
            <SearchInput
              textBtn={"Cari Film"}
              urlLink={`/film/${nameMovie}`}
              setNameMovie={setNameMovie}
            />
          </motion.span>
        </div>
      </div>
    </motion.section>
  );
}
