import React, { useRef, useState } from "react";

export default function MatchTableSlider() {
  return (
    <div className='text-white p-5 '>
      <div className='flex justify-between p-4 pb-2'>
        <div className='text-lg font-bold'>In-Play</div>
        <div className='text-[#ffffffa6]'>See all</div>
      </div>
      <DropDownMenuCard />
      <DropDownMenuCard />
      <DropDownMenuCard />
      <DropDownMenuCard />
      <DropDownMenuCard />
    </div>
  );
}

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

const DropDownMenuCard = () => {
  const [toggle, setToggle] = useState(true);
  const contentWrapper = useRef(null);
  const contentWrapperMobile = useRef(null);

  return (
    <div className="my-4 text-opacity-75 text-white rounded-md overflow-hidden  md:flex bg-[#282f41]">
      <div className="md:min-w-[250px] mr-2">
        <div className="flex items-center p-2 bg-[#282f41]">
          <span
            className={`material-symbols-rounded text-opacity-75 text-white mr-6 md:hidden`}
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? "expand_more" : "chevron_right"}
          </span>
          <span className="material-symbols-rounded text-sm">public</span>
          <p className="text-xs ml-3">Title of the content</p>
        </div>
        {toggle &&
          [...new Array(1)].map((item, i) => {
            return (
              <div
                key={i}
                className="mt-[1.5px] bg-[#282f41] p-3 md:flex items-center md:-mt-4  "
              >
                <div className=" flex justify-between md:w-1/3 md:min-w-[250px]">
                  <div className="w-full flex">
                    <div className="text-opacity-75 text-xs m-4 hidden md:block">
                      {37}
                      <span className="animate-pulse ">'</span>
                    </div>
                    <div className="w-full">
                      <div className="flex items-center justify-between mb-1 w-full">
                        <div className="flex items-center">
                          <img
                            src="https://static.sptpub.com/additional_images/medium/2100281866723667968.png"
                            alt="flag"
                            className="w-5 h-5 mr-2"
                          />
                          <p className="font-bold text-sm text-white">
                            Argentina
                          </p>
                        </div>
                        <div className="text-opacity-75 text-xs m-4 my-0 md:hidden">
                          {37}{" "}
                          <span className="animate-pulse ml-[-3px]">'</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                          <img
                            src="https://static.sptpub.com/additional_images/medium/2100281866723667968.png"
                            alt="flag"
                            className="w-5 h-5 mr-2"
                          />
                          <p className="font-bold text-sm text-white">
                            Argentina
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pl-4 border-l-[1px] border-white border-opacity-10 md:mr-4 md:border-none">
                    <div className="text-sm text-[#ffd60e] font-bold mb-1">
                      {0}
                    </div>
                    <div className="text-sm text-[#ffd60e] font-bold">{0}</div>
                  </div>
                </div>
                <div className="flex parent relative px-2">
                  <button
                    onClick={() => {
                      sideScroll(contentWrapperMobile?.current, 5, 200, -5);
                    }}
                    className={`material-symbols-rounded ml-0 child absolute hidden backdrop:blur-3xl bg-[#282f418d] h-12 bottom-0`}
                  >
                    arrow_circle_left
                  </button>
                  <div
                    className="mt-4 flex overflow-scroll  gap-4 scrollbar-hidden"
                    ref={contentWrapperMobile}
                  >
                    {[...new Array(5)].map((item, i) => {
                      return (
                        <div key={i} className="md:hidden ">
                          <p className="text-white text-xs text-opacity-40 mb-1 md:text-center">
                            1X2
                          </p>
                          <div className="gap-[1px] hidden md:flex">
                            <button
                              className={`rounded-tl-lg rounded-bl-lg flex w-28 bg-[#3a445c] justify-between h-11 items-center p-3 `}
                            >
                              <p className="text-opacity-60 text-white text-sm">
                                1
                              </p>
                              <p className="text-white font-bold text-sm">
                                3.33
                              </p>
                            </button>
                            <button
                              className={` flex w-28 bg-[#3a445c] justify-between h-11 items-center p-3 `}
                            >
                              <p className="text-opacity-60 text-white text-sm">
                                1
                              </p>
                              <p className="text-white font-bold text-sm">
                                3.33
                              </p>
                            </button>
                            <button
                              className={`flex w-28 bg-[#3a445c] justify-between h-11 items-center p-3 rounded-tr-lg rounded-br-lg`}
                            >
                              <p className="text-opacity-60 text-white text-sm">
                                1
                              </p>
                              <p className="text-white font-bold text-sm">
                                3.33
                              </p>
                            </button>
                          </div>
                          <div className="gap-1 flex md:hidden">
                            <button
                              className={`rounded-lg flex w-28 bg-[#3a445c] justify-between h-11 items-center p-3 `}
                            >
                              <p className="text-opacity-60 text-white text-sm">
                                1
                              </p>
                              <p className="text-white font-bold text-sm">
                                3.33
                              </p>
                            </button>
                            <button
                              className={`rounded-lg flex w-28 bg-[#3a445c] justify-between h-11 items-center p-3 `}
                            >
                              <p className="text-opacity-60 text-white text-sm">
                                1
                              </p>
                              <p className="text-white font-bold text-sm">
                                3.33
                              </p>
                            </button>
                            <button
                              className={`rounded-lg flex w-28 bg-[#3a445c] justify-between h-11 items-center p-3 `}
                            >
                              <p className="text-opacity-60 text-white text-sm">
                                1
                              </p>
                              <p className="text-white font-bold text-sm">
                                3.33
                              </p>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <button
                    onClick={() => {
                      sideScroll(contentWrapperMobile?.current, 5, 200, 5);
                    }}
                    className={`material-symbols-rounded mr-0 child right-0 absolute hidden backdrop:blur-3xl bg-[#282f418d] h-12 bottom-0`}
                  >
                    arrow_circle_right
                  </button>
                </div>
              </div>
            );
          })}
      </div>

      {/* for desktop  */}

      <div className="flex overflow-x-scroll overflow-y-hidden  parent relative px-2">
        <button
          onClick={() => {
            sideScroll(contentWrapper?.current, 5, 250, -5);
          }}
          className={`material-symbols-rounded m-2 ml-0 child absolute hidden backdrop:blur-3xl bg-[#282f418d] h-full`}
        >
          arrow_circle_left
        </button>
        <div
          className="flex overflow-scroll gap-4 scrollbar-hidden"
          ref={contentWrapper}
        >
          {[...new Array(5)].map((item, i) => {
            return (
              <div key={i} className="hidden md:block mt-2">
                <p className="text-white text-xs text-opacity-40 mb-2 md:text-center">
                  1X2
                </p>
                <div className="gap-[1px] hidden md:flex">
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
          className={`material-symbols-rounded m-2 mr-0 child right-0 absolute hidden backdrop:blur-3xl bg-[#282f418d] h-full`}
        >
          arrow_circle_right
        </button>
      </div>
    </div>
  );
};
