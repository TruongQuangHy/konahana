import React, { useRef, useState } from "react";

// Import Swiper styles
import Slider from "../Silder/Silder";
const Header = () => {
  return (
    <div className="lg:min-h-[85vh] min-h-[550px] sm:min-h-[435px] flex justify-center relative">
      <Slider />
      {/* <div className="absolute w-[60%] h-[33%] right-0 bottom-0 bg-white transform -skew-x-35 z-10"></div> */}
      <div className="absolute mr-6 right-0 bottom-0 z-20 flex grid-cols-3 w-1/2 bg-white transform">
        <div className="mx-1">
          <h1 className="text-primary font-bold mb-4 mt-4 font-PT text-sm">
            Highest quality
          </h1>
          <p className="font-bold font-Noto my-4 text-sm">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <p className="font-Noto text-xs text-textColor">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <div className="mx-1">
          <h1 className="text-primary font-bold mb-4 mt-4 font-PT text-sm">
            Highest quality
          </h1>
          <p className="font-bold font-Noto my-4 text-sm">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <p className="font-Noto text-xs text-textColor">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <div className="mx-1">
          <h1 className="text-primary font-bold mb-4 mt-4 font-PT text-sm">
            Highest quality
          </h1>
          <p className="font-bold font-Noto my-4 text-sm">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <p className="font-Noto text-xs text-textColor">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
