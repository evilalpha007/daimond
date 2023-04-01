import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handelBetTilt } from "../../store/features/eventSlice";

const PrivateBetSlip = () => {
  const { color, activeMatchEvent, oddValue } = useSelector(
    (state) => state.event
  );
  const dispatch = useDispatch();
  const [handelOddValue, setHandelOddValue] = useState("");
  const [handelStake, setHandelStake] = useState(0);

  const [slideDiv, setSlideDiv] = useState(false);

  const handleClick = () => {
    setSlideDiv(!slideDiv);
  };

  useEffect(() => {
    setHandelOddValue(oddValue);
  }, [oddValue]);

  return (
    <div className=" w-[30%] hide_part_betslip rounded-md overflow-hidden my-1 mr-1 flex flex-col gap-2 select-none">
      <div
        className={`bg-blue-900 text-white flex items-center justify-between px-6 py-1 text-base font-medium1 content ${
          slideDiv ? "slideDiv" : ""
        }`}
        onClick={handleClick}
      >
        <div>Live Match</div>
        <div>Live Stream started</div>
      </div>
      <div className="border rounded-md border-[#dee2e6]">
        <div className="bg-blue-900 text-white flex items-center justify-between px-6 py-1 text-base font-medium rounded-tl-md rounded-tr-md">
          <div>Place Bet</div>
        </div>
        {activeMatchEvent && (
          <div>
            <div className="grid grid-cols-4 p-2 text-xs bg-[#cccccc] font-semibold ">
              <div className="text-center">(Bet for)</div>
              <div className="text-center">Odds</div>
              <div className="text-center">Stake</div>
              <div className="text-center">profit</div>
            </div>
            <div
              style={{
                backgroundColor: color,
              }}
              className={`rounded-bl-md rounded-br-md`}
            >
              <div className="grid grid-cols-4 py-2">
                <div className="font-extrabold text-center">
                  <span className="text-red-700 font-bold">X</span>{" "}
                  {activeMatchEvent?.nat}
                </div>
                <div className="font-fold text-center">
                  <input
                    type="number"
                    placeholder="odd"
                    className="w-20 md:min-h-[30px] rounded px-2"
                    name="betPoints"
                    min="0"
                    value={handelOddValue}
                    onChange={(e) => setHandelOddValue(e.target.value)}
                  />
                </div>
                <div className="font-fold text-center">
                  <input
                    type="number"
                    placeholder="Stake"
                    className="w-20 md:min-h-[30px] rounded px-2 "
                    name="betPoints"
                    min="0"
                    value={handelStake}
                    onChange={(e) => setHandelStake(e.target.value)}
                  />
                </div>
                <div className="text-center">0</div>
              </div>
              <div className=" grid grid-cols-4 gap-1 cursor-pointer p-1 items-center text-center grid-rows-3">
                <div
                  className="bg-gray-300 rounded"
                  onClick={() => setHandelStake(parseInt(handelStake + 100))}
                >
                  +100
                </div>
                <div
                  className="bg-gray-300 rounded"
                  onClick={() => setHandelStake(parseInt(handelStake + 200))}
                >
                  +200
                </div>
                <div
                  className="bg-gray-300 rounded"
                  onClick={() => setHandelStake(parseInt(handelStake + 500))}
                >
                  +500
                </div>
                <div
                  className="bg-gray-300 rounded"
                  onClick={() => setHandelStake(parseInt(handelStake + 1000))}
                >
                  +1000
                </div>
                <div
                  className="bg-gray-300 rounded"
                  onClick={() => setHandelStake(parseInt(handelStake + 10000))}
                >
                  +10000
                </div>
                <div
                  className="bg-gray-300 rounded"
                  onClick={() => setHandelStake(parseInt(handelStake + 5000))}
                >
                  +5000
                </div>
                <div
                  className="bg-gray-300 rounded"
                  onClick={() => setHandelStake(parseInt(handelStake + 25000))}
                >
                  +25000
                </div>
                <div
                  className="bg-gray-300 rounded"
                  onClick={() => setHandelStake(parseInt(handelStake + 100000))}
                >
                  +100000
                </div>
                <div className="bg-yellow-600 rounded uppercase text-[10px] py-1.5 font-semibold">
                  Min Stake
                </div>
                <div className="bg-blue-600 text-white rounded uppercase text-[10px] py-1.5 font-semibold">
                  Max Stake
                </div>
                <div className="bg-green-600 text-white rounded uppercase text-[10px] py-1.5 font-semibold">
                  All in
                </div>
                <div
                  onClick={() => setHandelStake(parseInt(0))}
                  className="bg-red-600 text-white rounded uppercase text-[10px] py-1.5 font-semibold"
                >
                  Clear
                </div>
              </div>
              <div className="flex justify-between px-4 pb-1 text-white">
                <div
                  className="bg-red-500 rounded-md p-1 px-3 text-sm cursor-pointer"
                  onClick={() => {
                    dispatch(
                      handelBetTilt({
                        activeMatchEvent: null,
                        color: null,
                        oddValue: null,
                      })
                    );
                    setHandelStake(0);
                  }}
                >
                  Reset
                </div>
                <div className="bg-green-500 rounded-md p-1 px-3 text-sm cursor-pointer">
                  Submit
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="border rounded-md border-[#dee2e6] font-semibold">
        <div className="bg-blue-900 text-white flex items-center justify-between px-6 py-1 text-base font-medium rounded-tl-md rounded-tr-md">
          <div>My Bet</div>
        </div>
        <div className="flex p-2 text-xs bg-[#cccccc]">
          <div className="flex-1">Nation</div>
          <div className="w-14 text-center">Odds</div>
          <div className="w-14 text-center">Stake</div>
        </div>
        <div className="text-center text-sm py-1">No Records Found</div>
      </div>
    </div>
  );
};

export default PrivateBetSlip;
