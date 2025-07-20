import Card from "./Card";

export default function CardList({ movies, error }) {
  if (error) {
    return (
      <div className="w-full flex flex-col items-center gap-4 py-10">
        <h1 className="text-2xl font-semibold text-red-500">
          Terjadi Kesalahan
        </h1>
        <p className="text-gray-700">{error}</p>
      </div>
    );
  }

  return (
    <div className="w-full space-y-4">
      {movies.length === 0 ? (
        <div className="">
          <p className="text-center text-gray-500">Film tidak ditemukan.</p>
        </div>
      ) : (
        movies.map((movie) => <Card key={movie.id} movie={movie} />)
      )}
    </div>
  );
}
