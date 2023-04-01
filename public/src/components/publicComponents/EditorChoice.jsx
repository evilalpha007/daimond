import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Navigation } from "swiper";

export default function EditorChoice() {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  const slidesData = [
    {
      title: "Hello There",
      image: `./assets/image/game/ak (1).jpeg`,
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
        <div>
          <h2 className="font-bold text-2xl">Editors choice</h2>
          <p className="mt-1 text-sm text-[#b9c5e1]">
            The games we think you will like
          </p>
        </div>
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
              <div className="w-[312px] cursor-pointer h-[320px] rounded-2xl overflow-hidden relative transition-all games_card">
                <img
                  src={ele.image}
                  alt=""
                  className="object-cover w-full h-full transition-transform games_card_image"
                />
                <div className="absolute z-40 w-[312px] h-[320px] transition-all pb-[72px] opacity-0 bg-[#00000085] game_card_hidden_content top-0 left-0 flex justify-center items-center flex-col">
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
                <div className="h-[72px] w-[321px] bg-[#1d222f] bottom-0 left-0 absolute z-50 flex gap-4 items-center p-4 game_card_hidden_content_bottom">
                  <div className="bg-[#363d52] rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      viewBox="0 0 60 60"
                      fill="none"
                    >
                      <path
                        d="M40.4338 44.8496H40.2187H40.0039V44.2046H40.2187C40.4338 44.2046 40.6488 44.2046 40.6488 44.2046C40.8636 44.2046 40.8636 44.4197 40.8636 44.4197C40.8636 44.8496 40.6488 44.8496 40.4338 44.8496ZM41.294 44.4197C41.294 44.2046 41.079 43.9896 41.079 43.7748C40.8639 43.7748 40.6491 43.7748 40.434 43.7748H39.7891V45.9249H40.219V45.0646H40.6491L41.079 45.9249H41.294L40.8639 45.0646C41.079 45.0646 41.294 44.8496 41.294 44.4197ZM40.4338 46.5698C39.5735 46.5698 38.7138 45.7096 38.7138 44.8498C38.7138 43.9896 39.5738 43.1298 40.4338 43.1298C41.2938 43.1298 42.1538 43.9898 42.1538 44.8498C42.1538 45.9246 41.5088 46.5698 40.4338 46.5698ZM40.4338 42.6997C39.1439 42.6997 38.2836 43.7748 38.2836 44.8498C38.2836 46.1399 39.3587 46.9999 40.4338 46.9999C41.7239 46.9999 42.5842 45.9249 42.5842 44.8498C42.5842 43.7748 41.7239 42.6997 40.4338 42.6997Z"
                        fill="#A3A3A3"
                      />
                      <path
                        d="M17.4259 14.1042C27.7464 8.51407 41.2921 14.5343 42.3672 28.7249C23.0161 30.2301 20.6511 21.4146 17.4259 14.1042Z"
                        fill="url(#paint0_linear)"
                      />
                      <path
                        d="M17.4261 44.6366C27.9617 50.227 41.5071 44.4218 42.3673 30.0159C23.0162 28.511 20.6513 37.3265 17.4261 44.6366Z"
                        fill="url(#paint1_linear)"
                      />
                      <path
                        d="M38.7124 18.619C33.7672 11.9536 24.7368 10.2336 17.2114 14.1037C20.2215 20.7691 22.3716 28.2943 36.7773 28.7244C38.0674 26.3592 38.9274 23.5642 38.9274 20.5541C38.9272 20.1239 38.7124 19.2639 38.7124 18.619ZM20.8664 37.5397C21.2966 37.5397 21.7264 37.5397 22.1566 37.5397C27.9617 37.5397 33.1222 34.5296 36.1321 30.0143C27.5319 30.4444 23.4467 33.6696 20.8664 37.5397Z"
                        fill="url(#paint2_radial)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="29.7289"
                          y1="22.955"
                          x2="27.628"
                          y2="42.562"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#D9DBDE" />
                          <stop offset="1" stopColor="#A8A8A8" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear"
                          x1="31.4298"
                          y1="23.1367"
                          x2="29.3289"
                          y2="42.7448"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#D9DBDE" />
                          <stop offset="1" stopColor="#A8A8A8" />
                        </linearGradient>
                        <radialGradient
                          id="paint2_radial"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(23.8021 25.365) scale(20.0267)"
                        >
                          <stop stopColor="#C2C2C2" />
                          <stop offset="0.2167" stopColor="#BDBDBD" />
                          <stop offset="0.4621" stopColor="#AFAFAF" />
                          <stop offset="0.7215" stopColor="#999999" />
                          <stop offset="0.989" stopColor="#797979" />
                          <stop offset="1" stopColor="#787878" />
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="mb-[2px] font-bold text-white">
                      Hindi Roulette
                    </span>
                    <span className="text-sm text-[#b9c5e1]">Evolution</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
