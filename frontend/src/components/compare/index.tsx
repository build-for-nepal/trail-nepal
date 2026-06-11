'use client';

import Footer from 'src/components/layout/footer/Footer';
import ComparePage from 'src/components/compare/ComparePage';

const CompareContent = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-1 flex flex-col items-between w-full h-full mt-20">
        <ComparePage />
      </div>
      <Footer />
    </main>
  );
};

export default CompareContent;
