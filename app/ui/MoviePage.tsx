import React from "react";
import MovieCard from "@/app/ui/MovieCard";
import Image from "next/image";
import ActorCard from "./ActorCard";
import BackArrow from "./BackArrow";
import HomeButton from "./HomeButton";
import WatchProvider from "./WatchProvider";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

interface ActorInfo {
  id: number;
  credit_id: string;
  name: string;
  profile_path: string;
  character: string;
}

interface Backdrop {
  file_path: string;
}

interface providerInfo {
  logo_path: string;
  provider_name: string;
}

interface providerObject {
  link: string;
  flatrate: providerInfo[];
  // rent?: providerInfo[];
  // buy?: providerInfo[];
}

interface MovieData {
  title: string;
  backdrop_path: string;
  poster_path: string;
  release_date: string;
  runtime: number;
  overview: string;
  genres: { id: number; name: string }[];
  images?: { backdrops: Backdrop[] };
  recommendations?: { results: Movie[] };
  credits?: { cast: ActorInfo[] };
  "watch/providers"?: { results: Record<string, providerObject> };
}

const MoviePage = ({ data }: { data: MovieData }) => {
  const backdrops = data.images?.backdrops ?? [];
  const mediaTiles = backdrops.slice(0, 6);

  const recommendations = data.recommendations?.results ?? [];
  const castList = data.credits?.cast ?? [];
  const castTiles = castList.slice(0, 10);

  const runtimeHour = Math.floor(data.runtime / 60);
  const runtimeMinutes = data.runtime % 60;

  const providerLink = data["watch/providers"]?.results?.US?.link ?? undefined;
  const flatrateProviders = data["watch/providers"]?.results?.US?.flatrate;

  return (
    <main>
      <div className="flex flex-col">
        {/* Header */}
        <div className="relative w-full min-h-112.5 overflow-hidden">
          <Image
            src={`https://image.tmdb.org/t/p/w1280${data.backdrop_path}`}
            alt={data.title}
            fill
            priority
            className="object-cover brightness-[0.3] -z-10"
          />
          <div className="absolute top-4 left-4 z-30 flex gap-2">
            <BackArrow />
            <HomeButton />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-[#0A0A0A] to-transparent pointer-events-none"></div>

          <div className="absolute inset-0 max-w-[1600px] mx-auto">
            <div className="w-50 h-75 absolute top-1/2 -translate-y-1/2 right-14 overflow-hidden rounded-xl shadow-2xl shrink-0 hidden min-[1200px]:block">
              <Image
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                alt={data.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="max-w-[1600px] mx-auto relative z-10 px-4">
            <header className="flex flex-col md:flex-row justify-between gap-6 p-4 pt-16">
              <div className="flex flex-col p-4">
                <div>
                  <h1 className="font-bold text-white text-6xl">
                    {data.title}
                  </h1>

                  <div className="flex gap-2 flex-wrap mt-3 text-sm text-white/60 items-center">
                    <span>
                      {new Date(data.release_date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    {data.runtime > 0 && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-white/30" />
                        <span>
                          {runtimeHour}h {runtimeMinutes}m
                        </span>
                      </>
                    )}
                  </div>

                  <div className="flex gap-2 flex-wrap mt-2">
                    {data.genres?.map((genre: { id: number; name: string }) => (
                      <span
                        key={genre.id}
                        className="bg-white/10 ring-1 ring-white/10 px-2 py-1 rounded-full text-xs text-white"
                      >
                        {genre.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-white mt-8">
                    Overview
                  </h2>
                  <p className="max-w-2xl text-white/90 line-clamp-6 mt-1.5">
                    {data.overview}
                  </p>
                </div>

                {/* Watch Providers*/}
                <div className="flex flex-row py-5 items-center gap-2">
                  {flatrateProviders?.length && providerLink && (
                    <>
                      <a
                        href={providerLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md overflow-hidden shrink-0"
                      >
                        <div className="shrink-0 px-6 py-2 rounded-xl bg-[#e8e2d0] text-[#4a3728] text-lg cursor-pointer transition-colors hover:bg-[#c4b078] border-2 border-[#807149] font-semibold">
                          Stream:
                        </div>
                      </a>
                      <div className="shrink-0 overflow-hidden">
                        <WatchProvider
                          providerData={data["watch/providers"]?.results?.US}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </header>
          </div>
        </div>

        <div className="max-w-[1600px] mx-auto flex flex-col px-12 space-y-8">
          {/* Cast */}
          <div>
            <h2 className="text-2xl font-bold mb-2 mt-4">Cast</h2>
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-track-background scrollbar-thumb-white pt-2">
              {castTiles.map((actor) => (
                <ActorCard key={actor.credit_id} actor={actor} />
              ))}
            </div>
          </div>

          {/* Media */}
          <div className="overflow-hidden">
            <h2 className="text-2xl font-bold mb-4">Media</h2>
            <div className="grid grid-cols-[repeat(3,max-content)] gap-y-4 gap-x-4">
              {mediaTiles.map((backdrop) => (
                <div
                  key={backdrop.file_path}
                  className={`rounded-xl relative overflow-hidden h-69 aspect-video px-2`}
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
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-track-background scrollbar-thumb-white mb-10 pt-2">
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
