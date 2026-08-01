import React from "react";
import Image from "next/image";

interface providerInfo {
  logo_path: string;
  provider_name: string;
}

interface providerObject {
  link: string;
  flatrate: providerInfo[];
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
};

export default WatchProvider;
