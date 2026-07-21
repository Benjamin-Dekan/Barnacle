"use client";

import React from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const PROVIDER_MAP = {
  Netflix: 8,
  Amazon: 9,
  Disney: 337,
  Max: 384,
  Apple: 350,
  Hulu: 15,
  Peacock: 386,
  Paramount: 531,
};

const FilterBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const currentParams = new URLSearchParams(searchParams.toString());
  const watchProviders = 0;
  const watchRegion = 0;

  currentParams.set("provider", `${watchProviders}`);
  currentParams.set("region", `${watchRegion}`);

  const [isChecked, setIsChecked] = useState(false);

  // router.push(`${pathname}?${currentParams.toString()}`);

  // Iterate and create checkbox for each provider in map
  return Object.entries(PROVIDER_MAP).map(([key, value]) => {
    return (
      <div key={`${key}`}>
        <input
          type="checkbox"
          name={`${key}`}
          id={`${key}`}
          // value={value} do i need this? if so, why.
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <label htmlFor={`${key}`} className="pl-1">
          {`${key}`}
        </label>
      </div>
    );
  });
};

export default FilterBar;
