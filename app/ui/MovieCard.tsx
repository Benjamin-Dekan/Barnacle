import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

interface MovieProps {
  movie: Movie;
  className?: string;
}

const MovieCard = ({ movie, className = "w-full" }: MovieProps) => {
  return (
    <Link href={`/movie/${movie.id}`} className={`block ${className}`}>
      <div className="bg-[#343434] ml-1 rounded-3xl shadow-md overflow-hidden transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#7a7a7a]/30">
        <div className="relative w-full aspect-[2/3]">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
