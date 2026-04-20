import { TREK_DETAILS } from "@/static/trekDetails";
import { Props } from "@/types/trek";

const TreksHeader = ({ trekId }: Props) => {
  const data = TREK_DETAILS[trekId];
  if (!data) return null;

  const bgImage =
    data.gallery?.find((img) => img.type === "hero")?.url ||
    data.gallery?.[0]?.url ||
    "";

  return (
    <header
      role="banner"
      className="page-wrapper relative w-full overflow-hidden h-[calc(100svh-100px)] md:h-[calc(100svh-140px)] min-h-[450px] bg-cover bg-center"
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 md:from-black/80 md:via-black/30 md:to-transparent"
      />

      <div className="absolute top-6 right-4 sm:right-8 z-20">
        <button className="flex items-center gap-2 bg-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-[8px] sm:rounded-full shadow-lg hover:bg-gray-50 transition-colors">
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 text-[#8dc63f]"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 2C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2H6ZM13 3.5L18.5 9H14C13.4477 9 13 8.55228 13 8V3.5Z" />
          </svg>
        </button>
      </div>

      <div className="page-wrapper relative z-10 flex flex-col justify-end h-full pb-16 md:pb-12 px-4 sm:px-8 md:px-[--spacing-page-x] items-center md:items-start text-center md:text-left">
        <div className="flex flex-col gap-3 md:gap-2 max-w-[800px] items-center md:items-start">
          <h1 className="font-otomanopee font-bold text-white text-[42px] leading-[1.1] sm:text-5xl md:text-6xl tracking-tight drop-shadow-lg max-w-[300px] md:max-w-none">
            {data.name.split(" (")[0]}
          </h1>

          {data.region && (
            <p className="text-white/95 text-xl sm:text-2xl font-bold mb-2 md:mb-2 drop-shadow-md">
              {data.region}
            </p>
          )}

          <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-[320px] sm:max-w-[85%] drop-shadow-md">
            {data.overview.substring(0, 130)}...
          </p>
        </div>
      </div>
    </header>
  );
};

export default TreksHeader;
