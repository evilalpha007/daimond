import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
import TopSideBar from "./TopSideBar";

const sideScroll = (element, speed, distance, step) => {
  let scrollAmount = 0;
  const slideTimer = setInterval(() => {
    element.scrollLeft += step;
    scrollAmount += Math.abs(step);
    if (scrollAmount >= distance) {
      clearInterval(slideTimer);
    }
  }, speed);
};

export default function MatchCardSlider() {
  return (
    <div className="m-4">
      <TopSideBar />
      <h2 className="main_heor_heading mx-4">Top Events</h2>
      <Swiper
        slidesPerView={3}
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
          745: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          568: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper  w-full m-4 p-4"
      >
        {[...new Array(5)].map((ele, i) => {
          return (
            <SwiperSlide key={i} className="">
              <div className="market-card">
                <div className="flex items-center justify-center mb-1">
                  <img
                    className="market-card-logo"
                    src="./assets/image/match1.png"
                    alt=""
                  />
                  <div className="market-card-date-wrapper text-center flex justify-center">
                    <div className="akak">
                      <div className="text-yellow-300 font-bold  ">
                        <span>389/9</span>
                        <span>-</span>
                        <span>0</span>
                      </div>
                      <span
                        title="First innings, home team"
                        className="caption text-extra-2 text-break"
                      >
                        stumps
                      </span>
                    </div>
                  </div>
                  <img
                    className="market-card-logo"
                    src="https://start.sptpub.com/e17fda34/flags_by_code/IND.svg"
                    alt=""
                  />
                </div>
                <div className="flex items-center text-white justify-between h6">
                  <div className="market-card-teams-name-wr flex items-center">
                    <div className="market-card-teams-border flex-fill"></div>
                    <div className="text-truncate ml-1">Karnataka</div>
                  </div>
                  <div> — </div>
                  <div className="market-card-teams-name-wr flex items-center">
                    <div className="text-truncate mr-1">Saurashtra</div>
                    <div className="market-card-teams-border flex-fill"></div>
                  </div>
                </div>
                <div className="flex justify-center items-center caption text-extra-3">
                  <span className="flex-shrink-0">Cricket</span>
                  <span className="mr-0_5">:</span>
                  <span className="text-truncate">Ranji Trophy</span>
                </div>
                <ScrollButtonMenu />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

function ScrollButtonMenu() {
  const contentWrapper = useRef(null);

  return (
    <div>
      <div className="flex parent relative px-2">
        <button
          onClick={() => {
            sideScroll(contentWrapper?.current, 5, 250, -5);
          }}
          className={`material-symbols-rounded m-2 mt-4 ml-0 child absolute backdrop:blur-3xl bg-[#282f418d] h-full`}
        >
          arrow_circle_left
        </button>
        <div
          className="flex overflow-scroll overflow-y-hidden gap-4 scrollbar-hidden"
          ref={contentWrapper}
        >
          {[...new Array(5)].map((item, i) => {
            return (
              <div key={i} className=" block mt-2">
                <p className="text-white text-xs text-opacity-40 mb-2 text-center">
                  1X2
                </p>
                <div className="gap-[1px] flex">
                  <button
                    className={`rounded-tl-lg rounded-bl-lg flex w-28 bg-[#3a445c] justify-between h-11 items-center p-3 `}
                  >
                    <p className="text-opacity-60 text-white text-sm">1</p>
                    <p className="text-white font-bold text-sm">3.33</p>
                  </button>
                  <button
                    className={` flex w-28 bg-[#3a445c] justify-between h-11 items-center p-3 `}
                  >
                    <p className="text-opacity-60 text-white text-sm">1</p>
                    <p className="text-white font-bold text-sm">3.33</p>
                  </button>
                  <button
                    className={`flex w-28 bg-[#3a445c] justify-between h-11 items-center p-3 rounded-tr-lg rounded-br-lg`}
                  >
                    <p className="text-opacity-60 text-white text-sm">1</p>
                    <p className="text-white font-bold text-sm">3.33</p>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <button
          onClick={() => {
            sideScroll(contentWrapper?.current, 5, 250, 5);
          }}
          className={`material-symbols-rounded m-2 mt-4 mr-0 child right-0 absolute backdrop:blur-3xl bg-[#282f418d] h-full`}
        >
          arrow_circle_right
        </button>
      </div>
    </div>
  );
}
