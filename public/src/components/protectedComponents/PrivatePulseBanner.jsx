import React from "react";
import { Link } from "react-router-dom";


export default function PrivatePulseBanner() {
  return (
    <div className="flex pulsebanner m-2 gap-1">
      <div className="bg-blue-900 p-1 rounded-md px-2">
        <Link className=" text-white  font-bold  animate-pulse flex">
          <span className="material-symbols-rounded mr-1 text-sm">
            sports_cricket
          </span>
          <p>India Women V Ireland Women</p>
        </Link>
      </div>
      <div className="bg-blue-900 p-1 ml-5 rounded-md px-2">
        <Link className=" text-white font-bold  animate-pulse flex">
          <span className="material-symbols-rounded mr-1 text-sm">
            sports_cricket
          </span>
          <p>India Women V Ireland Women</p>
        </Link>
      </div>
    </div>
  );
}
