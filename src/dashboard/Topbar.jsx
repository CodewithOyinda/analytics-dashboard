import React from 'react';
import { MdOutlineCalendarMonth , MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

const Topbar = () => {
  return (
    <div className='flex justify-between flex-row items-center p-[15px] h-[100px] fixed border-b-[#edeef0]'>
         <p>Dashboard</p>
       <div className='flex items-center relative'>
       <CiSearch  className=''/>
       <input
       className='border w-[300px] h-[40px] p-[15px] rounded-[3rem]'
       type='text'
       placeholder='Search...'
       />
       </div>
       <div className='flex items-center gap-[0.5rem]'>
       <MdOutlineCalendarMonth />
       <p> April 8, 2024</p>
       </div>
       <button className='border border-[#e6e8e9] rounded-[50%] w-[40px] h-[40px] flex items-center justify-center'><IoNotificationsOutline className='w-[20px] h-[20px]'/></button>
       
       <button className='border border-[#e6e8e9] rounded-[3rem] w-[250px] h-[70px] flex items-center justify-center'>
        <div><CgProfile /></div>
        <div>
        <p>Adegoke Oyindamola</p>
        <p className='text-[13px] text-[#8c8998]'>adegokeoyinda.86@gmail.com</p>
        </div>
        <div>
        <MdOutlineKeyboardArrowDown className='w-[25px] h-[25px]'/>
        </div>
       </button>
    </div>
  )
}

export default Topbar