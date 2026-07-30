import React from "react";
import Image from "next/image";
import Link from "next/link";

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

const WatchProvider = ({
  providerData,
}: {
  providerData: providerObject | undefined;
}) => {
  if (!providerData) return null;

  return (
    <div className="flex gap-2">
      {providerData.flatrate?.map((provider) => (
        <Image
          src={`https://image.tmdb.org/t/p/w92${provider.logo_path}`}
          width={45}
          height={45}
          alt={provider.provider_name}
          key={provider.provider_name}
          className="rounded-lg overflow-hidden"
        />
      ))}
    </div>
  );

  // {mediaTiles.map((backdrop) => (
  //                 <div
  //                   key={backdrop.file_path}
  //                   classprovider_name={`rounded-xl relative overflow-hidden h-69 aspect-video px-2`}
  //                 >
  //                   <Image
  //                     src={`https://image.tmdb.org/t/p/w500${backdrop.file_path}`}
  //                     alt={providerData.title}
  //                     fill
  //                     classprovider_name="object-cover"
  //                   />
  //                 </div>
  //               ))}
};

export default WatchProvider;
