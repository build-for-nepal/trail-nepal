"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export function ExploreHeader() {
  const [region, setRegion] = useState("all");

  const REGIONS = [
    { value: "all", label: "All Region" },
    { value: "everest", label: "Everest Region" },
    { value: "annapurna", label: "Annapurna Region" },
    { value: "langtang", label: "Langtang Region" },
    { value: "manaslu", label: "Manaslu Region" },
    { value: "mustang", label: "Mustang Region" },
  ];

  return (
    <header
      role="banner"
      className="
        relative w-full overflow-hidden
        h-[300px]
        bg-[url('/images/ExploreHeaderFrame.png')]
        bg-cover bg-center
      "
    >
      {/* Overlay */}
      <div aria-hidden="true" className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="page-wrapper z-10 relative flex flex-col pt-36.75 pb-15  h-full">
        <hgroup className="flex flex-col gap-3">
          <h1 className="font-otomanopee leading-tight text-white text-3xl sm:text-4xl xl:text-[40px]">
            Explore Nepal Treks
          </h1>

          <fieldset className="flex flex-col gap-1.5 border-0 p-0 m-0">
            <legend className="text-white/70 text-xs sm:text-sm mb-1.5">
              Sort by Region Here
            </legend>

            <Select value={region} onValueChange={setRegion}>
              <SelectTrigger
                aria-label="Filter treks by region"
                className="
                  w-40 sm:w-66 h-9 rounded-xl text-sm
                  text-white
                  bg-white/10 hover:bg-white/20
                  border border-white
                  backdrop-blur-sm
                  focus:ring-white/40
                  transition-colors duration-200
                "
              >
                <SelectValue placeholder="All Region" />
              </SelectTrigger>

              <SelectContent>
                {REGIONS.map((r) => (
                  <SelectItem key={r.value} value={r.value}>
                    {r.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </fieldset>
        </hgroup>
      </div>
    </header>
  );
}
