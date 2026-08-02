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
    <main className="max-w-[1600px] mx-auto min-h-100">
      <div className="flex gap-8 items-start">
        <div className="flex flex-col shrink-0 gap-6 w-56 bg-[#06262E] rounded-2xl px-4 py-4 ring-white/10 ring-1">
          <div>
            <h1 className="text-xl font-semibold">Discover</h1>
            <p className="text-xs text-white/40 mt-1">Browse by provider</p>
          </div>
          <div className="h-px bg-white/10" />
          <FilterBar />
        </div>

        <div className="flex-1 min-w-0">
          <DiscoverGrid
            data={data.results}
            query={query}
            provider={provider}
            key={`${query ?? ""}-${provider ?? ""}`}
          />
        </div>
      </div>
    </main>
  );
}
