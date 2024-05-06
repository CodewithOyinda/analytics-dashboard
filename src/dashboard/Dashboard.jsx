import React, {useState} from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Salestrend from './Salestrend';
import Orders from './Orders';

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openMenu, setopenMenu] = useState(false);
  const [header, setHeader] = useState('Dashboard')
  return (
    // <div className='flex w-full bg-[#f7f8fa] dark:text-gray-100 dark:bg-slate-900 -100duration top-0'>
    //   <Sidebar />
    //   <div className='flex flex-col w-full'>
    //     <Topbar />
    //     <div className='mt-16'>
    //       {/* Content for the dashboard */}
    //       <Salestrend/>
    //       <Orders/>
    //     </div>
    //   </div>
    // </div>
    <div className="w-full relative flex lg:flex-ro flex-col transition-all bg-[#f7f8fa] dark:text-gray-100 dark:bg-slate-900 duration-500 overflow-hidden h-screen">
       <div className={`${openModal ? 'z-20' :"z-[30]"}`}>
        <Topbar openMenu={openMenu} setopenMenu={setopenMenu} header={header}/>
      </div>
      <div className="w-full z-[20] flex h-full">
        <Sidebar openMenu={openMenu} closeMenu={()=>setopenMenu(false)} />
        {openMenu && (
          <div
            onClick={() => setopenMenu(false)}
            className="bg-transparent w-full fixed z-[99] top-0 bottom-0 left-0"
          ></div>
        )}
        <div className="w-full shrink max-lg:flex-1 pl-0 mx-lg:pl-[70px] lg:pl[230px] h-full overflow-scroll z-[30]">
        <Salestrend/>
        <Orders/>
          {/* <ProjectModal
            openModal={openModal}
            closeModal={() => setOpenModal(false)}
          />
          <Outlet context={[openModal, setOpenModal, setHeader, header]} /> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
