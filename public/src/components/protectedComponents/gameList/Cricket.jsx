import React from "react";
import PrivateHeader from "../header/PrivateHeader";

const Cricket = () => {
  return (
    <>
      <PrivateHeader />
      <div className="bg-white Cricket-table">
        <div className="cricket_table_part">
          <div className="cricket_table_head flex justify-between">
            <span className="w-[60%] text-1xl font-bold">Game</span>
            <div className="head_part flex justify-between text-center">
              <span className="w-[200px] text-center font-bold">1</span>
              <span className="w-[200px] text-center font-bold">X</span>
              <span className="w-[200px] text-center font-bold">2</span>
            </div>
          </div>
          {[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
          ].map((ele, i) => {
            return (
              <div
                key={i}
                className="match_table  flex justify-between border-t-2 border-[#dee2e6]"
              >
                <div className="match_table_name w-[60%]">
                  <h2>New Zealand v England / Feb 16 2023 06:30 (IST)</h2>
                </div>
                <div className="match_points flex justify-between w-[40%]">
                  <span className="w-[103px] bg-[#00bbff]">4.65</span>
                  <span className="w-[102px] bg-[#ffbac6]">3.65</span>
                  <span className="w-[103px] bg-[#00bbff]">3.65</span>
                  <span className="w-[102px] bg-[#ffbac6]">3.65</span>
                  <span className="w-[103px] bg-[#00bbff]">3.65</span>
                  <span className="w-[102px] bg-[#ffbac6]">3.65</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cricket;
