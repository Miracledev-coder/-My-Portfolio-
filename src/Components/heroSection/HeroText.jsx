import React from "react";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <h2 className="lg:text-xl sm:text-l text-cyan">
        FRONT-END WEBSITE DEVELOPER
      </h2>
      <h1 className="md:text-[2.8rem] sm:text-4xl text-4xl font-bold font-special text-orange">
        ANIGBO MIRACLE
      </h1>
      <p className="text-2xl mt-4 text-white sm:text-xl">
        A Passion Driven Website Developer and <br />
        Brand Designer with over 2 years of experience.
      </p>
    </div>
  );
};

export default HeroText;
