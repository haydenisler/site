import type { FC } from 'react';

import { AboutHeader, Avatar } from '..';

export const AboutSection: FC = () => {
  return (
    <section className="flex flex-col items-center min-h-screen px-8 py-8 space-y-8 text-4xl font-extrabold text-white">
      <AboutHeader />
      <Avatar />
      <p className="mt-4 text-lg font-medium">
        A full-stack web developer in Austin, TX. I love music, dogs, and
        programming. Let&apos;s build something awesome together!
      </p>
    </section>
  );
};
