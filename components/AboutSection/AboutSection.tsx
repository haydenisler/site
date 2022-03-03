import type { FC } from 'react';

export const AboutSection: FC = () => {
  return (
    <section className="flex flex-col justify-center min-h-screen px-8 py-8 text-6xl font-extrabold text-white">
      <h1>
        <span className="text-salsa">HI</span>! I&apos;m Hayden Isler
      </h1>

      <p className="mt-4 text-lg font-medium">
        A full-stack web developer in Austin, TX. I love music, dogs, and
        programming. Let&apos;s build something together!
      </p>
    </section>
  );
};
