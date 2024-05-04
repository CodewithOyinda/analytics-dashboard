import React from "react";
import boxtick from "../dashboard/assets/box-tick.svg";
import buy from "./assets/buy.svg";
import trendingup from "./assets/trending-up.svg";
import rotate from './assets/3d-rotate.svg';
import sell from './assets/sell.svg';
import trendingdown from './assets/trending-down.svg';
import cart from './assets/shopping-cart.svg';
import coin from './assets/coin.svg';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const CustomTick = ({ x, y, payload }) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="middle" fill="#666">{payload.value}</text>
    </g>
  );
};

const Salestrend = () => {

  const data = [
    {
      name: 'Jan',
      // uv: 4000,
      pv: 8000,
      amt: 2400,
    },
    {
      name: 'Feb',
      // uv: 3000,
      pv: 15000,
      amt: 2210,
    },
    {
      name: 'Mar',
      // uv: 2000,
      pv: 3000,
      amt: 2290,
    },
    {
      name: 'Apr',
      // uv: 2780,
      pv: 23000,
      amt: 2000,
    },
    {
      name: 'May',
      // uv: 1890,
      pv: 8000,
      amt: 2181,
    },
    {
      name: 'Jun',
      // uv: 2390,
      pv: 45000,
      amt: 2500,
    },
    {
      name: 'Jul',
      // uv: 3490,
      pv: 8000,
      amt: 2100,
    },
    {
      name: 'Aug',
      // uv: 3490,
      pv: 16000,
      amt: 2100,
    },
    {
      name: 'Sep',
      // uv: 3490,
      pv: 40000,
      amt: 2100,
    },
    {
      name: 'Oct',
      // uv: 3490,
      pv: 4000,
      amt: 2100,
    },
    {
      name: 'Nov',
      // uv: 3490,
      pv: 30000,
      amt: 2100,
    },
    {
      name: 'Dec',
      // uv: 3490,
      pv: 25000,
      amt: 2100,
    },
  ];
  


  return (
    <div>
      <div className="flex gap-[1rem] p-[20px]">
        <div className="w-[650px] h-[400px] bg-[#ffffff] dark:bg-[#1e293b] mt-[25px] rounded-[1rem]">
          <div className="flex justify-between">
            <p className='font-[600] text-[18px]'>Sales Trends</p>
            <div className="flex">
            <p>Sort By: </p>
            <button className="border border-gray-300 rounded-[1rem] w-[80px] h-[30px] flex text-[12px] justify-center items-center">Monthly <MdOutlineKeyboardArrowDown className='w-6 h-6'/> </button>
            </div>
          </div>
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={0} tick={<CustomTick />} />
          <YAxis ticks={[10000, 20000, 30000, 40000, 50000, 60000]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#eafaf6" activeBar={<Rectangle fill="eafaf6" stroke="eafaf6" />} />
          {/* <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} /> */}
        </BarChart>
      </ResponsiveContainer>
        </div>
        <div>
          <div className="flex gap-[2rem] mt-[25px]">
            <div className="bg-[#ffffff] dark:bg-[#1e293b] h-[200px] w-[240px] p-[20px]  rounded-[1rem] ">
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
            <div className="bg-[#ffffff] dark:bg-[#1e293b] h-[200px] w-[240px] p-[20px] rounded-[1rem]">
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
          <div className="flex gap-[2rem] mt-[25px]">
            <div className="bg-[#ffffff] dark:bg-[#1e293b] h-[200px] w-[240px] p-[20px] rounded-[1rem]">
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
            <div className="bg-[#ffffff] dark:bg-[#1e293b] h-[200px] w-[240px] p-[20px] rounded-[1rem]">
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
