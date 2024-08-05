import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import img from "../../assets/img/silderBlog.png";
const Blog = () => {
  return (
    <>
      <div className="container relative mx-auto sm:max-w-3xl md:max-w-5xl lg:max-w-4xl xl:max-w-6xl">
        <div className="grid">
          <div className="grid item-center my-8 w-3/4">
            <h1 className="font-PT text-3xl font-bold text-dark relative my-4 w-1/3 ml-6 ">
              COMPANY BLOGS
              <div className="absolute w-8 h-[3px] bg-primary top-1/2 -left-9 -rotate-[65deg]"></div>
              <div className="absolute w-8 h-[3px] bg-primary top-1/2 -right-7 -rotate-[65deg]"></div>
            </h1>
            <p className="font-Noto text-textColor  my-4 text-sm lg:text-base w-3/4">
              Lorem ipsum dolor sit amet consectetur. Leo ac morbi sed nisl
              pretium facilsis ligula quis. Semper vitae diam faucibus donec
              orci est. Placerat augue sed facilisi pretium convallis id vel.
            </p>
          </div>
          <div>
            <Swiper
              watchSlidesProgress={true}
              slidesPerView={3}
              className="mySwiper"
              // modules={[Pagination, Navigation]}
            >
              <SwiperSlide className="px-4">
                <div className="relative flex justify-center group">
                  <img
                    src={img}
                    alt=""
                    className="group-hover:bg w-full h-full"
                  />
                  <div className="absolute h-3 bg-primarySec w-[90%] -bottom-[6%] group-hover:hidden transition duration-300 ease-in-out"></div>
                  <div className="absolute top-0 left-0 w-full h-full bg-white/60 flex items-center justify-center group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <button className="font-Noto bg-primary flex items-center justify-between py-1 px-4 text-white">
                      See more
                      <svg
                        className="ml-4"
                        width="40"
                        height="10"
                        viewBox="0 0 56 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M56 5L48.5167 0.679511L48.5167 9.3205L56 5ZM-6.54212e-08 5.74833L49.265 5.74834L49.265 4.25167L6.54212e-08 4.25167L-6.54212e-08 5.74833Z"
                          fill="#ffff"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <p className="text-center text-lg font-Noto my-12 text-textColor">
                  Stora Enso completes the divest of its Hylte paper site
                </p>
              </SwiperSlide>
              <SwiperSlide className="px-4">
                <div className="relative flex justify-center group">
                  <img
                    src={img}
                    alt=""
                    className="group-hover:bg w-full h-full"
                  />
                  <div className="absolute h-3 bg-primarySec w-[90%] -bottom-[6%] group-hover:hidden transition duration-300 ease-in-out"></div>
                  <div className="absolute top-0 left-0 w-full h-full bg-white/60 flex items-center justify-center group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <button className="font-Noto bg-primary flex items-center justify-between py-1 px-4 text-white">
                      See more
                      <svg
                        className="ml-4"
                        width="40"
                        height="10"
                        viewBox="0 0 56 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M56 5L48.5167 0.679511L48.5167 9.3205L56 5ZM-6.54212e-08 5.74833L49.265 5.74834L49.265 4.25167L6.54212e-08 4.25167L-6.54212e-08 5.74833Z"
                          fill="#ffff"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <p className="text-center text-lg font-Noto my-12 text-textColor">
                  Stora Enso completes the divest of its Hylte paper site
                </p>
              </SwiperSlide>
              <SwiperSlide className="px-4">
                <div className="relative flex justify-center group">
                  <img
                    src={img}
                    alt=""
                    className="group-hover:bg w-full h-full"
                  />
                  <div className="absolute h-3 bg-primarySec w-[90%] -bottom-[6%] group-hover:hidden transition duration-300 ease-in-out"></div>
                  <div className="absolute top-0 left-0 w-full h-full bg-white/60 flex items-center justify-center group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <button className="font-Noto bg-primary flex items-center justify-between py-1 px-4 text-white">
                      See more
                      <svg
                        className="ml-4"
                        width="40"
                        height="10"
                        viewBox="0 0 56 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M56 5L48.5167 0.679511L48.5167 9.3205L56 5ZM-6.54212e-08 5.74833L49.265 5.74834L49.265 4.25167L6.54212e-08 4.25167L-6.54212e-08 5.74833Z"
                          fill="#ffff"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <p className="text-center text-lg font-Noto my-12 text-textColor">
                  Stora Enso completes the divest of its Hylte paper site
                </p>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
