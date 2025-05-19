import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2 className="lg:text-xl sm:text-l text-cyan">
        FRONT-END WEBSITE DEVELOPER
      </motion.h2>
      <motion.h1 className="md:text-[2.8rem] sm:text-4xl text-4xl font-bold font-special text-orange">
        ANIGBO MIRACLE
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-2xl mt-4 text-white sm:text-xl"
      >
        A Passion Driven Website Developer and <br />
        Brand Designer with over 2 years of experience.
      </motion.p>
    </div>
  );
};

export default HeroText;
