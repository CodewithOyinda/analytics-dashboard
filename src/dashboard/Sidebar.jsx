import React from 'react';
import vector from '../dashboard/assets/Vector.svg';
import category from '../dashboard/assets/category.svg';
import trend from '../dashboard/assets/trend-up.svg';
import profile from '../dashboard/assets/profile-2user.svg';
import box from '../dashboard/assets/box.svg';
import discount from '../dashboard/assets/discount-shape.svg';
import info from '../dashboard/assets/info-circle.svg';
import arrow from '../dashboard/assets/arrow-right.svg';
import logout from '../dashboard/assets/logout.svg';
import setting from '../dashboard/assets/setting-2.svg';




const Sidebar = () => {
  return (
    <div className='w-[80px] border border-[#F5F5F5] flex justify-center items-center flex-col gap-[1.5rem]'>
        <div>
         <img src={vector} alt='vector'/>
        </div>
        <div> 
         <img src={category} alt='category'/>
        </div>
        <div>
         <img src={trend} alt='trend'/>
        </div>
        <div>
         <img src={profile} alt='profile'/>
        </div>
        <div>
         <img src={box} alt='box'/>
        </div>
        <div>
         <img src={discount} alt='discount'/>
        </div>
        <div>
         <img src={info} alt='info'/>
        </div>
        <div>
         <img src={arrow} alt='arrow'/>
        </div>
        <div>
         <img src={setting} alt='setting'/>
        </div>
        <div>
         <img src={logout} alt='logout'/>
        </div>
    </div>
  )
}

export default Sidebar