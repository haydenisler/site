import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import type { FC } from 'react';

const animationVariants: {
  [key: string]: Variants;
} = {
  paragraph: {
    start: {
      opacity: 0,
      y: 100,
    },
    end: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 2,
      },
    },
  },
};

export const AboutSection: FC = () => {
  return (
    <section className="flex flex-col justify-center min-h-screen px-8 py-8 text-6xl font-extrabold text-white">
      <div className="flex items-center justify-center rounded-full bg-gradient-to-br from-salsa via-tangerine to-sunflower w-52 h-52">
        <div className="flex items-center justify-center w-[12.5rem] h-[12.5rem] rounded-full bg-rich-black">
          <div className="flex items-center justify-center w-48 h-48 rounded-full bg-cadet">
            <span className="text-8xl">👹</span>
          </div>
        </div>
      </div>

      <motion.p
        className="mt-4 text-lg font-medium"
        variants={animationVariants.paragraph}
        initial="start"
        animate="end"
      >
        A full-stack web developer in Austin, TX. I love music, dogs, and
        programming. Let&apos;s build something together!
      </motion.p>
    </section>
  );
};
