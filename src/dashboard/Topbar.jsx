import React from 'react';
import { MdOutlineCalendarMonth , MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import profile from './assets/profile.png';

const Topbar = () => {
  return (
    <div className='flex justify-between items-center px-6 h-16 ml-[20px] fixed top-0 left-14 right-0 shadow border-b border-gray-200'>
      <p className='hidden md:block'>Dashboard</p>
      <div className='flex items-center relative'>
        <CiSearch className='hidden md:block'/>
        <input
          className='border w-64 h-10 p-4 rounded-[2rem] hidden md:block'
          type='text'
          placeholder='Search...'
        />
      </div>
      <div className='flex items-center gap-2'>
        <button className='border border-gray-300 dark:bg-[#34caa5] rounded-full w-10 h-10 items-center justify-center hidden md:flex'>
        <MdOutlineCalendarMonth className='hidden md:block' />
        </button>
        <p className='hidden md:block'>April 8, 2024</p>
      </div>
      <button className='border border-gray-300 dark:bg-[#34caa5] rounded-full w-10 h-10 items-center justify-center hidden md:flex'>
        <IoNotificationsOutline className='w-6 h-6 hidden md:block'/>
      </button>
      <button className='border border-gray-300 rounded-full md:w-64 w-[70px] md:h-16 h-[40px] flex items-center justify-center'>
        <div className='border-2 border-[#ffffff] w-7 h-7 rounded-full flex justify-center items-center'>
         <img src={profile} alt='profile' className='w-6 h-6 rounded-full'/>
        </div>
        <div className='hidden md:block'>
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
