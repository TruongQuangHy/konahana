import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import silderb from "../../assets/img/silder-b.png";

const Banner = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="container py-8 overflow-hidden mx-auto sm:max-w-3xl md:max-w-5xl lg:max-w-4xl xl:max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-8 items-center relative">
        <div className="px-4 md:px-0">
          <div className="mt-12 text-center md:text-left">
            <h1 className="text-3xl mx-6 font-bold font-PT text-dark relative inline-block">
              ABOUT US
              <div className="absolute w-8 h-[3px] bg-primary top-1/2 -left-1/4 -rotate-[65deg]"></div>
              <div className="absolute w-8 h-[3px] bg-primary top-1/2 -right-1/4 -rotate-[65deg]"></div>
            </h1>
          </div>
          <p className="font-Noto text-textColor text-base my-6">
            Lorem ipsum dolor sit amet consectetur. Venenatis ut suspendisse est
            faucibus malesua interdum vulputate velit. Ut ut tellus imperdiet
            nunc quam id congue. Dolor urna vulputate semper nullam massa
            blandit amet. Mi nec at gravida tincidunt ultrices tortor neque
            eget.
          </p>
          <div className="my-6 border-t-2 border-b-2 border-gray-300 w-2/4 mx-auto md:mx-0">
            <p className="text-base text-textColor font-Noto my-4">
              Lorem ipsum dolor sit amet
            </p>
            <h1 className="text-4xl font-PT font-bold text-primary my-4">
              10 years
            </h1>
          </div>
          <p className="text-base text-textColor font-Noto">
            Lorem ipsum dolor sit amet consectetur. Nulla in congue vel duis
            phasellu. ut arcu egestas lebero tincidunt maecenas
          </p>
          <button className="bg-primary text-white font-Noto flex items-center py-2 px-7 mt-4">
            See more
            <svg
              className="ml-6"
              width="36"
              height="8"
              viewBox="0 0 36 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36 4L30 0.535901L30 7.4641L36 4ZM-5.24537e-08 4.6L30.6 4.6L30.6 3.4L5.24537e-08 3.4L-5.24537e-08 4.6Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <div className="relative lg:mt-32 md:mt-12 px-4 md:px-0 ">
          <div className="overflow-hidden">
            <Swiper
              onSwiper={setSwiperRef}
              slidesPerView={1}
              centeredSlides={true}
              spaceBetween={30}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper overflow-visible mx-0 w-4/5 lg:w-1/2 items-center"
            >
              <SwiperSlide className="flex items-center justify-center">
                <img
                  src={silderb}
                  alt="Slide 1"
                  className="object-cover w-full h-full"
                />
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center">
                <img
                  src={silderb}
                  alt="Slide 2"
                  className="object-cover w-full h-full"
                />
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center">
                <img
                  src={silderb}
                  alt="Slide 3"
                  className="object-cover w-full h-full"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="sswiper-button-next absolute right-0 -top-10 transform -translate-y-1/2 cursor-pointer z-50">
            <svg
              width="56"
              height="10"
              viewBox="0 0 56 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M56 5L48.5167 0.679511L48.5167 9.3205L56 5ZM-6.54212e-08 5.74833L49.265 5.74834L49.265 4.25167L6.54212e-08 4.25167L-6.54212e-08 5.74833Z"
                fill="#00A7EA"
              />
            </svg>
          </div>
          <div className="sswiper-button-prev absolute left-3/4 -top-10 transform -translate-y-1/2 cursor-pointer z-50">
            <svg
              width="56"
              height="10"
              viewBox="0 0 56 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 5L7.5 9.33013L7.5 0.669877L0 5ZM56 4.25L6.75 4.25L6.75 5.75L56 5.75L56 4.25Z"
                fill="#363D40"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
