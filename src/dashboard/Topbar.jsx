import React, { useState } from 'react';
import { MdOutlineCalendarMonth, MdOutlineKeyboardArrowDown, MdEventNote } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import profile from './assets/profile.png';

const Topbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className='flex justify-between items-center px-6 h-16 md:ml-[76px] ml-[80px] sticky top-0 left-14 right-0 shadow border-b border-gray-200'>
      <p className='hidden md:block'>Dashboard</p>
      <div className='flex items-center relative'>
        <CiSearch className='hidden md:block absolute pl-[10px] w-[30px]' />
        <input
          className='border w-64 h-10 pl-8 rounded-[2rem] hidden md:block'
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
        <IoNotificationsOutline className='w-6 h-6 hidden md:block' />
      </button>
      <button className='border border-gray-300 rounded-full md:w-64 w-[70px] md:h-16 h-[40px] flex items-center justify-center relative' onClick={toggleDropdown}>
        <div className='border-2 border-[#ffffff] w-7 h-7 rounded-full flex justify-center items-center'>
          <img src={profile} alt='profile' className='w-6 h-6 rounded-full' />
        </div>
        <div className='md:block hidden'>
          <p>Adegoke Oyindamola</p>
          <p className='text-sm text-gray-600'>adegokeoyinda.86@gmail.com</p>
        </div>
        <MdOutlineKeyboardArrowDown className='w-6 h-6 absolute right-0 top-1/2 transform -translate-y-1/2' onClick={toggleDropdown} />
      </button>
      {dropdownOpen && (
        <div className="absolute top-[38px] right-0 bg-white dark:bg-gray-800 shadow-md rounded-md">
          <button className="flex items-center gap-[0.5rem] w-[200px] py-2 px-4 text-left hover:bg-[#34caa5] hover:text-[#fafafa]"> <MdEventNote /> Go to Home</button>
          <button className="flex items-center gap-[0.5rem] w-[200px] py-2 px-4 text-left hover:bg-[#34caa5] hover:text-[#fafafa]"> <MdEventNote /> Logout</button>
        </div>
      )}
    </div>
  );
};

export default Topbar;
