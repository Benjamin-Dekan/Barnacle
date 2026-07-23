import DiscoverGrid from "@/app/ui/DiscoverGrid";
import FilterBar from "@/app/ui/FilterBar";

export default async function DiscoverPage({
  searchParams,
}: {
  searchParams: { q: string; provider: string };
}) {
  const params = await searchParams;
  const query = params.q;
  const provider = params.provider;
  let endpoint;
  if (provider) {
    endpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_watch_providers=${provider}&watch_region=US`;
  } else if (query) {
    endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${query}`;
  } else {
    endpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}`;
  }

  const response = await fetch(endpoint);
  const data = await response.json();

  return (
    <main>
      <h1 className="text-5xl font-bold pb-8 text-center">Discover Movies</h1>
      <FilterBar />
      <DiscoverGrid
        data={data.results}
        query={query}
        provider={provider}
        key={`${query ?? ""}-${provider ?? ""}`}
      />
    </main>
  );
}
