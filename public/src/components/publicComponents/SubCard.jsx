import React from "react";
import { Link } from "react-router-dom";

export default function SubCard() {
  const data = [
    {
      title: "Sport Betting",
      img: "./assets/image/banner/sport_nav.jpeg",
      to: "/sports-book",
    },
    {
      title: "Slot Games",
      img: "./assets/image/banner/Slot-nav.jpeg",
      to: "",
    },
    {
      title: "Live Casino",
      img: "./assets/image/banner/livecasini.jpg",
      to: "/casino/live-casino",
    },
    {
      title: "Jackpots",
      img: "./assets/image/banner/category_jackpot.jpg",
      to: "/jackpot",
    },
  ];
  return (
    <div className="flex mt-7 md:flex-wrap overflow-x-scroll lg:justify-between   md:m-4 md:p-4 m-4 md:justify-around w-[calc(100vw_-_2rem)] scrollbar-hidden max-w-[1350px]">
      {data.map((ele, i) => {
        return (
          <div
            key={i}
            className="rounded-xl mr-4 overflow-hidden  relative hover:scale-[1.009] transition-all  min-w-[160px] h-[220px] md:h-[130px] md:w-[310px] bg-blue-500 sub_card"
          >
            <div className="absolute left-4 top-4">
              <p className=" font-semibold text-base text-white mb-2">
                {ele.title}
              </p>
              <Link to={ele.to}>
                <button className="bg-[#1d222f] text-white text-xs font-bold rounded-full px-4 py-2 min-w-[108px] mainCard-hover:bg-blue-400 btn">
                  Bet Now
                </button>
              </Link>
            </div>
            <img src={ele.img} alt="" className="object-cover h-full w-full" />
          </div>
        );
      })}
    </div>
  );
}
