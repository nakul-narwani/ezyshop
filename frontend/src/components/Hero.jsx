import React from "react";
import { assets } from "../assets/assets";
import heroVideo from "../assets/banner_video.mp4";
const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border ">
      <div className="relative w-full sn:w-1/2 flex items-center justify-center py-10 sm:p-14 ">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={heroVideo} // Use the correct path to your video
          alt="Background Video"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Content */}
        <div className="relative text-[#414141] z-10 bg-[hsla(0,0%,100%,0.9)] p-2">
          <div className="flex items-center gap-2">
            <p className="w-2 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>
          <h1 className="text-3xl sm:px-3 lg:text-5xl leading-relaxed prata-regular">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      {/* HERO RiGHT SIDE */}
    </div>
  );
};

export default Hero;
