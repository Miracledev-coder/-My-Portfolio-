import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { BiLogoTiktok } from "react-icons/bi";
import SingleContactSocial from "./SingleContactSocial";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="#" Icon={FaLinkedinIn} />
      <SingleContactSocial link="#" Icon={FiGithub} />
      <SingleContactSocial link="#" Icon={BiLogoTiktok} />
    </div>
  );
};

export default ContactSocial;
