import React from "react";
import boxtick from "../dashboard/assets/box-tick.svg";
import buy from "./assets/buy.svg";
import trendingup from "./assets/trending-up.svg";
import rotate from './assets/3d-rotate.svg';
import sell from './assets/sell.svg';
import trendingdown from './assets/trending-down.svg';

const Salestrend = () => {
  return (
    <div>
      <div className="flex">
        <div>Sales trend</div>
        <div>
          <div className="flex">
            <div className="bg-[#fafafa] h-[200px] w-[200px] p-[20px] overflow-x-auto">
              <div className="flex justify-between">
                <img src={boxtick} alt="boxtick" />
                <img src={buy} alt="buy" />
              </div>
              <p>Total Order</p>
              <p>350</p>
              <div className="flex justify-between">
                <button className="flex bg-[#e6f9f4] text-[#56cba5] h-[20px] w-[70px] items-center justify-center rounded-[2rem]">
                  {" "}
                  <img src={trendingup} alt="trendingup" /> <p>23.5</p>
                </button>
                <p>vs. previous month</p>
              </div>
            </div>
            <div className="bg-[#fafafa] h-[200px] w-[200px] p-[20px] overflow-x-auto">
              <div className="flex justify-between">
                <img src={rotate} alt="rotate" />
                <img src={sell} alt="sell" />
              </div>
              <p>Total Order</p>
              <p>350</p>
              <div className="flex justify-between">
                <button className="flex bg-[#fdeae9] text-[#ed5958] h-[20px] w-[70px] items-center justify-center rounded-[2rem]">
                  {" "}
                  <img src={trendingdown} alt="trendingdown" /> <p>23.5</p>
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
