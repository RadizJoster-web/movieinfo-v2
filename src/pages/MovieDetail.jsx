import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

export default function MoviePage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${
            import.meta.env.VITE_API_KEY
          }`
        );
        const data = await res.json();
        console.log(data);
        setMovie(data);
      } catch (error) {
        console.error("Gagal ambil data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) {
    return (
      <div className="w-full min-h-screen">
        <h1 className="text-center text-dark mt-20">Loading...</h1>;
      </div>
    );
  }

  if (!movie || movie.success === false) {
    return (
      <div className="w-full min-h-screen">
        <h1 className="text-center text-gray-500 mt-20">
          Film tidak ditemukan.
        </h1>
      </div>
    );
  }

  return (
    <div className="relative z-10 w-full min-h-screen px-4 md:px-16 pt-28 pb-10">
      {/* Gambar background sebagai layer belakang */}
      <div className="absolute top-20 left-5/10 transform -translate-x-1/2 w-95/100 h-[330px] sm:h-[370px] md:h-[500px] -z-10 overflow-hidden rounded-2xl ">
        <img
          src={
            movie.backdrop_path
              ? `${BASE_IMG_URL}${movie.backdrop_path}`
              : "/404 poster v2.jpeg"
          }
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        {/* Tambahan overlay gelap agar teks di depan tetap terbaca */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Konten utama */}
      <div className="flex flex-col md:flex-row gap-8 md:items-center">
        {/* Poster */}
        <img
          src={
            movie.poster_path
              ? `${BASE_IMG_URL}${movie.poster_path}`
              : "/404 poster.jpeg"
          }
          alt={movie.title}
          className="w-44 sm:w-52 md:w-60 lg:w-72 mx-auto md:mx-0 object-contain rounded-xl shadow-lg"
        />

        {/* Info */}
        <div className="flex flex-col gap-4 text-black md:text-white w-full md:max-w-2xl mt-4 md:mt-0">
          {/* Judul */}
          <h1 className="text-2xl md:text-4xl font-bold">{movie.title}</h1>

          {/* Genre, Rating, dll */}
          <div className="space-y-1 text-sm md:text-base leading-snug">
            <p>
              {movie.adult ? "18+" : "13+"} ·{" "}
              {movie.genres?.map((g) => g.name).join(", ") || "Tidak ada genre"}{" "}
              · {movie.runtime} min
            </p>
            <p className="italic">{movie.status}</p>
            <p className="flex items-center gap-2">
              IMDb Rating:{" "}
              <span className="text-yellow-400 font-semibold">
                {movie.vote_average.toFixed(1)}/10
              </span>
              <FaStar className="text-yellow-400" />
            </p>
          </div>

          {/* Deskripsi */}
          <p className="text-sm md:text-base leading-relaxed">
            {movie.overview || "Deskripsi belum tersedia."}
          </p>

          {/* Tombol */}
          <div className="flex flex-wrap gap-4">
            <Link
              to={`/watch/${movie.id}`}
              className="group flex items-center gap-1 text-primary font-medium hover:underline transition"
            >
              Tonton Sekarang
              <GoArrowUpRight className="group-hover:-translate-y-1 duration-200" />
            </Link>

            <Link
              to={`/`}
              className="group flex items-center gap-1 text-primary font-medium hover:underline transition"
            >
              Beri Rating
              <GoArrowUpRight className="group-hover:-translate-y-1 duration-200" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
