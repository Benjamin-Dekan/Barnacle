import React from "react";
import MovieCard from "@/app/ui/MovieCard";
import Image from "next/image";
interface MoviePageInfo {
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
}

const MoviePage = ({ data }: { data: any }) => {
  //   const movieId = data.id;
  //   const movieTitle = data.title;

  const backdrops = data.images?.backdrops ?? [];
  const mediaTiles = backdrops.slice(0, 4);

  const recommendations = data.recommendations?.results ?? [];
  //   const collectionName = data.belongs_to_collection?.name;

  return (
    <main>
      <div className="flex flex-col">
        {/* Header component of Movie Page */}
        <div className="relative w-full min-h-[350px] overflow-hidden">
          <Image
            src={`https://image.tmdb.org/t/p/w1280${data.backdrop_path}`}
            alt={data.title}
            fill
            priority
            className="object-cover brightness-[0.3] -z-10"
          />
          <header className="flex flex-col md:flex-row justify-between gap-6 p-4">
            <div className="flex flex-col justify-between p-4">
              <h1 className="font-bold text-white text-6xl">{data.title}</h1>
              <div className="flex gap-2 flex-wrap">
                {data.genres?.map((genre: { id: number; name: string }) => (
                  <span
                    key={genre.id}
                    className="bg-gray-700 px-2 py-1 rounded-full text-xs text-white"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
              <h2 className="font-bold text-white mt-8">Overview</h2>
              <p className="max-w-2xl text-white/90 line-clamp-6">
                {data.overview}
              </p>
            </div>
            <div className="w-[200px] h-[300px] relative overflow-hidden rounded-xl shadow-2xl shrink-0 hidden md:block">
              <Image
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                alt={data.title}
                fill
                className="object-cover"
              />
            </div>
          </header>
        </div>
        {/* Media component of Movie Page
        <div className="px-8 py-4">
          <h2 className="text-3xl mb-3">Media</h2>
          <div className="grid grid-cols-3 gap-4">
            {mediaTiles.map((backdrop, i) => (
              <div
                key={backdrop.file_path}
                className={`rounded-xl relative overflow-hidden ${i === 0 || i === 3 ? "col-span-2 aspect-video" : "aspect-auto"} `}
              >
                <Image
                  src={`https://image.tmdb.org/t/p/w500${backdrop.file_path}`}
                  alt={data.title}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div> */}

        {/* Recommendation component of Movie Page */}
        <div className="px-12 py-10">
          <h2 className="text-2xl font-bold mb-6">Recommendations</h2>
          <div className="flex gap-4 overflow-x-auto pb-6">
            {recommendations.map((recommendation) => (
              <MovieCard
                key={recommendation.id}
                movie={recommendation}
                className="w-36 md:w-40 shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MoviePage;
