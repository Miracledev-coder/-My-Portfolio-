import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaFigma } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { TbBrandAdobePhotoshop } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaWordpressSimple } from "react-icons/fa";
import { FaElementor } from "react-icons/fa6";
import SingleSkill from "./SingleSkill";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },

  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "Redux",
    icon: SiRedux,
  },

  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
  {
    skill: "Wordpress",
    icon: FaWordpressSimple,
  },
  {
    skill: "Elementor",
    icon: FaElementor,
  },
  {
    skill: "Figma",
    icon: FaFigma,
  },
  {
    skill: "Photoshop",
    icon: TbBrandAdobePhotoshop,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <SingleSkill key={index} text={item.skill} imgSvg={<item.icon />} />
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
