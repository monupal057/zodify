 //import React from 'react'
 import banner from '../../assets/banner.jpg';
 const HeroSection = () => {
   return (
     <>
     <div className="relative">
      <div>
        <img
         src={banner}
          alt=""
          className="w-full object-cover object-center"/>
      </div>
      <div className=" absolute top-[30%] w-full text-end right-5">
        <h1 className="text-1xl sm:txt-2xl md:text-3xl lg:text-4xl xl:text:5xl font-bold text-red-500 ">
         Discover New Adventure!
        </h1>
        <p className="text-[10px] lg:text-4xl mt-2 lg:mt-5 font-semibold">
        Discover Fresh Fashion & Flaunt Your Look
        </p>
      </div>
     </div>
     </>
   )
 }
 
 export default HeroSection;
 
