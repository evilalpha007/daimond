import React from "react";
import { Link } from "react-router-dom";

const CatogoryIcon = () => {
  const iconList = [
    {
      name: "All Games",
      img: "https://www.bettilt109.com/static/media/all-active.277d4ae7.svg",
      to: "/casino",
    },
    {
      name: "Live Casino",
      img: "https://cdn.bttmedia.com/images/category/5fb3b2a8c806d_active.svg",
      to: "/casino/live-casino",
    },
    {
      name: "slots",
      img: "	https://cdn.bttmedia.com/images/category/5fb3b33c75555_active.svg",
      to: "/slots",
    },
    {
      name: "Roulette",
      img: "https://cdn.bttmedia.com/images/category/5fb3b38180072_active.svg",
      to: "/roulete",
    },
    {
      name: "Black Jack",
      img: "https://cdn.bttmedia.com/images/category/5fb3b38180072_active.svg",
      to: "/blackjack",
    },
    {
      name: "Jackpot",
      img: "https://cdn.bttmedia.com/images/category/5fb3b38180072_active.svg",
      to: "/jackpot",
    },
    {
      name: "Poker",
      img: "https://cdn.bttmedia.com/images/category/5fb3b38180072_active.svg",
      to: "/poker",
    },
    {
      name: "Other Games",
      img: "https://cdn.bttmedia.com/images/category/5fb3b38180072_active.svg",
      to: "/othergames",
    },
  ];
  return (
    <div className="flex mt-10 main_icon_event items-center justify-between">
      <div className="casino_items w-[80%] flex items-center justify-between">
        <div className="casino_category mx-4  text-white hide_icons  w-[200px] flex items-center justify-center">
          <span className="material-symbols-rounded">menu</span>
          <button name="" className="w-[100px] selec_items mx-3">
            Provider
          </button>
          <span className="material-symbols-rounded cursor-pointer">
            expand_more
          </span>
        </div>
        <div className="icon_element items-center flex">
          {iconList.map((ele, i) => {
            return (
              <div
                key={i}
                className="casinoItems_list flex items-center flex-col justify-center  text-center cursor-pointer"
              >
                <div className="casino_itms_icon">
                  <Link to={ele.to}>
                    <img
                      src={ele.img}
                      className="w-[50px] bg-[#474451] rounded-[50%]"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="casino_itms_name text-white mt-2">
                  {ele.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="searchbar flex items-center justify-center">
        <span className="material-symbols-rounded mx-2">search</span>
        <input
          type="text"
          placeholder="search..
  "
        ></input>
      </div>
    </div>
  );
};

export default CatogoryIcon;
