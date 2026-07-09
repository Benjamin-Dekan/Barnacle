import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ActorInfo {
  id: number;
  name: string;
  profile_path: string;
  character: string;
}

const ActorCard = ({ actor }: { actor: ActorInfo }) => {
  return (
    <Link
      href={`https://www.themoviedb.org/person/${actor.id}`}
      className={`block w-36 md:w-40 shrink-0`}
    >
      <div className="relative ml-1 aspect-2/3 ring-1 ring-white/10 rounded-xl shadow-md overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#7a7a7a]/30">
        <Image
          src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
          alt={actor.name}
          width={500}
          height={750}
          className="w-full h-auto object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <h3 className=" text-white font-semibold md:text-base text-sm leading-tight truncate">
            {actor.name}
          </h3>
          <p className="text-xs text-white/60 truncate">{actor.character}</p>
        </div>
      </div>
    </Link>
  );
};

export default ActorCard;
