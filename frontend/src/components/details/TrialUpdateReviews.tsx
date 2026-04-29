'use client';

import { overallRating, trailReviews } from '@/static/reviews';
import SectionHeader from '../common/SectionHeader';
import OverallReview from './OverallReview';
import TrailUpdateCard from './TrailUpdateCard';

const TrialUpdateReviews = () => {
  return (
    <section className="flex flex-col gap-8 mt-20 pb-20">
      <SectionHeader
        title="Trail Updates"
        description="Updates from trekkers on the ground"
      />

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* overall rating */}
        <OverallReview
          data={overallRating}
          onExplore={() => console.log('explore')}
          onShareUpdate={() => console.log('share trail update')}
        />

        {/* review cards */}
        <div className="flex-1 min-w-0 divide-y divide-gray-200">
          {trailReviews.length === 0 ? (
            <p className="text-sm text-gray-500 py-12 text-center">
              No trail updates yet. Be the first to share!
            </p>
          ) : (
            trailReviews.map((review) => (
              <TrailUpdateCard key={review.id} review={review} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default TrialUpdateReviews;
