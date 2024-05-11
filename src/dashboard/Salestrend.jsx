import React, {useState} from "react";
import boxtick from "../dashboard/assets/box-tick.svg";
import buy from "./assets/buy.svg";
import trendingup from "./assets/trending-up.svg";
import rotate from './assets/3d-rotate.svg';
import sell from './assets/sell.svg';
import trendingdown from './assets/trending-down.svg';
import cart from './assets/shopping-cart.svg';
import coin from './assets/coin.svg';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MdOutlineKeyboardArrowDown, MdEventNote } from "react-icons/md";



const Salestrend = () => {
  const [filterOption, setFilterOption] = useState('monthly');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const monthlyData = [
    {
      name: 'Jan',
      pv: 8000,
    },
    {
      name: 'Feb',
      pv: 15000,
    },
    {
      name: 'Mar',
      pv: 3000,
    },
    {
      name: 'Apr',
      pv: 23000,
    },
    {
      name: 'May',
      pv: 8000,
    },
    {
      name: 'Jun',
      pv: 45000,
    },
    {
      name: 'Jul',
      pv: 8000,
    },
    {
      name: 'Aug',
      pv: 16000,
    },
    {
      name: 'Sep',
      pv: 40000,
    },
    {
      name: 'Oct',
      pv: 4000,
    },
    {
      name: 'Nov',
      pv: 30000,
    },
    {
      name: 'Dec',
      pv: 25000,
    },
  ];
  
  const weeklyData = [
    {
      name: 'Wk1',
      pv: 8000,
    },
    {
      name: 'Wk2',
      pv: 15000,
    },
    {
      name: 'Wk3',
      pv: 3000,
    },
    {
      name: 'Wk4',
      pv: 23000,
    },
    {
      name: 'Wk5',
      pv: 8000,
    },
    {
      name: 'Wk6',
      pv: 45000,
    },
    {
      name: 'Wk7',
      pv: 8000,
    },
    {
      name: 'Wk8',
      pv: 16000,
    },
    {
      name: 'Wk9',
      pv: 40000,
    },
    {
      name: 'Wk10',
      pv: 4000,
    },
    {
      name: 'Wk11',
      pv: 30000,
    },
    {
      name: 'Wk12',
      pv: 25000,
    },
  ];
 

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleFilterChange = (option) => {
    setFilterOption(option);
    setDropdownOpen(false);
  };
  const data = filterOption === 'monthly' ? monthlyData : weeklyData;


  return (
    <div className="">
      <div className="flex gap-[1rem] p-[20px] md:flex-row flex-col">
        <div className="md:w-[650px] w-[300px] h-[400px] bg-[#ffffff] dark:bg-[#1e293b] mt-[px] rounded-[1rem] overflow-x-scroll p-[20px]">
          <div className="flex justify-between">
            <p className='font-[600] text-[18px]'>Sales Trends</p>
            <div className="relative">
              <div className="flex gap-[0.3rem]">
              <div><p>Sort By: </p></div>
            {/* <button className="border border-gray-300 rounded-[1rem] w-[80px] h-[30px] flex text-[12px] justify-center items-center">Monthly <MdOutlineKeyboardArrowDown className='w-6 h-6'/> </button> */}
            <button className={`border border-gray-300 rounded-[1rem] w-[80px] p-[10px] h-[30px] flex text-[12px] justify-between items-center ${dropdownOpen ? '' : ''}`} onClick={toggleDropdown}>
                {filterOption === 'monthly' ? 'Monthly' : 'Weekly'} <MdOutlineKeyboardArrowDown className='w-6 h-6'/>
              </button>
              {dropdownOpen && (
                <div className="absolute top-[38px] right-0 bg-white dark:bg-gray-800 shadow-md rounded-md">
                  <button className="flex items-center gap-[0.5rem] w-[200px] py-2 px-4 text-left hover:bg-[#34caa5] hover:text-[#fafafa]" onClick={() => handleFilterChange('monthly')}> <MdEventNote /> Monthly</button>
                  <button className="flex items-center gap-[0.5rem] w-[200px] py-2 px-4 text-left hover:bg-[#34caa5] hover:text-[#fafafa]" onClick={() => handleFilterChange('weekly')}> <MdEventNote /> Weekly</button>
                </div>
              )}
              </div>
            </div>
          </div>
        <ResponsiveContainer width="100%" height="100%" className="pt-[30px]">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 5,
            left: 5,
            bottom: 5,
          }}
        >
         <CartesianGrid stroke="rgba(0, 0, 0, 0.15)" vertical={false} strokeDasharray="3 3"/>
          <XAxis dataKey="name" interval={0}  />
          <YAxis ticks={[0, 10000, 20000, 30000, 40000, 50000, 60000]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#eafaf6" activeFill="#eafaf6" />
          {/* <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} /> */}
        </BarChart>
      </ResponsiveContainer>
        </div>
        <div>
          <div className="flex gap-[2rem] mt-[px] md:flex-row flex-col">
            <div className="bg-[#ffffff] dark:bg-[#1e293b] h-[200px] md:w-[240px] w-[300px] p-[20px]  rounded-[1rem] ">
              <div className="flex justify-between">
                <div className="border border-[#e7e7e7] rounded-[50%] w-[40px] h-[40px] flex items-center justify-center align-middle">
                <img src={boxtick} alt="boxtick" />
                </div>
                <img src={buy} alt="buy" />
              </div>
              <p className="text-[#898989] text-[20px]">Total Order</p>
              <p className="text-[24px] font-bold">350</p>
              <div className="flex justify-between items-center gap-[1rem] pt-[10px]">
                <button className="flex bg-[#e6f9f4] text-[#56cba5] h-[20px] w-[70px] items-center justify-center rounded-[2rem] gap-[0.5rem]">
                  {" "}
                  <img src={trendingup} alt="trendingup" /> <p className="text-[12px]">23.5</p>
                </button>
                <p>vs. previous month</p>
              </div>
            </div>
            <div className="bg-[#ffffff] dark:bg-[#1e293b] h-[200px] md:w-[240px] w-[300px] p-[20px] rounded-[1rem]">
              <div className="flex justify-between">
                <div className="border border-[#e7e7e7] rounded-[50%] w-[40px] h-[40px] flex items-center justify-center align-middle">
                <img src={rotate} alt="rotate" />
                </div>
                <img src={sell} alt="sell" />
              </div>
              <p className="text-[#898989] text-[20px]">Total Refund</p>
              <p className="text-[24px] font-bold">270</p>
              <div className="flex justify-between items-center gap-[1rem] pt-[10px]">
                <button className="flex bg-[#fdeae9] text-[#ed5958] h-[20px] w-[70px] items-center justify-center rounded-[2rem] gap-[0.5rem]">
                  {" "}
                  <img src={trendingdown} alt="trendingdown" /> <p className="text-[12px]">23.5</p>
                </button>
                <p>vs. previous month</p>
              </div>
            </div>
          </div>
          <div className="flex gap-[2rem] mt-[25px] md:flex-row flex-col">
            <div className="bg-[#ffffff] dark:bg-[#1e293b] h-[200px] md:w-[240px] w-[300px] p-[20px] rounded-[1rem]">
              <div className="flex justify-between">
                <div className="border border-[#e7e7e7] rounded-[50%] w-[40px] h-[40px] flex items-center justify-center align-middle">
                <img src={cart} alt="cart" />
                </div>
                <img src={sell} alt="sell" />
              </div>
              <p className="text-[#898989] text-[20px]">Average Sales</p>
              <p className="text-[24px] font-bold">1567</p>
              <div className="flex justify-between items-center gap-[1rem] pt-[10px]">
                <button className="flex bg-[#fdeae9] text-[#ed5958] h-[20px] w-[70px] items-center justify-center rounded-[2rem] gap-[0.5rem]">
                  {" "}
                  <img src={trendingdown} alt="trendingdown" /> <p className="text-[12px]">23.5</p>
                </button>
                <p>vs. previous month</p>
              </div>
            </div>
            <div className="bg-[#ffffff] dark:bg-[#1e293b] h-[200px] md:w-[240px] w-[300px] p-[20px] rounded-[1rem]">
              <div className="flex justify-between">
                <div className="border border-[#e7e7e7] rounded-[50%] w-[40px] h-[40px] flex items-center justify-center align-middle">
                <img src={coin} alt="coin" />
                </div>
                <img src={buy} alt="buy" />
              </div>
              <p className="text-[#898989] text-[20px]">Total Income</p>
              <p className="text-[24px] font-bold">400</p>
              <div className="flex justify-between items-center gap-[1rem] pt-[10px]">
                <button className="flex bg-[#e6f9f4]  text-[#56cba5] h-[20px] w-[70px] items-center justify-center rounded-[2rem] gap-[0.5rem]">
                  {" "}
                  <img src={trendingup} alt="trendingup" /> <p className="text-[12px]">23.5</p>
                </button>
                <p>vs. previous month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Salestrend;
