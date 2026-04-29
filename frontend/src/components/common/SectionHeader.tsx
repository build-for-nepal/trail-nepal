import { SectionHeaderProps } from '@/types/homepage';

const SectionHeader = ({
  title,
  description,
  light = false,
}: SectionHeaderProps) => {
  return (
    <div className="flex flex-col items-center gap-4 w-full text-center">
      <h2
        className={`text-[40px] font-normal leading-8 ${light ? 'text-white' : 'text-black'}`}
        style={{ fontFamily: "'Oldenburg', serif" }}
      >
        {title}
      </h2>
      <p
        className={`text-base font-medium ${light ? 'text-white/80' : 'text-black'}`}
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
