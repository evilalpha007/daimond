import React from "react";

export default function AdminGeneralReportScreen() {
  return (
    <div className="">
      <div className="p-5 ">
        <h2>General Report</h2>
        <div className="flex items-end ">
          <div className="subdetails mr-5 flex flex-col">
            <label>Account Type</label>
            <select
              name="cars"
              className="border-solid border-2 border-gray-400 p-1 rounded-sm w-[200px]"
            >
              <option value="volvo">All</option>
              <option value="saab">Balance Reports</option>
              <option value="mercedes">Games Report</option>
            </select>
          </div>
          <label htmlFor=""></label>
          <button className="border-solid border-2 border-gray-400 bg-[blue] px-[30px] py-[5px] rounded-sm text-white">
            load
          </button>
        </div>
      </div>
    </div>
  );
}
