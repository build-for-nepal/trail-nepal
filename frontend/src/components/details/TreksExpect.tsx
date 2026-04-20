import React from "react";
import SectionHeader from "../common/SectionHeader";
import { TREK_DETAILS } from "@/static/trekDetails";

type Props = {
  trekId: string;
};

const TreksExpect = ({ trekId }: Props) => {
  // Fetch dynamic data
  const data = TREK_DETAILS[trekId];
  if (!data || !data.expectations) return null;

  // Find a portrait image from the gallery for the left side, or fallback to the first image
  const imageSrc =
    data.gallery?.find((img) => img.type === "portrait")?.url ||
    data.gallery?.[0]?.url ||
    "/images/ABC.jpg";

  return (
    <div className="w-full bg-[#EBF0F8]">
      <div className="page-wrapper mx-auto flex flex-col px-6 sm:px-10 lg:px-20 py-16 lg:py-24 gap-12 lg:gap-16">
        <SectionHeader
          title="What to Expect"
          description="Understand rhythms before you go"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT IMAGE SECTION */}
          <div className="relative w-full max-w-[450px] mx-auto lg:mx-0 lg:max-w-none">
            <img
              src={imageSrc}
              alt={`${data.name} expectations`}
              className="rounded-2xl object-cover w-full h-[400px] sm:h-[450px] lg:h-[550px] shadow-lg"
            />

            {/* Dynamic Quote Box */}
            <div className="absolute -bottom-6 -right-2 sm:-left-6 sm:right-auto bg-white rounded-xl shadow-xl px-6 py-4 max-w-[280px] sm:max-w-sm z-10">
              <p className="text-sm text-gray-700 italic font-medium leading-relaxed">
                “{data.overview.substring(0, 95).trim()}...”
              </p>
            </div>
          </div>

          {/* RIGHT TEXT SECTION */}
          <div className="flex flex-col gap-8 text-gray-700 leading-relaxed text-sm sm:text-base mt-6 lg:mt-0">
            {data.expectations.map((item, index) => (
              <p key={index} className="tracking-wide">
                <span className="font-bold text-gray-900 text-base sm:text-lg block mb-1">
                  {item.title}
                </span>
                {item.description}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreksExpect;
