import type { NextPage } from 'next';

import { MobileNav } from '../components';

const Home: NextPage = () => {
  return (
    <div className="relative min-h-screen bg-rich-black">
      <main className="flex flex-col max-h-screen min-h-screen p-4 overflow-y-scroll"></main>
      <MobileNav />
    </div>
  );
};

export default Home;
