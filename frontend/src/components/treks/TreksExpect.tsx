import React from "react";
import SectionHeader from "../common/SectionHeader";

const TreksExpect = () => {
  return (
    <div className="flex flex-col px-6 sm:px-10 lg:px-20 py-16 lg:py-24 gap-14 bg-[#EBF0F8]">
      
      <SectionHeader
        title="What to Expect"
        description="Understand rhythms before you go"
      />

      <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="relative w-[400px] max-w-[500px] mx-auto lg:mx-0">
          <img
            src="/images/expect.png"
            alt="Everest trekking view"
            className="rounded-2xl object-cover w-full h-[380px] sm:h-[420px] lg:h-[500px]"
          />

          <div className="absolute -bottom-6 left-6 bg-white rounded-xl shadow-md px-6 py-4 max-w-sm">
            <p className="text-sm text-gray-700 italic">
              “The Everest Base Camp trek is one of the most iconic treks in the world.”
            </p>
          </div>
        </div>

        {/* RIGHT TEXT */}
        <div className="flex flex-col gap-8 text-gray-700 leading-relaxed text-sm sm:text-base">

          <p>
            <span className="font-semibold text-gray-900">
              Some Popular things to do in this trek stuff.
            </span>{" "}
            The Everest Base Camp trek is one of the most iconic treks in the world.
            Following in the footsteps of legendary mountaineers, you'll trek
            through the Khumbu Valley, passing through traditional Sherpa villages,
            ancient monasteries, and breathtaking mountain scenery.
          </p>

          <p>
            <span className="font-semibold text-gray-900">
              Safety Measures and the path condition.
            </span>{" "}
            The Everest Base Camp trek is one of the most iconic treks in the world.
            Following in the footsteps of legendary mountaineers, you'll trek
            through the Khumbu Valley.
          </p>

          <p>
            <span className="font-semibold text-gray-900">
              Other Related stuff.
            </span>{" "}
            The Everest Base Camp trek is one of the most iconic treks in the world.
            Following in the footsteps of legendary mountaineers.
          </p>

        </div>
      </div>
    </div>
  );
};

export default TreksExpect;