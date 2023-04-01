import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handelBetTilt,
  handelMobileActiveBetTiltCardUpdate,
} from "../../store/features/eventSlice";
const MobCartBetSlip = () => {
  const { color, oddValue } = useSelector((state) => state.event);

  const dispatch = useDispatch();
  const [handelOddValue, setHandelOddValue] = useState("");
  const [handelStake, setHandelStake] = useState(0);

  useEffect(() => {
    setHandelOddValue(oddValue);
  }, [oddValue]);
  return (
    <div>
      <div
        className="mobCartBetSlip  h-[200px]"
        style={{
          backgroundColor: color,
        }}
      >
        <div className="new-betslip  flex justify-between p-2">
          <input
            type="number"
            placeholder="odd"
            className="w-40 text-center"
            name="betPoints"
            min="0"
            value={handelOddValue}
            onChange={(e) => setHandelOddValue(e.target.value)}
          />
          <input
            type="number"
            placeholder="Stake"
            className="w-40 text-center"
            name="betPoints"
            min="0"
            value={handelStake}
            onChange={(e) => setHandelStake(e.target.value)}
          />
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
          <div className="bg-gray-300 rounded">+100000</div>
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
            className="bg-red-600 text-white rounded uppercase text-[10px] py-1.5 font-semibold"
            onClick={() => setHandelStake(parseInt(0))}
          >
            Clear
          </div>
        </div>
        <div className="flex justify-between px-4 pb-1 mt-1 text-white">
          <div
            className="bg-red-500 rounded-md w-[150px] text-center p-1 px-3 text-sm cursor-pointer"
            onClick={() => {
              dispatch(handelBetTilt({ activeMatch: undefined }));
              dispatch(handelMobileActiveBetTiltCardUpdate());
              setHandelStake(0);
            }}
          >
            Reset
          </div>
          <div className="bg-green-500 w-[150px]  text-center rounded-md p-1 px-3 text-sm cursor-pointer">
            Submit
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobCartBetSlip;
