import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Salestrend from './Salestrend';
import Orders from './Orders';

const Dashboard = () => {
  return (
    <div className='flex w-full bg-[#f7f8fa] dark:text-gray-100 dark:bg-slate-900 -100duration'>
      <Sidebar />
      <div className='flex flex-col w-full'>
        <Topbar />
        <div className='px-14 mt-16'>
          {/* Content for the dashboard */}
          <Salestrend/>
          <Orders/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
