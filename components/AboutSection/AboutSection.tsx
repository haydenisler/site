import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import type { FC } from 'react';

import { Avatar } from '..';

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
      <Avatar />

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
