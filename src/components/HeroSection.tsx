import React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center py-16 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#292f36] text-center">
        Hey, I’m Sinan, Full-Stack Developer.
      </h2>
      <p className="max-w-xl text-center text-neutral-700 mb-6">
        I help business grow by crafting amazing web experiences. If you’re
        looking for a developer that likes to get stuff done, Let’s Talk.
      </p>
      <a
        href="#contact"
        className="bg-[#12f7d6] text-[#292f36] px-6 py-2 rounded font-semibold shadow hover:bg-[#0ed7b5] transition"
      >
        Let’s Talk
      </a>
    </section>
  );
};

export default HeroSection;
