import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../css/header.css";
import Login from "./Login";
import SideBar from "./SideBar";

export default function Header() {
  const [showModal, setShowModal] = React.useState(true);
  const header = [
    {
      name: "Sports Book",
      to: "/sports-book",
    },
    {
      name: "In-Play",
      to: "/InPlayScreen",
    },
    {
      name: "Casino",
      to: "/casino",
    },
    {
      name: "Live Casino",
      to: "/casino/live-casino",
    },
    {
      name: "Bonuses",
      to: "/bonuses",
    },
  ];
  return (
    <div className="header justify-between bg-transparent z-10 text-white">
      <div className="flex items-center gap-2">
        <SideBar />
        <Link to="/">
          <h1 className="text-2xl text-yellow-300 font-bold">
            <img src="../assets/daimond.png" className="w-[100px]" alt="" />
          </h1>
        </Link>
        <ul className="hidden gap-8 mx-8 lg:flex">
          {header.map((ele, i) => {
            return (
              <li key={i}>
                <NavLink
                  to={ele.to}
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold relative item"
                      : "font-bold relative item"
                  }
                >
                  {ele.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex gap-2 items-center">
        <button className="flex p-2 border border-yellow-300 rounded-full mobile_btn">
          <span className="material-symbols-rounded">smartphone</span>
        </button>
        <button
          onClick={() => setShowModal(true)}
          className="p-2 cursor-pointer rounded-full px-4 border-[#3ccc87] border-[1px] font-normal hover:bg-[#3ccc87]"
        >
          Login
        </button>
        {showModal && (
          <Login showModal={showModal} setShowModal={setShowModal} />
        )}
        <button className="cursor-pointer btn-primary p-2 rounded-full px-4 text-black font-bold">
          Sign up
        </button>
      </div>
    </div>
  );
}
