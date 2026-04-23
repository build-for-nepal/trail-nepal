export type ImageType = "hero" | "landscape" | "portrait" | "detail";

export interface TrailImage {
  id: string;
  url: string;
  alt?: string;
  type?: ImageType;
}

export type ReviewTag =
  | "Great views"
  | "Well marked trail"
  | "Good food"
  | "Friendly locals"
  | "Challenging terrain"
  | "Good accommodation"
  | "Worth the effort"
  | "Beautiful flora";

export interface TrailReview {
  id: string;
  reviewerName: string;
  reviewerAvatar?: string;
  rating?: number;
  date?: string;
  tags?: ReviewTag[];
  body?: string;
  images?: TrailImage[];
}

export interface OverallRating {
  average?: number;
  totalReviews?: number;
}
