import MoviePage from "@/app/ui/MoviePage";
import React from "react";

export default async function MovieLandingPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}&append_to_response=images,recommendations,credits&include_image_language=null`,
  );
  const data = await response.json();
  return <MoviePage data={data} />;
}
