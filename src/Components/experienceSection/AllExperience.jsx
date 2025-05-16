import React from "react";
import SingleExperience from "./SingleExperience";
import { FaArrowRight } from "react-icons/fa6";

const experiences = [
  {
    job: "E-commerce Web Designer",
    company: "Tula Animal Affairs",
    date: "Feb 2025 - April 2025",
    responsibilities: [
      "Visually appealing and brand-consistent design.",
      "Improved online user experience.",
      "Improved Store Inventory Process.",
      "Utilized industry-standard design tools to edit product images",
    ],
  },
  {
    job: "Web Designer & Seo Specialist",
    company: "Manrage Agency",
    date: "April 2023 - July 2024",
    responsibilities: [
      "Website redesign projects",
      "Implemented SEO strategies that increased organic traffic by 60%.",
      "Optimized website loading speeds by 80%",
      "Conducted regular A/B tests",
    ],
  },
  {
    job: "Web Designer",
    company: "FIOS Nigeria Limited",
    date: "March 2024 - May 2024",
    responsibilities: [
      "Increased conversion rates by 35% through strategic Branding enhancements.",
      "Optimized site performance, reducing page load times by 60%.",
      "Revitalized the online platform's user interface.",
    ],
  },
  {
    job: " E-commerce Web Designer",
    company: "Genesis Natural Hair Care",
    date: "Jan 2024 - Feb 2024",
    responsibilities: [
      "Launched an e-commerce website, increasing overall sales by 35%.",
      "Implemented a streamlined checkout process.",
      "Visually appealing and brand-consistent design.",
    ],
  },
];

const AllExperience = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => (
        <React.Fragment key={index}>
          <SingleExperience experience={experience} />
          {index < experiences.length - 1 && (
            <FaArrowRight className="text-6xl text-orange lg:block sm:hidden" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default AllExperience;
