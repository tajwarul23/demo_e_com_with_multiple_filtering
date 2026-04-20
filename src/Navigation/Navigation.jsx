import React from 'react'
import { FiHeart } from 'react-icons/fi'
import { RiShoppingCartLine } from "react-icons/ri";
import { AiOutlineUserAdd } from "react-icons/ai";

const Navigation = () => {
  return (
    <nav className='max-w-full mx-auto sm:px-6 lg:px-8 py-6 shadow-[0_2px_12px_rgba(0,0,0,0.08)]'>
      <div className='max-w-4xl mx-auto flex items-center justify-between'>
        {/* Search bar */}
      <div><input type="text" placeholder='Enter Your Search Shoes' className='border-2 rounded-md px-2 '/></div>

      {/* Profile option */}
      <div className='flex gap-5 text-lg'>
        <a href="#"><FiHeart></FiHeart></a>
        <a href="#"><RiShoppingCartLine></RiShoppingCartLine></a>
        <a href="#"><AiOutlineUserAdd></AiOutlineUserAdd></a>
      </div>
      </div>
    </nav>
  )
}

export default Navigation