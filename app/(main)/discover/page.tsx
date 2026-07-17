import DiscoverGrid from "@/app/ui/MovieGrid";

export default async function DiscoverPage({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  const params = await searchParams;
  const query = params.q;
  const endpoint = query
    ? `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${query}`
    : `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}`;

  const response = await fetch(endpoint);
  const data = await response.json();

  return (
    <main>
      <h1 className="text-5xl font-bold pb-8 text-center">Discover Movies</h1>

      <DiscoverGrid data={data.results} />
    </main>
  );
}
