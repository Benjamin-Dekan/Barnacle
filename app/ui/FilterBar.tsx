"use client";

import React from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const PROVIDER_MAP = {
  Netflix: 8,
  Amazon: 9,
  Disney: 337,
  Max: 1899,
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

  const providerList = searchParams.get("provider")?.split(",") || [];

  // const watchRegion = searchParams.get("region") Ignore region for now, implement watch providers first
  //   ? searchParams.getAll("region")
  //   : "";

  const filterOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: number,
  ) => {
    const isChecked = e.target.checked;
    const stringValue = value.toString();

    let updatedProviders = [...providerList];

    if (isChecked) {
      if (!updatedProviders.includes(stringValue)) {
        updatedProviders.push(stringValue);
      }
    } else {
      updatedProviders = updatedProviders.filter((id) => id !== stringValue);
    }

    if (updatedProviders.length > 0) {
      currentParams.set("provider", updatedProviders.join());
    } else {
      currentParams.delete("provider");
    }

    // currentParams.set("region", `${watchRegion}`);
    router.push(`${pathname}?${currentParams.toString()}`);
  };

  // Iterate and create checkbox for each provider in map
  return Object.entries(PROVIDER_MAP).map(([key, value]) => {
    return (
      <div key={`${key}`}>
        <input
          type="checkbox"
          name={`${key}`}
          id={`${key}`}
          value={value}
          checked={providerList.includes(value.toString())}
          onChange={(e) => filterOnChange(e, value)}
        />
        <label htmlFor={`${key}`} className="pl-1">
          {`${key}`}
        </label>
      </div>
    );
  });
};

export default FilterBar;
