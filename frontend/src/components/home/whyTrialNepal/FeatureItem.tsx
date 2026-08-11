import { FeatureItemProps } from '@/types/homepage';

const FeatureItem = ({ icon, title, description }: FeatureItemProps) => {
  return (
    <div className="flex flex-col items-center gap-4 py-8 flex-1 text-center">
      <span
        role="img"
        aria-label={title}
        className="icon-mask size-16 text-[#5F7C0D]"
        style={{ ['--icon' as string]: `url(${icon})` }}
      />
      <div className="gap-2">
        <h3 className="font-bold text-xl font-poppins">{title}</h3>
        <p className="text-sm leading-relaxed text-chart-5">{description}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
