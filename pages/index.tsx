import type { NextPage } from 'next';

import { AboutSection, MobileNav } from '../components';

const Home: NextPage = () => {
  return (
    <div className="relative min-h-screen bg-rich-black">
      <main className="flex flex-col max-h-screen min-h-screen overflow-y-scroll">
        <AboutSection />
      </main>

      <MobileNav />
    </div>
  );
};

export default Home;
