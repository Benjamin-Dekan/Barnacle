import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <Link href={`/discover/${movie.id}`}>
      <div className="bg-[#343434] rounded-3xl shadow-md overflow-hidden transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#7a7a7a]/30">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width={500}
          height={750}
        />

        <h3 className="text-center text-white py-3 px-2 font-semibold tracking-wide text-sm md:text-base">
          {movie.title}
        </h3>
      </div>
    </Link>
  );
};

export default MovieCard;
