import React from 'react';
import { MdOutlineCalendarMonth , MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

const Topbar = () => {
  return (
    <div className='flex justify-between items-center px-6 h-16 ml-[20px] fixed top-0 left-14 right-0 shadow border-b border-gray-200'>
      <p>Dashboard</p>
      <div className='flex items-center relative'>
        <CiSearch />
        <input
          className='border w-64 h-10 p-2 rounded-lg'
          type='text'
          placeholder='Search...'
        />
      </div>
      <div className='flex items-center gap-2'>
        <MdOutlineCalendarMonth />
        <p> April 8, 2024</p>
      </div>
      <button className='border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center'>
        <IoNotificationsOutline className='w-6 h-6'/>
      </button>
      <button className='border border-gray-300 rounded-full w-64 h-16 flex items-center justify-center'>
        <div><CgProfile /></div>
        <div>
          <p>Adegoke Oyindamola</p>
          <p className='text-sm text-gray-600'>adegokeoyinda.86@gmail.com</p>
        </div>
        <div>
          <MdOutlineKeyboardArrowDown className='w-6 h-6'/>
        </div>
      </button>
    </div>
  )
}

export default Topbar
