import { SectionHeaderProps } from "@/types/homepage";

const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <div className="section-header">
      <h2 className="section-header__title">{title}</h2>
      <p className="section-header__description">{description}</p>
    </div>
  );
};

export default SectionHeader;
