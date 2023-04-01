import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default function Carousel() {
  const data = [
    {
      title: "Sport Welcome Pack",
      subTitle: "₹90,000 Casino Package",
      img: "https://cdn.bttmedia.com/images/banner/6346c72b5330d_633197e5bd37d_HI_welcome.jpeg",
    },
    {
      title: "Sport Welcome hack",
      subTitle: "₹90,000 Casino Package",
      img: "https://cdn.bttmedia.com/images/banner/63a161fc8165f_1920x550TwinklingTournamentPromotion.jpg",
    },
  ];
  return (
    <div className='relative'>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className='mySwiper h-[322px] sm:h-[440px]'>
        {data.map((ele, i) => {
          return (
            <SwiperSlide key={i} className='relative'>
              <div className='sm:top-40 top-10 left-5 absolute z-50 text-white'>
                <h1 className='text-[44px] font-extrabold mb-2'>{ele.title}</h1>
                <h5 className='text-lg font-medium mb-4'>{ele.subTitle}</h5>
              </div>
              <img
                src={ele.img}
                className='h-full object-cover w-full '
                alt=''
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
