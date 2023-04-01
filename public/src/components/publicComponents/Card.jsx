import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Navigation } from "swiper";

export default function Card() {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  const slidesData = [
    {
      title: "Hello There",
      image: `./assets/image/game/ak (1).jpg`,
    },
    {
      title: "Hello There",
      image: `./assets/image/game/ak (23).jpg`,
    },
    {
      title: "Hello There",
      image: `./assets/image/game/ak (22).jpg`,
    },
    {
      title: "Hello There",
      image: `./assets/image/game/ak (16).jpg`,
    },
    {
      title: "Hello There",
      image: `./assets/image/game/ak (17).jpg`,
    },
    {
      title: "Hello There",
      image: `./assets/image/game/ak (18).jpg`,
    },
    {
      title: "Hello There",
      image: `./assets/image/game/ak (19).jpg`,
    },
    {
      title: "Hello There",
      image: `./assets/image/game/ak (20).jpg`,
    },
    {
      title: "Hello There",
      image: `./assets/image/game/ak (21).jpg`,
    },
    {
      title: "Hello There",
      image: `./assets/image/game/ak (7).jpg`,
    },
    {
      title: "Hello There",
      image: `./assets/image/game/ak (8).jpg`,
    },
    {
      title: "Hello There",
      image: `./assets/image/game/ak (9).jpg`,
    },
    {
      title: "Hello There",
      image: `./assets/image/game/ak (10).jpg`,
    },
    {
      title: "Hello There",
      image: `./assets/image/game/ak (11).jpg`,
    },
    {
      title: "Hello There",
      image: `./assets/image/game/ak (12).jpg`,
    },
    {
      title: "Hello There",
      image: `./assets/image/game/ak (13).jpg`,
    },
    {
      title: "Hello There",
      image: `./assets/image/game/ak (14).jpg`,
    },
    {
      title: "Hello There",
      image: `./assets/image/game/ak (15).jpg`,
    },
  ];

  return (
    <div className="mx-5 my-8">
      <div className="flex justify-between text-white my-4">
        <h2 className="font-bold text-2xl">Top Games</h2>
        <div className=" flex items-center">
          <span className="mr-5 font-medium text-lg text-amber-300 cursor-pointer">
            Show All
          </span>
          <div className="gap-2  sm:flex">
            <span
              className="material-symbols-rounded border border-[#5f687c] rounded-full navigate-left cursor-pointer"
              ref={navigationPrevRef}
            >
              chevron_left
            </span>
            <span
              ref={navigationNextRef}
              className="material-symbols-rounded border border-[#5f687c]
              rounded-full navigate-right cursor-pointer"
            >
              chevron_right
            </span>
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        modules={[Navigation]}
        className="mySwiper card_Games"
        navigation={{
          // Both prevEl & nextEl are null at render so this does not work
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onSwiper={(swiper) => {
          // Delay execution for the refs to be defined
          setTimeout(() => {
            // Override prevEl & nextEl now that refs are defined
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;

            // Re-init navigation
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
      >
        {slidesData.map((ele, i) => {
          return (
            <SwiperSlide key={i} className="w-auto">
              <div className="w-[220px] h-[165px] rounded-2xl overflow-hidden relative transition-all games_card">
                <img
                  src={ele.image}
                  alt=""
                  className="object-cover w-full h-full transition-transform games_card_image"
                />
                <div className="absolute z-50 w-[220px] h-[165px] transition-all  opacity-0 bg-[#00000085] hover:opacity-100  top-0 left-0 flex justify-center items-center flex-col">
                  <div className="w-[65px] h-[65px] games_hover_btn rounded-full flex items-center justify-center">
                    <svg width="21" height="25" viewBox="0 0 21 25" fill="none">
                      <path
                        d="M2.11914 3.92574C2.11914 2.13644 4.09796 1.05519 5.60376 2.02169L18.5665 10.3418C19.9537 11.2321 19.9537 13.2595 18.5665 14.1499L5.60376 22.4699C4.09796 23.4364 2.11914 22.3552 2.11914 20.5659V3.92574Z"
                        stroke="#232939"
                        strokeWidth="2.47745"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <p className="my-2 text-xs font-semibold text-white">
                    Hello There
                  </p>
                  <button className="game_card_hover_btn">Play For Fun</button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
