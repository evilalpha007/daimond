import React from "react";

const SportBookBetSlip = () => {
  return (
    <div className=' w-[350px] m-5 betslip_content'>
      <div className='rightside_betslip '>
        <div className='right_title '>
          <div className='  p-4'>
            <ul className='flex cursor-pointer justify-around'>
              <li>BET SLIP</li>
              <li>MY BETS</li>
            </ul>
          </div>
        </div>
        <div className='bid_part'>
          <span>your bet placed here </span>
        </div>
      </div>
    </div>
  );
};

export default SportBookBetSlip;
