import React from "react";
import SectionHeader from "../common/SectionHeader";
import { Sun, Snowflake, CloudRain } from "lucide-react";
import { LucideIcon } from "lucide-react";

type SeasonStatus = "peak" | "danger" | "caution";

interface Month {
  title: string;
  value: string;
  status: SeasonStatus;
  icon: LucideIcon;
}

const statusStyles: Record<
  SeasonStatus,
  { bg: string; text: string; border: string }
> = {
  peak: {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    border: "bg-emerald-500",
  },
  danger: {
    bg: "bg-rose-50",
    text: "text-rose-500",
    border: "bg-rose-500",
  },
  caution: {
    bg: "bg-amber-50",
    text: "text-amber-500",
    border: "bg-amber-400",
  },
};

const months: Month[] = [
  { title: "JAN", value: "Extreme Cold", status: "danger", icon: Snowflake },
  { title: "FEB", value: "High Winds", status: "danger", icon: Snowflake },
  { title: "MAR", value: "Thawing", status: "caution", icon: Sun },
  { title: "APR", value: "Optimal", status: "peak", icon: Sun },
  { title: "MAY", value: "Peak Window", status: "peak", icon: Sun },
  { title: "JUN", value: "Pre-Monsoon", status: "caution", icon: CloudRain },
  { title: "JUL", value: "Monsoon", status: "danger", icon: CloudRain },
  { title: "AUG", value: "Monsoon", status: "danger", icon: CloudRain },
  { title: "SEP", value: "Clearing", status: "caution", icon: Sun },
  { title: "OCT", value: "Post-Monsoon", status: "peak", icon: Sun },
  { title: "NOV", value: "Dry & Cold", status: "peak", icon: Sun },
  { title: "DEC", value: "Wintering", status: "danger", icon: Snowflake },
];

const TreksSeason: React.FC = () => {
  return (
    <div className="flex flex-col px-20 py-24 gap-14">
      <SectionHeader
        title="When Should I go?"
        description="Climbing windows for Trek regions."
      />
      <div className="flex flex-col gap-6">
      <div className="flex gap-6 justify-end">
        <h1 className="flex items-center gap-2 font-semibold">
          <span className=" flex w-3 h-3 rounded-full bg-emerald-500"></span>
          PEAK
        </h1>
        <h1 className="flex items-center gap-2 font-semibold">
          <span className=" flex w-3 h-3 rounded-full bg-rose-500"></span>
          DANGER
        </h1>
        <h1 className="flex items-center gap-2 font-semibold">
          <span className=" flex w-3 h-3 rounded-full bg-amber-400"></span>
          CAUTION
        </h1>
      </div>
      <div className="grid grid-cols-6 gap-6">
        {months.map((month) => {
      
          const style = statusStyles[month.status];
          const Icon = month.icon;

          return (
            <div
              key={month.title}
              className={`flex flex-col py-6 rounded-xl items-center gap-2 relative overflow-hidden ${style.bg}`}
            >
              <div className="font-semibold text-lg">{month.title}</div>

              <Icon className={`${style.text}`} size={28} />

              <div className={`text-sm font-medium ${style.text}`}>
                {month.value}
              </div>

              <div
                className={`absolute bottom-0 left-0 w-full h-1 ${style.border}`}
              />
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default TreksSeason;
