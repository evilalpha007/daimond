import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
import MatchCardSlider from "../../components/publicComponents/MatchCardSlider";
import MatchTableSlider from "./../../components/publicComponents/MatchTableSlider";

export default function SportBookCarousel() {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        300: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper  book_carousel w-full"
    >
      {[...new Array(5)].map((ele, i) => {
        return (
          <SwiperSlide key={i}>
            <div className="sport_book">
              <div className="sportbook_inner"></div>
            </div>
            <div className="sportbook_text">
              <div className="subcard_inner_text">
                <h3 className="font-semibold text-white text-xl">
                  Sport Betting
                </h3>
                <button className="subCard_btn">Bet Now</button>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
