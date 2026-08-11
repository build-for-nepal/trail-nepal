import { SectionHeaderProps } from '@/types/homepage';

const SectionHeader = ({
  title,
  description,
  light = false,
  id,
}: SectionHeaderProps) => {
  return (
    <div
      className="flex flex-col items-center gap-4 w-full text-center"
      id={id}
    >
      <h2
        className={`text-[36px] font-semibold leading-[1.1] ${light ? 'text-white' : 'text-black'}`}
        style={{ fontFamily: "var(--font-fraunces), serif" }}
      >
        {title}
      </h2>
      <p
        className={`text-base font-medium leading-[1.3] ${light ? 'text-white/80' : 'text-text-secondary'}`}
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
