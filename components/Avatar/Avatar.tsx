import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import type { FC } from 'react';

export interface AvatarProps {
  variants?: Variants;
  initial?: string;
  animate?: string;
}

export const Avatar: FC<AvatarProps> = ({ variants, initial, animate }) => {
  return (
    <motion.div
      variants={variants}
      initial={initial}
      animate={animate}
      className="flex items-center justify-center rounded-full w-44 h-44 bg-gradient-to-br from-salsa via-tangerine to-sunflower"
    >
      <div className="flex items-center justify-center w-[10.5rem] h-[10.5rem] rounded-full bg-rich-black">
        <div className="flex items-center justify-center w-40 h-40 rounded-full bg-cadet">
          <span className="text-7xl">👹</span>
        </div>
      </div>
    </motion.div>
  );
};
