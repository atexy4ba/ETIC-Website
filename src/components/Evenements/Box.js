import React from 'react';

const Box = ({color, title, description, src}) => {

  return (
    <div className="bg-[#EB9223] m-10 p-10 rounded-xl shadow-md flex">
      <div className='flex flex-col p-4 justify-between items-start w-1/2'>
        <div className='px-7 py-2 rounded-3xl text-lg font-normal font-satoshi text-white bg-[#212121]'>
        Evénements
        </div>
        <div>
          <h1 className='font-satoshi font-bold text-4xl text-[#212121] mb-2'>{title}</h1>
          <p className='font-satoshi leading-7 text-[#212121]'>{description}</p>
        </div>
        <div className='px-7 py-2 rounded-3xl text-white bg-[#212121]'>
        En savoir plus
        </div>
      </div>
      <div className=' flex-grow'>
        <img src={src} className='rounded-3xl'/>
      </div>
    </div>
  );
};

export default Box;
