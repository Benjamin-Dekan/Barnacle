import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("q");
  const page = searchParams.get("page") || "1";
  const provider = searchParams.get("provider");

  let endpoint;
  if (provider) {
    endpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_watch_providers=${provider}&watch_region=US&page=${page}`;
  } else if (query) {
    endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${query}&page=${page}`;
  } else {
    endpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&page=${page}`;
  }
  const response = await fetch(endpoint);
  const data = await response.json();

  return NextResponse.json(data);
}
