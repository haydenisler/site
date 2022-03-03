import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import type { FC } from 'react';

export const Avatar: FC = () => {
  const animation: Variants = {
    start: {
      transform: 'rotate(0deg)',
    },
    end: {
      transform: 'rotate(360deg)',
      transition: {
        duration: 5,
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="relative flex items-center justify-center flex-grow-0">
      <div className="z-10 flex items-center justify-center w-[12.5rem] h-[12.5rem] rounded-full bg-rich-black">
        <div className="flex items-center justify-center w-48 h-48 rounded-full bg-cadet">
          <span className="text-8xl">👹</span>
        </div>
      </div>
      <motion.div
        className="absolute z-0 flex items-center justify-center rounded-full bg-gradient-to-br from-salsa via-tangerine to-sunflower w-52 h-52"
        variants={animation}
        initial="start"
        animate="end"
      />
    </div>
  );
};
