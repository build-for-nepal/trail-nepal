import React from 'react';
import SectionHeader from '../common/SectionHeader';

type Props = {
  expectations: { title: string; description: string }[];
  /** The trip's authored summary, shown in full as the quote over the image. */
  summary: string;
  /** Resolved hero/portrait image for the left panel. */
  imageSrc: string;
  /** Used for the image alt text. */
  name: string;
};

const TreksExpect = ({ expectations, summary, imageSrc, name }: Props) => {
  if (!expectations || expectations.length === 0) return null;

  const quote = summary.trim();

  return (
    <div className="w-full bg-[#EBF0F8]">
      <div className="page-wrapper mx-auto flex flex-col px-6 sm:px-10 lg:px-20 py-16 lg:py-24 gap-12 lg:gap-16">
        <SectionHeader
          title="What to Expect"
          description="Understand rhythms before you go"
          id="whattoexpect"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT IMAGE SECTION */}
          <div className="relative w-full max-w-[450px] mx-auto lg:mx-0 lg:max-w-none">
            <img
              src={imageSrc}
              alt={`${name} expectations`}
              className="rounded-2xl object-cover w-full h-[400px] sm:h-[450px] lg:h-[550px] shadow-lg"
            />

            {/* Quote box — the summary is shown in full, never truncated. */}
            {quote && (
              <div className="absolute -bottom-6 -right-2 sm:-left-6 sm:right-auto bg-white rounded-xl shadow-xl px-6 py-4 max-w-[280px] sm:max-w-sm z-10">
                <p className="text-sm text-gray-700 italic font-medium leading-relaxed">
                  {`\u201C${quote}\u201D`}
                </p>
              </div>
            )}
          </div>

          {/* RIGHT TEXT SECTION */}
          <div className="flex flex-col gap-8 text-gray-700 leading-relaxed text-sm sm:text-base mt-6 lg:mt-0">
            {expectations.map((item, index) => (
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
