import React from 'react'
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const Dashboard = () => {
  return (
    <div className='flex w-full relative  bg-[#f7f8fa] dark:text-gray-100 dark:bg-slate-900 duration-100'>
      <div className='z-[20] flex h-full'>
        <Sidebar/>
      </div>
      <div >
       <Topbar/>
      </div>
    </div>
  )
}

export default Dashboard