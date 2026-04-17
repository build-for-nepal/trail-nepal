import { Calendar, ChartLine, Clock, MapPin, Mountain } from "lucide-react";
import React from "react";
import SectionHeader from "../common/SectionHeader";

const TreksHero = () => {
  const stats = [
    {
      icon: <Clock className="h-8 w-8 text-white" />,
      title: "Duration",
      value: "3-5 Days",
    },
    {
      icon: <ChartLine className="h-8 w-8 text-white" />,
      title: "Difficulty",
      value: "Moderate",
    },
    {
      icon: <Mountain className="h-8 w-8 text-white" />,
      title: "Elevation",
      value: "5,345m",
    },
    {
      icon: <Calendar className="h-8 w-8 text-white" />,
      title: "Best Season",
      value: "Sept-Nov",
    },
    {
      icon: <MapPin className="h-8 w-8 text-white" />,
      title: "Starting Point",
      value: "Kathmandu",
    },
  ];
  return (
    <div>
      <div className="flex justify-around items-center py-10 px-20 bg-secondary-blue">
        {stats.map((stat) => (
          <div className="flex flex-col items-center" key={stat.title}>
            <div className="text-4xl">{stat.icon}</div>
            <div className="text-[28px] font-semibold text-white pt-4 pb-2">
              {stat.title}
            </div>
            <div className="text-lg text-white">{stat.value}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-col px-20 py-25 gap-15">
        <SectionHeader
          title="Trek Overview"
          description="Get an instant cost estimate for your adventure"
        />
        <div className="space-y-8">
          <p>
            The Everest Base Camp trek is one of the most iconic treks in the
            world. Following in the footsteps of legendary mountaineers, you'll
            trek through the Khumbu Valley, passing through traditional Sherpa
            villages, ancient monasteries, and breathtaking mountain scenery.
            The trek offers spectacular views of Everest, Lhotse, Nuptse, and
            Ama Dablam.
          </p>
        <p>
          The Everest Base Camp trek is one of the most iconic treks in the
          world. Following in the footsteps of legendary mountaineers, you'll
          trek through the Khumbu Valley, passing through traditional Sherpa
          villages, ancient monasteries, and breathtaking mountain scenery. The
          trek offers spectacular views of Everest, Lhotse, Nuptse, and Ama
          Dablam.
        </p>
        <p>
          The Everest Base Camp trek is one of the most iconic treks in the
          world. Following in the footsteps of legendary mountaineers, you'll
          trek through the Khumbu Valley, passing through traditional Sherpa
          villages, ancient monasteries, and breathtaking mountain scenery. The
          trek offers spectacular views of Everest, Lhotse, Nuptse, and Ama
          Dablam.
        </p>
        </div>
      </div>
    </div>
  );
};

export default TreksHero;
