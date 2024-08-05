import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper/modules";
import silder from "../../assets/img/silder-h.png";
import logo from "../../assets/img/logo2.png";

const Silder = () => {
  return (
    <div className=" w-full relative">
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper h-full w-full absolute top-0 left-0"
      >
        <SwiperSlide>
          <img src={silder} alt="silder 1" className="object-cover" />
          <div className="absolute top-12 right-0 z-20 w-1/2 grid justify-items-center">
            <img src={logo} alt="" className="w-[40%] my-4" />
            <h1 className="font-PT text-4xl font-bold text-dark my-4">
              Wrap your feelings
            </h1>
            <button className="flex items-center font-Noto text-textColor my-4 justify-between border border-dark px-6 py-1 mt">
              See more
              <svg
                className="ml-4"
                width="36"
                height="8"
                viewBox="0 0 36 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M36 4L30 0.535901L30 7.4641L36 4ZM-5.24537e-08 4.6L30.6 4.6L30.6 3.4L5.24537e-08 3.4L-5.24537e-08 4.6Z"
                  fill="#363D40"
                />
              </svg>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={silder} alt="silder 2" className="object-cover" />
          <div className="absolute top-12 right-0 z-20 w-1/2 grid justify-items-center">
            <img src={logo} alt="" className="w-[40%] my-4" />
            <h1 className="font-PT text-4xl font-bold text-dark my-4">
              Wrap your feelings
            </h1>
            <button className="flex items-center font-Noto text-textColor my-4 justify-between border border-dark px-6 py-1 mt">
              See more
              <svg
                className="ml-4"
                width="36"
                height="8"
                viewBox="0 0 36 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M36 4L30 0.535901L30 7.4641L36 4ZM-5.24537e-08 4.6L30.6 4.6L30.6 3.4L5.24537e-08 3.4L-5.24537e-08 4.6Z"
                  fill="#363D40"
                />
              </svg>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={silder} alt="silder 3" className="object-cover" />
          <div className="absolute top-12 right-0 z-20 w-1/2 grid justify-items-center">
            <img src={logo} alt="" className="w-[40%] my-4" />
            <h1 className="font-PT text-4xl font-bold text-dark my-4">
              Wrap your feelings
            </h1>
            <button className="flex items-center font-Noto text-textColor my-4 justify-between border border-dark px-6 py-1 mt">
              See more
              <svg
                className="ml-4"
                width="36"
                height="8"
                viewBox="0 0 36 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M36 4L30 0.535901L30 7.4641L36 4ZM-5.24537e-08 4.6L30.6 4.6L30.6 3.4L5.24537e-08 3.4L-5.24537e-08 4.6Z"
                  fill="#363D40"
                />
              </svg>
            </button>
          </div>
        </SwiperSlide>
        <div className="swiper-pagination absolute top-1/2 right-0  transform -translate-y-1/2 flex flex-col items-center space-y-2"></div>
      </Swiper>
    </div>
  );
};

export default Silder;
