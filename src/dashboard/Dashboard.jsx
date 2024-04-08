import React from 'react'
import { MdOutlineCalendarMonth , MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import Sidebar from './Sidebar';

const Dashboard = () => {
  return (
    <div className='flex w-full relative pt-[15px] bg-[#f7f8fa]'>
    <div className='w-100px z-[20] flex h-full'>
        <Sidebar/>
    </div>
      <div className='flex justify-between flex-row items-center'>
       <p>Dashboard</p>
       <div className='flex items-center'>
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
      
    </div>
  )
}

export default Dashboard