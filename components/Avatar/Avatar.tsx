import type { FC } from 'react';

export const Avatar: FC = () => {
  return (
    <div className="flex items-center justify-center rounded-full bg-gradient-to-br from-salsa via-tangerine to-sunflower w-52 h-52">
      <div className="flex items-center justify-center w-[12.5rem] h-[12.5rem] rounded-full bg-rich-black">
        <div className="flex items-center justify-center w-48 h-48 rounded-full bg-cadet">
          <span className="text-8xl">👹</span>
        </div>
      </div>
    </div>
  );
};
