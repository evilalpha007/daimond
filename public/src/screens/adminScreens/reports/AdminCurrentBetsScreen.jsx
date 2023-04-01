import React from "react";

export default function AdminCurrentBetsScreen() {
  return (
    <div>
      <div className="Currentbet p-5">
        <h2>Current Bets</h2>
        <div className="subdetails flex items-end">
          <div className="flex flex-col">
            <label>Choose Type</label>
            <select
              name="cars"
              className="border-solid border-2 border-gray-400 p-1 rounded-sm w-[200px]"
            >
              <option value="volvo">Matches</option>
              <option value="saab">Un Matched</option>
              <opt ion value="mercedes">
                {" "}
                delete
              </opt>
            </select>
          </div>
          <div className="flex  ml-7 items-center">
            <button className="border-solid border-2 border-gray-400 bg-[blue] px-[30px] py-[5px] rounded-sm text-white">
              load
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
