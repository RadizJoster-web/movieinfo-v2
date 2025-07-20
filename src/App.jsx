import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

// Import Components
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import SearchResultPage from "./pages/SearchResultPage";
import MoviePage from "./pages/MovieDetail";
import NotFoundPage from "./pages/404";
import Footer from "./components/Footer";
import { FaBullseye } from "react-icons/fa6";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <main>
      <Router>
        <Navbar setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
        {/*  */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/film/:title" element={<SearchResultPage />} />
          <Route path="/film" element={<SearchResultPage />} />
          <Route path="/film/detail/:id/:title" element={<MoviePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
      <Footer />
    </main>
  );
}

export default App;
