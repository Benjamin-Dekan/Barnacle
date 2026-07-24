import DiscoverGrid from "@/app/ui/DiscoverGrid";
import FilterBar from "@/app/ui/FilterBar";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q: string; provider: string };
}) {
  const params = await searchParams;
  const query = params.q;
  let endpoint;

  if (query) {
    endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${query}`;
  } else {
    endpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}`;
  }

  const response = await fetch(endpoint);
  const data = await response.json();

  return (
    <main className="px-8 max-w-[1600px] mx-auto min-h-100">
      <div className="flex gap-10 items-start">
        <div className="flex-1 min-w-0">
          <DiscoverGrid
            data={data.results}
            query={query}
            key={`${query ?? ""}`}
          />
        </div>
      </div>
    </main>
  );
}
