import React from "react";
import MiddleBook from "./MiddleBook";

const SportBookSidebar = () => {
  return (
    <div className='sport_main_section bg-green-400  justify-between'>
      <div className='sport_side_bar h-full py-3 px-3 w-72'>
        <div className='search_icom items-center flex pl-4'>
          <span className='material-symbols-rounded mr-2'>search</span>
          <input type='text' className='search_item' placeholder='Search' />
        </div>
        <div className='icon_item'>
          <div className='icon_nav px-4  py-2'>
            <div className='inner_list flex items-center '>
              <span className='material-symbols-rounded mr-2'>house</span>
              <div className='icon_list font-lg  py-2'>Home</div>
            </div>
            <div className='inner_list flex items-center'>
              <span className='material-symbols-rounded mr-2'>house</span>

              <div className='icon_list font-lg  py-2'>Home</div>
            </div>
            <div className='inner_list flex items-center'>
              <span className='material-symbols-rounded mr-2'>house</span>

              <div className='icon_list font-lg  py-2'>Home</div>
            </div>
            <hr />
            <div className='mt-2.5 text-sm'>TOP LEAGUES</div>
            <div className='icon_top_league'>
              <div className='flex py-2'>
                <span className='material-symbols-rounded mr-2'>home</span>
                <div className='icon_list font-lg  '>In Play</div>
                <span>8</span>
              </div>
              <div className='flex py-2'>
                <span className='material-symbols-rounded mr-2'>home</span>
                <div className='icon_list font-lg '>In Play</div>
                <span>8</span>
              </div>
              <div className='flex py-2'>
                <span className='material-symbols-rounded mr-2'>home</span>
                <div className='icon_list font-lg  '>In Play</div>
                <span>8</span>
              </div>
            </div>
            <hr className='my-2' />
            <span>All sport LEAGUES</span>
            <div className='all_sport_league'>
              {[...new Array(20)].map((crue, e) => {
                return (
                  <div className='flex items-center  py-3' key={e}>
                    <span className='material-symbols-rounded mr-2'>home</span>
                    <div className='icon_list font-lg'>In Play</div>
                    <span>8</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportBookSidebar;
