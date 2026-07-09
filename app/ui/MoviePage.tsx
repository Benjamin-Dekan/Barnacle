import React from "react";
import MovieCard from "@/app/ui/MovieCard";
import Image from "next/image";
import ActorCard from "./ActorCard";
import BackArrow from "./BackArrow";

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
  const mediaTiles = backdrops.slice(0, 6);

  const recommendations = data.recommendations?.results ?? [];
  const castList = data.credits?.cast ?? [];
  const castTiles = castList.slice(0, 10);

  return (
    <main>
      <div className="flex flex-col">
        {/* Header */}
        <div className="relative w-full min-h-[350px] overflow-hidden">
          <Image
            src={`https://image.tmdb.org/t/p/w1280${data.backdrop_path}`}
            alt={data.title}
            fill
            priority
            className="object-cover brightness-[0.3] -z-10"
          />
          <BackArrow />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-[#0A0A0A] to-transparent"></div>

          <div className="w-[200px] h-[300px] absolute top-1/2 -translate-y-1/2 right-8 overflow-hidden rounded-xl shadow-2xl shrink-0 hidden md:block">
            <Image
              src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              alt={data.title}
              fill
              className="object-cover"
            />
          </div>

          <header className="flex flex-col md:flex-row justify-between gap-6 p-4 pt-16">
            <div className="flex flex-col p-4">
              <div>
                <h1 className="font-bold text-white text-6xl">{data.title}</h1>
                <div className="flex gap-2 flex-wrap mt-1">
                  {data.genres?.map((genre: { id: number; name: string }) => (
                    <span
                      key={genre.id}
                      className="bg-gray-700 px-2 py-1 rounded-full text-xs text-white"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mt-8">Overview</h2>
                <p className="max-w-2xl text-white/90 line-clamp-6 mt-1.5">
                  {data.overview}
                </p>
              </div>
            </div>
          </header>
        </div>

        {/* Shared wrapper: consistent left alignment + equal spacing between sections */}
        <div className="flex flex-col px-12 space-y-8">
          {/* Cast */}
          <div>
            <h2 className="text-2xl font-bold mb-2 mt-4">Cast</h2>
            <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-track-background scrollbar-thumb-white pt-2">
              {castTiles.map((actor) => (
                <ActorCard key={actor.credit_id} actor={actor} />
              ))}
            </div>
          </div>

          {/* Media */}
          <div className="overflow-hidden">
            <h2 className="text-2xl font-bold mb-4">Media</h2>
            <div className="grid grid-cols-3 gap-4 w-[1381px] mx-auto">
              {mediaTiles.map((backdrop) => (
                <div
                  key={backdrop.file_path}
                  className={`rounded-xl relative overflow-hidden h-64 aspect-video px-2`}
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
          </div>

          {/* Recommendation */}
          <div>
            <h2 className="text-2xl font-bold mb-2">Recommendations</h2>
            <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-track-background scrollbar-thumb-white mb-10 pt-2">
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
      </div>
    </main>
  );
};

export default MoviePage;
