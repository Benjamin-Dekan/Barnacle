"use client";
import React from "react";
import MovieCard from "./MovieCard";
import { useRef, useEffect, useState } from "react";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

const DiscoverGrid = ({ data, query }) => {
  const observerRef = useRef(null);
  const pageCounterRef = useRef(1);
  const queryVal = query ?? "";
  const [movies, setMovies] = useState(data);

  const callback = async (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver,
  ) => {
    if (entries[0].isIntersecting) {
      pageCounterRef.current++;
      const response = await fetch(
        `/api/movies?q=${queryVal}&page=${pageCounterRef.current}`,
      );
      const result = await response.json();

      setMovies((prev) => [...prev, ...result.results]);
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "300px",
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
  }, []);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {movies.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div ref={observerRef}></div>
    </div>
  );
};

export default DiscoverGrid;
