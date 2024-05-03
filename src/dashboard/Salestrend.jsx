import React from "react";
import boxtick from "../dashboard/assets/box-tick.svg";
import buy from "./assets/buy.svg";
import trendingup from "./assets/trending-up.svg";
import rotate from './assets/3d-rotate.svg';
import sell from './assets/sell.svg';
import trendingdown from './assets/trending-down.svg';
import cart from './assets/shopping-cart.svg';
import coin from './assets/coin.svg';

const Salestrend = () => {
  return (
    <div>
      <div className="flex">
        <div>Sales trend
          
        </div>
        <div>
          <div className="flex gap-[2rem] mt-[25px]">
            <div className="bg-[#fafafa] dark:bg-[#1e293b] h-[200px] w-[240px] p-[20px]  rounded-[1rem] ">
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
            <div className="bg-[#fafafa] dark:bg-[#1e293b] h-[200px] w-[240px] p-[20px] rounded-[1rem]">
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
            <div className="bg-[#fafafa] dark:bg-[#1e293b] h-[200px] w-[240px] p-[20px] rounded-[1rem]">
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
            <div className="bg-[#fafafa] dark:bg-[#1e293b] h-[200px] w-[240px] p-[20px] rounded-[1rem]">
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
