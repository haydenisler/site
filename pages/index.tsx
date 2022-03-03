import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="relative min-h-screen bg-rich-black">
      <main className="flex flex-col max-h-screen min-h-screen p-4 overflow-y-scroll"></main>
      <nav className="absolute bottom-0 flex items-baseline font-medium justify-between min-w-full px-8 py-4 text-white text-xs uppercase tracking-wider bg-gradient-to-b from-transparent to-[#00000074]">
        <a>About</a>
        <a>Work</a>
        <h3 className="text-3xl font-extrabold tracking-normal">
          <span className="text-salsa">HI</span>!
        </h3>
        <a>Contact</a>
        <a>Blog</a>
      </nav>
    </div>
  );
};

export default Home;
