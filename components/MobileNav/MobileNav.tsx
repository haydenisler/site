import type { FC } from 'react';

export const MobileNav: FC = () => {
  return (
    <nav className="absolute bottom-0 flex items-baseline font-medium justify-between min-w-full px-8 py-4 text-white text-xs uppercase tracking-wider bg-gradient-to-b from-transparent to-[#00000074]">
      <a>About</a>
      <a>Work</a>
      <h3 className="text-3xl font-extrabold tracking-normal">
        <span className="text-salsa">HI</span>!
      </h3>
      <a>Contact</a>
      <a>Blog</a>
    </nav>
  );
};
