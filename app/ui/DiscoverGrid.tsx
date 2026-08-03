"use client";
import MovieCard from "./MovieCard";
import { useRef, useEffect, useState } from "react";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

interface DiscoverGridProps {
  data: Movie[];
  query?: string;
  provider?: string;
}

const DiscoverGrid = ({ data, query, provider }: DiscoverGridProps) => {
  const observerRef = useRef(null);
  const pageCounterRef = useRef(1);
  const queryVal = query ?? "";
  const providerVal = provider ?? "";
  const [movies, setMovies] = useState(data);

  const callback = async (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) {
      pageCounterRef.current++;
      const response = await fetch(
        `/api/movies?q=${queryVal}&provider=${providerVal}&page=${pageCounterRef.current}`,
      );
      const result = await response.json();

      setMovies((prev) => [...prev, ...result.results]);
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "500px",
      scrollMargin: "0px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(callback, options);
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  });

  return (
    <div>
      <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(180px,1fr))]">
        {movies.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div ref={observerRef}></div>
    </div>
  );
};

export default DiscoverGrid;
