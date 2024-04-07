import React from 'react'
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const Dashboard = () => {
  return (
    <div>
      <div className='flex justify-between flex-row'>
       <p>Dashboard</p>
       <CiSearch />
       <input
       className='border w-[200px] h-[40px]'
       type='text'
       />
       <p><MdOutlineCalendarMonth /> April 8, 2024</p>
       <button><IoNotificationsOutline /></button>
       <button>
        <p>Adegoke Oyindamola</p>
        <p>adegokeoyinda.86@gmail.com</p>
       </button>
      </div>
    </div>
  )
}

export default Dashboard