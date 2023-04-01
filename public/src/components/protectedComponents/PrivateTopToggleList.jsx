import React from "react";

export default function PrivateTopToggleList({ options, setoptions }) {
  const toggleOptions = (item) => {
    setoptions((prev) => {
      return prev.map((prevItem) => {
        if (item.title === prevItem.title) {
          prevItem.active = !prevItem.active;
          return prevItem;
        }
        prevItem.active = false;
        return prevItem;
      });
    });
  };
  return (
    <ul className="flex  mx-[5px]  items-center  margin_top_side overflow-scroll scrollbar-hidden ">
      {options.map((item, i) => {
        return (
          <li
            key={i}
            onClick={() => !item.active && toggleOptions(item)}
            className={`font-semibold bg-[#0289cd] inline-block whitespace-nowrap mt-[5px]  text-white items-center  p-2 px-4 border-r-[1px] border-[#0f2462] cursor-pointer ${
              item.active && " bg-[#0f2564]  text-white"
            }`}
          >
            {item.title}
          </li>
        );
      })}
    </ul>
  );
}
