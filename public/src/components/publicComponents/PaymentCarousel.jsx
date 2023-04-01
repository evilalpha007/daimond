import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function PaymentCarousel() {
  return (
    <div className="mx-5 my-8">
      <div className="flex justify-between text-white my-4">
        <h2 className="font-bold text-2xl">Popular Payment methods</h2>
      </div>
      <Swiper slidesPerView={"auto"} spaceBetween={10} className="mySwiper">
        {[...new Array(6)].map((ele, i) => {
          return (
            <SwiperSlide
              key={i}
              className="max-w-[300px] cursor-pointer w-full rounded-2xl overflow-hidden "
            >
              <div className="pt-[1px] pl-[.5px] pr-[.5px] payment_carousel_card w-full">
                <img
                  src={`./assets/image/background/payment_img_${i + 1}.png`}
                  alt="icon"
                  className="payment_carousel_card_img"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
