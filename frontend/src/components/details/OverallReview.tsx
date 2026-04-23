import React from "react";
import { Button } from "@/components/ui/button";
import StarRating from "./StarRating";
import { OverallRating } from "@/types/reviews";

interface OverallReviewProps {
  data?: OverallRating;
  onExplore?: () => void;
  onShareUpdate?: () => void;
}

const OverallReview = ({
  data,
  onExplore,
  onShareUpdate,
}: OverallReviewProps) => {
  const average = data?.average ?? 0;
  const totalReviews = data?.totalReviews ?? 0;

  return (
    <aside className="shrink-0 w-full md:w-48 lg:w-52 rounded-2xl border border-gray-200 bg-white shadow-sm p-5 flex flex-col items-center gap-4 self-start md:sticky md:top-6">
      <h3
        className="text-base font-semibold text-gray-800 tracking-wide"
        style={{ fontFamily: "'Courier New', Courier, monospace" }}
      >
        Reviews
      </h3>

      <p
        className="text-5xl font-bold text-gray-900 leading-none"
        style={{ fontFamily: "'Georgia', serif" }}
      >
        {average.toFixed(1)}
      </p>

      <StarRating rating={average} size={18} />

      <p className="text-xs text-gray-500">
        {totalReviews} {totalReviews === 1 ? "review" : "reviews"}
      </p>

      <div className="w-full border-t border-gray-100" />

      <Button
        onClick={onExplore}
        className="w-full bg-[#5a8a00] hover:bg-[#5a8a00]/90 text-white text-sm rounded-lg cursor-pointer"
      >
        Explore Now
      </Button>

      <Button
        variant="outline"
        onClick={onShareUpdate}
        className="w-full text-sm rounded-lg cursor-pointer"
      >
        Share Trail Update
      </Button>
    </aside>
  );
};

export default OverallReview;
