import React from "react";

const SubHeroSection = () => {
  return (
    <div className="w-full border-y bg-brown border-lightCyan text-lightCyan flex justify-around uppercase xl:text-3xl md:text-2xl sm:text-4xl py-8 md:flex-row sm:flex-col items-center gap-4">
      <p className="md:block sm:hidden">Problem Solver</p>
      <p>Code Craftslady</p>
      <p className="md:block sm:hidden">Tech Innovator</p>
    </div>
  );
};

export default SubHeroSection;
