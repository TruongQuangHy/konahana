import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import silder from "../../assets/img/silderS.png";
const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <>
      <div className="container relative mx-auto sm:max-w-3xl md:max-w-5xl lg:max-w-4xl xl:max-w-6xl">
        <div className="grid">
          <div className="grid item-center my-8 justify-items-center">
            <h1 className="font-PT text-3xl font-bold text-dark relative my-4 w-1/3 ml-6 ">
              OUR SERVICES
              <div className="absolute w-8 h-[3px] bg-primary top-1/2 -left-9 -rotate-[65deg]"></div>
              <div className="absolute w-8 h-[3px] bg-primary top-1/2 right-10 -rotate-[65deg]"></div>
            </h1>
            <p className="font-Noto text-textColor text-center my-4 text-sm lg:text-base w-3/4">
              Lorem ipsum dolor sit amet consectetur. Leo ac morbi sed nisl
              pretium facilsis ligula quis. Semper vitae diam faucibus donec
              orci est. Placerat augue sed facilisi pretium convallis id vel.
            </p>
          </div>
          <div className="relative">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0, // No rotation for slides
                stretch: 0,
                depth: 300,
                modifier: 1,
                slideShadows: false, // No shadows for slides
              }}
              navigation={true}
              onSlideChange={handleSlideChange}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="mySwiper"
            >
              {[...Array(3)].map((_, index) => (
                <SwiperSlide
                  key={index}
                  className="w-[305px] h-[350px] transform transition-transform duration-300 hover:z-10 relative"
                >
                  <img
                    className="w-full h-full object-cover"
                    src={silder}
                    alt=""
                  />
                  <div
                    className={`absolute w-full h-full grid content-center justify-items-center items-center bg-black/30 top-0 left-0 transition-opacity duration-300  ${
                      activeIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <h1 className="font-PT text-xl font-bold text-white">
                      Square Buttom Bags
                    </h1>
                    <p className="text-center font-Noto text-xs text-white/50 my-4 mx-6">
                      Lorem ipsum dolor sit amet consectetur Purus eu integer
                      sit parasent
                    </p>
                    <button
                      className={`font-Noto border-solid border-[1px] mt-4 border-white bg-transparent flex items-center justify-between py-1 px-4 text-white `}
                    >
                      See more
                      <svg
                        className="ml-4"
                        width="30"
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
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-button-next absolute right-0 top-1/2 cursor-pointer"></div>
            <div className="swiper-button-prev absolute left-0 top-1/2 cursor-pointer"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
