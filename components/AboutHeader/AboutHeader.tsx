import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import { FC } from 'react';

const variants: {
  [x: string]: Variants;
} = {
  imVariant: {
    start: {
      opacity: 0,
    },
    end: {
      opacity: 1,
      transition: {
        delay: 1,
      },
    },
  },
  exclaimationVariant: {
    start: {
      opacity: 1,
      x: 37,
      y: -120,
    },
    end: {
      opacity: 0,
      x: 51,
      y: -120,
      transition: {
        delay: 1,
      },
    },
  },
  hVariant: {
    start: {
      y: -40,
    },
    end: {
      y: 0,
      transition: {
        delay: 1,
      },
    },
  },
  iVariant: {
    start: {
      y: -80,
      x: 27,
    },
    end: {
      y: 0,
      x: 0,
      transition: {
        delay: 1,
      },
    },
  },
  subVariant: {
    start: {
      opacity: 0,
    },
    end: {
      opacity: 1,
      transition: {
        delay: 1,
      },
    },
  },
};

export const AboutHeader: FC = () => {
  return (
    <h1 className="relative min-w-full">
      <motion.div variants={variants.imVariant} initial="start" animate="end">
        I&apos;m
      </motion.div>
      <motion.div variants={variants.hVariant} initial="start" animate="end">
        H
        <motion.span
          variants={variants.subVariant}
          initial="start"
          animate="end"
        >
          ayden
        </motion.span>
      </motion.div>
      <motion.div variants={variants.iVariant} initial="start" animate="end">
        I
        <motion.span
          variants={variants.subVariant}
          initial="start"
          animate="end"
        >
          sler.
        </motion.span>
      </motion.div>
      <motion.div
        className="absolute"
        variants={variants.exclaimationVariant}
        initial="start"
        animate="end"
      >
        !
      </motion.div>
    </h1>
  );
};
