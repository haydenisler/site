import type { NextPage } from 'next';

import { AboutSection, MobileNav } from '../components';

const Home: NextPage = () => {
  return (
    <div className="relative min-h-screen bg-rich-black">
      <AboutSection />
      <MobileNav />
    </div>
  );
};

export default Home;
