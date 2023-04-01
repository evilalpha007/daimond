import React, { useState } from "react";
import PrivateTopToggleList from "./PrivateTopToggleList";

export default function PrivateMiddleOptionList() {
  const [options, setoptions] = useState([
    { title: "AU", active: true },
    { title: "GB", active: false },
    { title: "NZ", active: false },
  ]);

  return (
    <div className=" h-full">
      <PrivateTopToggleList options={options} setoptions={setoptions} />
      {[...new Array(30)].map((item, i) => {
        return (
          <div
            key={i}
            className="w-full flex-col md:flex-row flex border-b-[2.5px] mx-2 border-[#c7c8ca] p-2 bg-[#f2f2f2]"
          >
            <div className="w-[30%] flex gap-4 ">
              <span>Icon{i}</span>
              <span>Ballarat (AUS) 20th Feb</span>
            </div>
            <div className="w-[70%]  flex gap-[6px] ">
              <button className="bg-[#cccccc] rounded-md text-lg  px-3">
                07:34
              </button>
              <button className="bg-[#cccccc] rounded-md text-lg  px-3">
                07:34
              </button>
              <button className="bg-[#cccccc] rounded-md text-lg  px-3">
                07:34
              </button>
              <button className="bg-[#cccccc] rounded-md text-lg  px-3">
                07:34
              </button>
              <button className="bg-[#cccccc] rounded-md text-lg  px-3">
                07:34
              </button>
              <button className="bg-[#cccccc] rounded-md text-lg  px-3">
                07:34
              </button>
              <button className="bg-[#cccccc] rounded-md text-lg  px-3">
                07:34
              </button>
              <button className="bg-[#cccccc] rounded-md text-lg  px-3">
                07:34
              </button>
              <button className="bg-[#cccccc] rounded-md text-lg  px-3">
                07:34
              </button>
              <button className="bg-[#cccccc] rounded-md text-lg  px-3">
                07:34
              </button>
              <button className="bg-[#cccccc] rounded-md text-lg  px-3">
                07:34
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
