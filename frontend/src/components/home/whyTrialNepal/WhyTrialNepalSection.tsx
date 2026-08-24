import SectionHeader from '../../common/SectionHeader';
import FeatureItem from './FeatureItem';
import { WHY_NEPAL_FEATURES } from '@/static/constants';

const WhyNepalSection = () => {
  return (
    <section className="relative overflow-hidden w-full">
      <div className="page-wrapper relative z-10 flex flex-col items-center gap-[50px] py-[100px] w-full">
        <SectionHeader
          title="Why Trails Nepal?"
          description="Discover what makes Nepal a trekker's paradise"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full">
          {WHY_NEPAL_FEATURES.map((feature) => (
            <FeatureItem key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNepalSection;
