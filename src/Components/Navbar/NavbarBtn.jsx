import React from 'react'

import { LuCircleArrowOutDownRight } from "react-icons/lu";
const NavbarBtn = () => {
  return (
    <button className='px-4 py-2 rounded-full text-xl text-white border-cyan border flex items-center font-bold gap-1 bg-gradient-to-r from-darkCyan to-orange hover:border-orange hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow'>
      Hire Me
      <div className='sm:hidden md:block'>
      <LuCircleArrowOutDownRight className='font-bold'/>
      </div>
    </button>
  )
}

export default NavbarBtn