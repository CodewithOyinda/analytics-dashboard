import React from 'react';

export default function Modal({ visible, onClose }) {
  

  const handleOnClose = (e) => {
    if (e.target.id === 'container') onClose();
  };

  if (!visible) return null;

  return (
    <div id='container' onClick={handleOnClose} className='fixed inset-0 bg-[#949596] bg-opacity-5 backdrop-blur-sm flex justify-center items-center'>
        <div className='bg-white p-2 flex flex-col justify-center align-middle items-center text-black rounded md:w-[300px] w-[250px] md:h-[300px] md:pl-[30px] md:pr-[30px] pl-[10px] pr-[10px]'>
         <div><p className='text-[#34caa5] font-[600] text-[18px]'>Invoice Details</p></div>
         <div>
            <p className='font-[600] text-[18px]'>Customer name</p>
            <p>Marcus Bergson</p>
         </div>
         <div>
            <p className='font-[600] text-[18px]'>Amount</p>
            <p>$80,000</p>
         </div>
         <div>
            <p lassName='font-[600] text-[18px]'>Order Date</p>
            <p>Nov 15, 2023</p>
         </div>
         <div>
            <p lassName='font-[600] text-[18px]'>Status</p>
            <p>Paid</p>
         </div>
         <button className='bg-[#34caa5] text-[#fafafa] w-[100px] h-[30px] rounded-[0.3rem]' id='container'>
            Exit
         </button>
         </div>
    </div>
  );
}


