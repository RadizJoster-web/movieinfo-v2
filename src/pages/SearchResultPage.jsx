import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import SearchInput from "../components/SearchMovie.jsx/SearchInput";
import FilterSelector from "../components/SearchMovie.jsx/FiltersSelector";
import CardList from "../components/SearchMovie.jsx/CardList";

export default function SearchResultPage() {
  const { title } = useParams();
  const [nameMovie, setNameMovie] = useState("");
  const [movies, setmovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${
            import.meta.env.VITE_API_KEY
          }&query=${encodeURIComponent(title)}`
        );

        const data = await res.json();

        if (!res.ok) {
          setError(data.status_message || "Gagal mengambil data");
        } else {
          setmovies(data.results);
        }
      } catch (err) {
        console.error("Gagal mengambil data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [title]); // setiap ini berubah, fetch ulang

  return (
    <form className="flex flex-col justify-start gap-10 lg:gap-20 min-h-screen w-full px-2 md:px-24 pt-20">
      {/* Search bar */}
      <SearchInput
        textBtn={"Cari Film"}
        urlLink={`/film/${nameMovie}`}
        setNameMovie={setNameMovie}
      />

      {/* Main Content */}
      <div className="flex flex-col md:flex-row pb-5">
        {/* Filter (aside) */}
        <aside className="w-full md:w-80 lg:pr-10 pb-10">
          <FilterSelector
            handleMovieDataFilter={setmovies}
            title={title}
            setLoading={setLoading}
            setError={setError}
          />
        </aside>

        {/* Result Card */}
        <section className="w-full md:w-full">
          <h1 className="font-bold text-xl mb-4">
            {loading ? "Loading..." : "Hasil Pencarian"}
          </h1>
          <CardList movies={movies} error={error} />
        </section>
      </div>
    </form>
  );
}
