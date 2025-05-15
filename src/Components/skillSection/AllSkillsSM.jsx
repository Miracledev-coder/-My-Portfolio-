import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaFigma } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiElementor, SiRedux } from "react-icons/si";
import { TbBrandAdobePhotoshop } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaWordpressSimple } from "react-icons/fa";
import { FaElementor } from "react-icons/fa6";

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

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <div key={index} className="flex flex-col items-center">
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4 text-white">{item.skill}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
