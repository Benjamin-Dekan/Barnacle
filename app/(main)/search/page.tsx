import DiscoverGrid from "@/app/ui/DiscoverGrid";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q: string; provider: string };
}) {
  const params = await searchParams;
  const query = params.q ?? null;

  let data = { results: [] };
  if (query) {
    const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${query}`;
    const response = await fetch(endpoint);
    data = await response.json();
  }

  return (
    <main className="px-8 max-w-[1600px] mx-auto min-h-100">
      <div className="flex gap-10 items-start">
        {query ? (
          <div className="flex-1 min-w-0">
            <DiscoverGrid
              data={data.results}
              query={query}
              key={`${query ?? ""}`}
            />
          </div>
        ) : (
          <div className=" text-white/40 py-20 min-w-0 flex-1 text-center">
            There are no movies that matched your query.
          </div>
        )}
      </div>
    </main>
  );
}
