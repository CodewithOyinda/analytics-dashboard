import {useState, useEffect} from 'react';
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


    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
      );
      const element = document.documentElement
      const darkQuery = window.matchMedia("(prefers-color-scheme: dark)")
      const options = [
        {
          icon: "sunny" ,
          text: "light"
        },
        {
          icon: "moon" ,
          text: "dark" 
        },
        // {
        //   icon: "desktop-outline" ,
        //   text: "system" 
        // }
      ];
    //   function onWindowMatch() {
    //     if (localStorage.theme === 'dark' || (!("theme" in localStorage) && darkQuery.matches)
    //      ){
    //      element.classList.add("dark")
    
    //     }else{
    //     element.classList.remove("dark")
    //     }
    //   }
    //   onWindowMatch();
    
      useEffect (() => {
         switch (theme){
         case 'dark':
            element.classList.add('dark');
            localStorage.setItem('theme', 'dark')
            break;
          case 'light':
            element.classList.remove('dark');
            localStorage.setItem('theme', 'light')
            break;
         default:
          localStorage.removeItem('theme')
          onWindowMatch()
         break;
         }
      },[theme]);
    
    darkQuery.addEventListener('change', (e) =>{
      if(!("theme" in localStorage)){
       if(e.matches){
        element.classList.add("dark");
       }else{
        element.classList.remove("dark");
       }
      }
    })

  return (
    <div className='w-[80px] h-[100vh] shadow border-r border-gray-200 flex justify-center items-center flex-col gap-[1.5rem]'>
       
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
        <div className='top-1 right-10 duration-100 dark:bg-slate-800 border border-[#e6e6e6] md:border-visible border-hidden rounded flex flex-col items-center'>
          {
            options?.map(opt=>(
              <button 
              key={opt.text} 
              onClick={()=> setTheme(opt.text)}
              className={`md:w-8 md:h-8 w-5 h-5 md:leading-9 leading-6 md:text-xl text-[16px] rounded-full m-1 ${
                theme === opt.text && 'text-[#b2abab] bg-[#34caa5] rounded-[0.2rem]'
              } ${theme === 'light' && opt.text === 'light' && 'text-[#fafafa] bg-[#34caa5] rounded-[0.2rem]'}`}
            >
              <ion-icon name={opt.icon}></ion-icon>
              </button>
            ))
          }
          
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