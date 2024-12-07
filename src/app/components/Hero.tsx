import React from "react";
import { FaChevronRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="flex justify-center w-screen">
      <div className="   w-[1170px] h-[384px]">
        <div className="flex items-end w-[230px] border-r-[0.5px] border-[#aeaeae] h-[384px]">
          <div className="flex flex-col justify-end w-[217px] h-[344px]">
            <div className="flex justify-between items-center w-full h-24">
                <div>
                Woman's Fashion
                </div>
                <div>
                <FaChevronRight size={12}/>
                </div>
            </div>
            <div className="flex justify-between items-center w-full h-24">
                <div>
                Men's Fashion
                </div>
                <div>
                <FaChevronRight size={12}/>
                </div>
                </div>
            <div className="w-full h-24">Electronics</div>
            <div className="w-full h-24">Home & Lifestyle</div>
            <div className="w-full h-24">Medicine</div>
            <div className="w-full h-24">Sports</div>
            <div className="w-full h-24">Toys</div>
            <div className="w-full h-24">Beauty</div>
            <div className="w-full h-24">Health</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
