import Image from "next/image";
import { DIFFICULTY_COLORS } from "@/static/constants";
import { Clock, Mountain, CalendarDays } from "lucide-react";
import Pill from "../common/Pill";

interface TrekCardProps {
  imageUrl: string;
  title: string;
  description?: string;
  difficulty: string;
  duration: string;
  altitude: string;
  season: string;
  price: string;
  onSeeMore?: () => void;
}

const TrekCard = ({
  imageUrl,
  title,
  description,
  difficulty,
  duration,
  altitude,
  season,
  price,
  onSeeMore,
}: TrekCardProps) => {
  const difficultyColor =
    DIFFICULTY_COLORS[difficulty.toLowerCase()] ?? "#6BBF1F";

  return (
    <div className="trek-card">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="trek-card__image"
        sizes="(max-width: 768px) 100vw, 33vw"
      />

      <div className="trek-card__pill">
        <Pill text={difficulty} color={difficultyColor} />
      </div>

      <div className="trek-card__bottom">
        <h3 className="trek-card__title">{title}</h3>

        {description && <p className="trek-card__description">{description}</p>}

        <div className="trek-card__details">
          <span className="trek-card__detail-item">
            <Clock size={14} strokeWidth={1.8} />
            {duration}
          </span>
          <span className="trek-card__detail-item">
            <Mountain size={14} strokeWidth={1.8} />
            {altitude}
          </span>
          <span className="trek-card__detail-item">
            <CalendarDays size={14} strokeWidth={1.8} />
            {season}
          </span>
        </div>

        <div className="trek-card__price">~ {price}</div>

        <button className="trek-card__button" onClick={onSeeMore}>
          See More
        </button>
      </div>
    </div>
  );
};

export default TrekCard;
