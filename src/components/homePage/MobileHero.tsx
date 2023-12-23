import Image from "next/image";
import React from "react";

const MobileHero = () => {
  return (
    <div className='  h-56 w-full flex justify-center items-end pb-10 bg-gray-900/50 rounded-xl  '>
      <div className=' text-gray-200 flex flex-col justify-center items-center gap-5 '>
        <Image
          src={"/images/global/profile.jpg"}
          width={120}
          height={120}
          alt={"farad zare sani"}
          className='rounded-full  border'
        />
        <h1 className='text-3xl font-extrabold'>Hello,i'm Farhad </h1>
      </div>
    </div>
  );
};

export default MobileHero;
