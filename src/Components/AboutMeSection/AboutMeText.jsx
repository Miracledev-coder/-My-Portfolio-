import React from "react";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left ">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-white">
        I'm Miracle, a front-end developer and brand designer with over 2 years
        of experience. I specialize in creating engaging user interfaces and
        memorable brand experiences that connect with customers. My passion lies
        in understanding user journeys and translating brand stories into
        beautiful, functional websites. I love turning complex ideas into
        elegant solutions that help businesses make their mark in the digital
        world. When I'm not coding, I'm exploring new design trends and finding
        ways to make technology more accessible and user-friendly.
      </p>
      <button
        className="border border-orange rounded-full py-2 px-4 text-lg flex items-center
       mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center
       text-white hover:text-cyan "
      >
        My Projects
      </button>
    </div>
  );
};

export default AboutMeText;
