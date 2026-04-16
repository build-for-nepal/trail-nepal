import Image from "next/image";
import { cn } from "@/lib/utils";
import { SearchBarProps } from "@/types/homepage";

export function SearchBar({ variant = "light", className }: SearchBarProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={cn(
        "relative flex  items-center gap-2 overflow-hidden rounded-[16px] border px-2 py-2 backdrop-blur-sm transition-all duration-200",
        isDark ?
          "border-gray-300 bg-white focus-within:border-gray-400 focus-within:bg-gray-50 shadow-sm"
        : "border-white/25 bg-white/20 focus-within:border-white/40 focus-within:bg-white/25",
        className,
      )}
    >
      <Image
        src="/icons/search-line.svg"
        alt=""
        width={20}
        height={20}
        className={cn("shrink-0", isDark && "invert opacity-70")}
        aria-hidden="true"
      />
      <input
        type="search"
        placeholder="Search"
        className={cn(
          "flex-1 border-none bg-transparent font-poppins text-sm font-normal leading-5 outline-none [&::-webkit-search-cancel-button]:hidden",
          isDark ?
            "text-gray-900 placeholder:text-gray-500"
          : "text-white placeholder:text-white/60",
        )}
        aria-label="Search treks"
      />
      {/* Decorative mountain + hiker illustration */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-8 w-16"
        aria-hidden="true"
      >
        <Image
          src="/icons/mountain.svg"
          alt=""
          width={66}
          height={32}
          className="absolute bottom-0 right-0 h-full w-full"
        />
        <div className="absolute left-4.25 top-0.5 h-7.5 w-8.25 pointer-events-none">
          <Image
            src="/icons/hiker.svg"
            alt="hikers image"
            width={33}
            height={30}
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}
