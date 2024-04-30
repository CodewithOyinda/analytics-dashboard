import React, {useState} from 'react'
import marcus from './assets/marcus.png';
import jaydon from './assets/jaydon.png';
import corey from './assets/corey.png';
import cooper from './assets/cooper.png';
import philip from './assets/phillip.png';

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
    <div>
      <div className='bg-[#fafafa] rounded-[1rem] w-[700px] pl-[20px] pr-[20px]'>
        <div className='flex justify-between text-[18px]'>
          <p className='font-[600]'>Last Orders</p>
          <p className='text-[#34caa5]'>See All</p>
        </div>
      <div className='flex gap-[2rem] align-middle justify-between items-center border-b border-gray-300 h-[60px] text-[#9ca4ab] font-[600] text-[18px]'>
          <p>Name</p>
          <p>Date</p>
          <p>Amount</p>
          <p>Status</p>
          <p>Invoice</p>
        </div>
        {orders &&
         orders.map((order, index) =>(
          <div key={index} className='flex gap-[2rem] align-middle justify-between items-center border-b border-gray-300 h-[60px] text-[18px]'>
             <img src={order.img} alt='avatar'/>
             <p>{order.name}</p>
             <p>{order.date}</p>
             <p>{order.amount}</p>
             <p>{order.status}</p>
             <p>{order.invoice}</p>
          </div>
         ))
        }
      </div>
    </div>
  )
}

export default Orders