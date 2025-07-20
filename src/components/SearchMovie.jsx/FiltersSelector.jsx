import { useEffect, useState } from "react";

import CustomDropdown from "./CustomDropDown";

export default function FiltersSelector({
  handleMovieDataFilter,
  setLoading,
  setError,
}) {
  // State untuk Genre
  const [genres, setGenres] = useState([]);
  const [errorGenres, setErrorGenres] = useState(null);
  const [loadingGenres, setLoadingGenres] = useState(true);

  // Ambil Data Genre
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${
            import.meta.env.VITE_API_KEY
          }&language=en-US`
        );
        const data = await res.json();

        if (res.ok) {
          setGenres(data.genres);
        } else {
          setErrorGenres(data.status_message || "Gagal mengambil data");
        }
      } catch (err) {
        console.log(err);
        setErrorGenres("Terjadi Kesalahan");
      } finally {
        setLoadingGenres(false);
      }
    };

    fetchGenres();
  }, []);

  const popularity = [
    { id: "popularity.desc", name: "Populer" },
    { id: "release_date.desc", name: "Terbaru" },
    { id: "release_date.asc", name: "Terlama" },
    { id: "vote_average.desc", name: "Rating Tertinggi" },
  ];

  const typeData = [
    { id: "movie", name: "Movie" },
    { id: "tv", name: "TV series" },
  ];

  //

  // Genre filter
  const [selectedGenre, setSelectedGenre] = useState("");
  const [sortBy, setSortBy] = useState("release_date.desc");
  const [type, setType] = useState("movie");

  // Filter movie setiap kali genre/filter berubah
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `https://api.themoviedb.org/3/discover/${type}?api_key=${
            import.meta.env.VITE_API_KEY
          }&with_genres=${selectedGenre}&sort_by=${sortBy}`
        );
        const data = await res.json();

        if (!res.ok) {
          setError(data.status_message || "Gagal mengambil data");
        } else {
          handleMovieDataFilter(data.results);
        }
      } catch (err) {
        console.error("Gagal mengambil data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [selectedGenre, sortBy, type, handleMovieDataFilter]); // setiap ini berubah, fetch ulang

  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-1 justify-items-between gap-3">
      {loadingGenres ? (
        <p className="text-gray-600">Loading genre...</p>
      ) : errorGenres ? (
        <p className="text-red-600">{errorGenres}</p>
      ) : (
        <>
          <CustomDropdown
            data={genres}
            label="Genre"
            onChange={setSelectedGenre}
            value={selectedGenre}
          />
        </>
      )}
      <CustomDropdown
        data={popularity}
        label="Popularitas"
        onChange={setSortBy}
        value={sortBy}
      />
      <CustomDropdown
        data={typeData}
        label="Tipe"
        onChange={setType}
        value={type}
      />
    </div>
  );
}
