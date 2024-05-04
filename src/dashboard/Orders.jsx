import React, {useState} from 'react'
import marcus from './assets/marcus.png';
import jaydon from './assets/jaydon.png';
import corey from './assets/corey.png';
import cooper from './assets/cooper.png';
import philip from './assets/phillip.png';
import view from './assets/download.svg';

const Orders = () => {
  const lastOrders = [
    {
      img:marcus,
      name:'Marcus Bergson',
      date:'Nov 15, 2023',
      amount:'$80,000',
      status:'Paid',
      invoice:'View',
    },
    {
      img:jaydon,
      name:'Jaydon Vaccaro',
      date:'Nov 15, 2023',
      amount:'$150,000',
      status:'Refund',
      invoice:'View',
    },
    {
      img:corey,
      name:'Corey Schleifer',
      date:'Nov 13, 2023',
      amount:'$78,000',
      status:'Paid',
      invoice:'View',
    },
    {
      img:cooper,
      name:'Cooper Press',
      date:'Nov 14, 2023',
      amount:'$100,000',
      status:'Refund',
      invoice:'View',
    },
    {
      img:philip,
      name:'Phillip Lubin',
      date:'Nov 17, 2023',
      amount:'$58,000',
      status:'Paid',
      invoice:'View',
    },
  ];

  const [orders, setOrders] = useState(lastOrders);

  return (
    <div className='flex gap-[1rem]'>
      <div className='bg-[#ffffff] dark:bg-[#1e293b] rounded-[1rem] w-[700px] pl-[20px] pr-[20px]'>
        <div className='flex justify-between text-[18px]'>
          <p className='font-[600]'>Last Orders</p>
          <p className='text-[#34caa5]'>See All</p>
        </div>
      <div className='flex gap-[2rem] align-middle justify-between items-center border-b border-gray-300 h-[60px] text-[#9ca4ab] font-[600] text-[18px]'>
          <p>Name</p>
          <p className='pl-[70px]'>Date</p>
          <p>Amount</p>
          <p>Status</p>
          <p>Invoice</p>
        </div>
        {orders &&
         orders.map((order, index) =>(
          <div key={index} className='flex gap-[2rem] align-middle justify-between items-center border-b border-gray-300 h-[60px] text-[18px]'>
            <div className='flex gap-[0.3rem]'>
             <img src={order.img} alt='avatar'/>
             <p>{order.name}</p>
             </div>
             <p className='text-[#73737c]'>{order.date}</p>
             <p>{order.amount}</p>
             <p style={{ color: order.status === 'Paid' ? '#34caa5' : '#ed544e' }}>{order.status}</p>
             <div className='flex gap-[0.3rem]'>
             <img src={view} alt='view'/> <p className='text-[14px]'>{order.invoice}</p>
             </div>
          </div>
         ))
        }
      </div>
      <div className='bg-[#ffffff] dark:bg-[#1e293b] rounded-[1rem] w-[400px] pl-[20px] pr-[20px] text-[18px]'>
         <div className='flex justify-between text-[18px]'>
          <p className='font-[600]'>Top Platform</p>
          <p className='text-[#34caa5]'>See All</p>
         </div>
         <p className='pb-[20px]'>Book Bazaar</p>
         <div className='bg-purple-500/20 h-4 rounded-full'>
          <div className='bg-[#6160dc] w-[60%] h-full'></div>
         </div>
         <div className='flex justify-between pb-[10px]'>
          <p>$2,500,000</p>
          <p>15%</p>
         </div>
         <p className='pb-[20px]'>Artisan Aisle</p>
         <div className='bg-purple-500/20 h-4 rounded-full'>
          <div className='bg-[#54c5eb] w-[50%] h-full'></div>
         </div>
         <div className='flex justify-between pb-[10px]'>
          <p>$1,800,000</p>
          <p>10%</p>
         </div>
         <p className='pb-[20px]'>Troy Troop</p>
         <div className='bg-purple-500/20 h-4 rounded-full'>
          <div className='bg-[#ffb74a] w-[40%] h-full'></div>
         </div>
         <div className='flex justify-between pb-[10px]'>
          <p>$1,200,000</p>
          <p>8%</p>
         </div>
         <p className='pb-[20px]'>Xstore</p>
         <div className='bg-purple-500/20 h-4 rounded-full'>
          <div className='bg-[#ff4a55] w-[40%] h-full'></div>
         </div>
         <div className='flex justify-between pb-[10px]'>
          <p>$1,200,000</p>
          <p>8%</p>
         </div>
      </div>
    </div>
  )
}

export default Orders