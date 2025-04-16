import React from "react";

const SkillsSection = () => {
  return (
    <section className="w-full flex flex-col items-center py-12 bg-white">
      <h2 className="text-xl md:text-2xl font-bold mb-6 text-[#12f7d6]">
        Skills & Technologien
      </h2>
      <div className="flex flex-wrap gap-4 justify-center">
        <span className="bg-[#292f36] text-[#12f7d6] px-4 py-2 rounded-full font-medium">
          React
        </span>
        <span className="bg-[#292f36] text-[#12f7d6] px-4 py-2 rounded-full font-medium">
          Node.js
        </span>
        <span className="bg-[#292f36] text-[#12f7d6] px-4 py-2 rounded-full font-medium">
          TypeScript
        </span>
        <span className="bg-[#292f36] text-[#12f7d6] px-4 py-2 rounded-full font-medium">
          Next.js
        </span>
        <span className="bg-[#292f36] text-[#12f7d6] px-4 py-2 rounded-full font-medium">
          Tailwind CSS
        </span>
        <span className="bg-[#292f36] text-[#12f7d6] px-4 py-2 rounded-full font-medium">
          MongoDB
        </span>
      </div>
    </section>
  );
};

export default SkillsSection;
