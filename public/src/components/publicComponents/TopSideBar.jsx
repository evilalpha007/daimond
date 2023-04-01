import React from "react";

const TopSideBar = () => {
  return (
    <div className="TopSideBar">
      <div className="topside mb-5 flex items-center justify-between text-white">
        <h2 className="p-2 text-4xl font-bold ">In-Play</h2>
        <div className="time flex items-center">
          <span className="material-symbols-rounded font-bold">schedule</span>
          <span className="ml-3 font-bold">Mon 21:06</span>
        </div>
      </div>
    </div>
  );
};

export default TopSideBar;
