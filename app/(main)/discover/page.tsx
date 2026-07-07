import MovieCard from "@/app/ui/MovieCard";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

export default async function DiscoverPage() {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}`,
  );
  const data = await response.json();

  return (
    <main>
      <h1 className="text-5xl font-bold pb-8 text-center">Discover Movies</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {data.results.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
}
