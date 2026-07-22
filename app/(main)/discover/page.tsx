import DiscoverGrid from "@/app/ui/DiscoverGrid";

export default async function DiscoverPage({
  searchParams,
}: {
  searchParams: { q: string; provider: string };
}) {
  const params = await searchParams;
  const query = params.q;
  const provider = params.provider;
  let endpoint;
  if (query && provider) {
    endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${query}&provider=${provider}`;
  } else if (query) {
    endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${query}`;
  } else {
    endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}`;
  }

  const response = await fetch(endpoint);
  const data = await response.json();

  return (
    <main>
      <h1 className="text-5xl font-bold pb-8 text-center">Discover Movies</h1>
      <DiscoverGrid data={data.results} query={query} key={query} />
    </main>
  );
}
