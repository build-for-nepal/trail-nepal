import React from 'react';
import Image from 'next/image';
import StarRating from './StarRating';
import { TrailReview } from '@/types/reviews';

interface TrailUpdateCardProps {
  review: TrailReview;
}

const TrailUpdateCard = ({ review }: TrailUpdateCardProps) => {
  const images = review.images ?? [];
  const tags = review.tags ?? [];

  const formattedDate = review.date
    ? new Date(review.date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : null;

  return (
    <article className="py-6 border-b border-gray-200 last:border-b-0">
      <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
        <div>
          <p
            className="font-semibold text-gray-900 text-sm"
            style={{ fontFamily: "'Courier New', Courier, monospace" }}
          >
            {review.reviewerName}
          </p>
          <div className="mt-1">
            <StarRating rating={review.rating} size={15} />
          </div>
        </div>
        {formattedDate && (
          <time
            dateTime={review.date}
            className="text-xs text-gray-400 whitespace-nowrap mt-0.5"
          >
            {formattedDate}
          </time>
        )}
      </div>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-0.5 rounded-full border border-gray-300 text-xs text-gray-600 bg-white"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {review.body && (
        <div className="space-y-2 mb-3">
          {review.body.split('\n\n').map((para, i) => (
            <p key={i} className="text-sm text-gray-700 leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      )}

      {images.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {images.map((img) => (
            <div
              key={img.id}
              className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden shrink-0"
            >
              <Image
                src={img.url}
                alt={img.alt ?? 'trail image'}
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>
          ))}
        </div>
      )}
    </article>
  );
};

export default TrailUpdateCard;
