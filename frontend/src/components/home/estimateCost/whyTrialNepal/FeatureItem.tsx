import { FeatureItemProps } from '@/types/homepage';
import Image from 'next/image';

const FeatureItem = ({ icon, title, description }: FeatureItemProps) => {
  return (
    <div className="flex flex-col items-center gap-4 py-8 flex-1 text-center">
      <div className="relative size-16">
        <Image src={icon} alt={title} fill className="object-contain" />
      </div>
      <h3 className="font-bold text-xl text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-white/75">{description}</p>
    </div>
  );
};

export default FeatureItem;
