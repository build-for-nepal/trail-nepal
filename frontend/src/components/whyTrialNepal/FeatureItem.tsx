import { FeatureItemProps } from "@/types/homepage";
import Image from "next/image";

const FeatureItem = ({ icon, title, description }: FeatureItemProps) => {
  return (
    <div className="flex flex-col items-center gap-4 py-8 px-0 flex-1 text-center">
      <div className="w-16 h-16 relative">
        <Image src={icon} alt={title} fill className="object-contain" />
      </div>
      <h3
        className="text-white font-bold text-xl"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {title}
      </h3>
      <p
        className="text-white/75 text-sm leading-relaxed"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {description}
      </p>
    </div>
  );
};

export default FeatureItem;
