'use client';

import Footer from 'src/components/layout/footer/Footer';
import ComparePage from 'src/components/compare/ComparePage';
import { CompareHeader } from 'src/components/compare/CompareHeader';

const CompareContent = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <CompareHeader />
      <div className="flex-1 flex flex-col items-between w-full h-full">
        <ComparePage />
      </div>
      <Footer />
    </main>
  );
};

export default CompareContent;
