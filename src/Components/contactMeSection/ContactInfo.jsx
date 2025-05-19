import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
      <SingleInfo text="Anigbo Miracle" Image={HiOutlineMail} />
      <SingleInfo text="+2349039419079, +2348158033054" Image={FiPhone} />
      <SingleInfo text="Benin City, Nigeria" Image={SlLocationPin} />
    </div>
  );
};

export default ContactInfo;
