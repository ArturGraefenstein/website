import React from "react";

const AboutSection = () => {
  return (
    <section className="w-full flex flex-col items-center py-16 bg-[#f5f5f5]">
      <div className="max-w-2xl">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#12f7d6]">
          About Me
        </h2>
        <p className="text-neutral-700 mb-2">
          I’m passionate about building modern web and mobile apps. My focus is
          on React, Node.js and user-centric design.
        </p>
        <p className="text-neutral-700 mb-2">
          I love to solve complex problems and turn them into elegant,
          minimalistic solutions.
        </p>
        <p className="text-neutral-700">
          In my free time, I enjoy UI/UX, open source and new web technologies.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
