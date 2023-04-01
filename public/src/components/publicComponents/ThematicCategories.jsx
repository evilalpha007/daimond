import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Navigation } from "swiper";

export default function ThematicCategories() {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  const slidesData = [
    {
      title: "Hello There",
      image: `./assets/image/game_tag/s (1).jpg`,
    },
    {
      title: "Hello There",
      image: `./assets/image/game_tag/s (1).png`,
    },
    {
      title: "Hello There",
      image: `./assets/image/game_tag/s (2).png`,
    },
    {
      title: "Hello There",
      image: `./assets/image/game_tag/s (3).png`,
    },
    {
      title: "Hello There",
      image: `./assets/image/game_tag/s (4).png`,
    },
    {
      title: "Hello There",
      image: `./assets/image/game_tag/s (5).png`,
    },
    {
      title: "Hello There",
      image: `./assets/image/game_tag/s (6).png`,
    },
    {
      title: "Hello There",
      image: `./assets/image/game_tag/s (7).png`,
    },
    {
      title: "Hello There",
      image: `./assets/image/game_tag/s (8).png`,
    },
    {
      title: "Hello There",
      image: `./assets/image/game_tag/s (9).png`,
    },
  ];

  return (
    <div className="mx-5 my-8">
      <div className="flex justify-between text-white my-4">
        <h2 className="font-bold text-2xl">Thematic Categories</h2>
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
              <div className="w-[220px]  h-[165px] rounded-2xl overflow-hidden relative transition-all games_card">
                <img
                  src={ele.image}
                  alt=""
                  className="object-cover w-full h-full transition-transform games_card_image"
                />
                <div className="image_title absolute z-20 bottom-[15px] w-full text-center">
                  <span className="text-white">{ele.title}</span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
