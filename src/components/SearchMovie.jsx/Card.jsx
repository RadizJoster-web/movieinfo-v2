import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

export default function Card({ movie }) {
  const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="cards flex gap-4 rounded-xl shadow-md">
      {/* Poster */}
      <img
        src={
          movie.poster_path
            ? `${BASE_IMG_URL}${movie.poster_path}`
            : "/404 poster.jpeg"
        }
        alt={movie.title}
        className="w-[100px] h-full object-cover rounded-md"
      />

      {/* Info Film */}
      <div className="flex-1">
        <Link
          to={`/film/detail/${movie.id}/${encodeURIComponent(movie.title)}`}
          className="title-card text-md md:text-lg font-semibold transition-colors"
        >
          {movie.title || movie.original_title}
        </Link>

        <p className="text-sm text-gray-500 mt-1">{movie.release_date}</p>

        <p className="text-sm text-gray-700 mt-1 line-clamp-2">
          {movie.overview || "No description available."}
        </p>

        {/* Rating dan 18+/13+ */}
        <div className="flex gap-4 text-sm text-gray-600 mt-2">
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400" />
            <p>{movie.vote_average || "N/A"}</p>
          </div>
          <p>{movie.adult ? "18+" : "13+"}</p>
        </div>
      </div>
    </div>
  );
}
