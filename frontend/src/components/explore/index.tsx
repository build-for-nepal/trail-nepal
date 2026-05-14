import { ExploreHeader } from './header/ExploreHeader';
import ExploreLayout from './treks/ExploreLayout';
import Footer from '../layout/footer/Footer';

const ExploreContent = () => {
  return (
    <main className="w-full flex flex-col bg-gray-100">
      <ExploreHeader />
      <ExploreLayout />
      <Footer />
    </main>
  );
};

export default ExploreContent;
