import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../css//protectedHeader.css";
import { useDispatch } from "react-redux";
import { handelLogin } from "../../../store/features/auth/authSlice";
import { Transition } from "@headlessui/react";

export default function PrivateHeader() {
  const dispatch = useDispatch();

  const routesData = [
    { title: "HOME", to: "/" },
    { title: "CRICKET", to: "/game-list/cricket" },
    { title: "FOOTBALL", to: "/game-list/soccer" },
    { title: "TENNIS", to: "/game-list/tennis" },
    { title: "ICE HOCKEY", to: "/game-list/horse-racing" },
    { title: "BASKET BALL ", to: "/game-list/grey-hound-racing" },
    { title: "ANDHAR BHAR", to: "/game-list/kabddi" },
    { title: "LIVE POKER ", to: "/game-list/politics" },
    { title: "LUCKY 7", to: "/game-list/casino" },
    { title: "INT.CASINO", to: "/game-list/int-casino" },
  ];

  function Dropdown({ title, items, ml }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div>
        <div className="relative z-50">
          <button
            className="hover-dropdown-button hover:bg-blue-700 p-2 px-3  rounded transition-colors"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <div className=" font-semibold flex items-center ">
              <div>{title ? title : "toggleDropdown"} </div>
              <span className="material-symbols-rounded -mr-1">
                arrow_drop_down
              </span>
            </div>
            <Transition
              show={isOpen}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <div
                className={`absolute z-50 w-56 mt-2  ${
                  ml ? "-ml-32" : "-ml-3"
                } rounded-md shadow-lg bg-blue-500 text-white ring-1 ring-black ring-opacity-5 `}
              >
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <Link
                    to={"/account-statement"}
                    className="block px-4 py-2 text-sm text-left hover:bg-blue-600 capitalize"
                    role="menuitem"
                  >
                    Account Statement
                  </Link>
                  <Link
                    to={"/profit-loss"}
                    className="block px-4 py-2 text-sm text-left hover:bg-blue-600 capitalize"
                    role="menuitem"
                  >
                    Profit Loss Report
                  </Link>
                  <Link
                    to={"/bet-history"}
                    className="block px-4 py-2 text-sm text-left hover:bg-blue-600 capitalize"
                    role="menuitem"
                  >
                    Bet History
                  </Link>
                  <Link
                    to={"/"}
                    className="block px-4 py-2 text-sm text-left hover:bg-blue-600 capitalize"
                    role="menuitem"
                  >
                    Unsetteled Bet
                  </Link>
                  <Link
                    to={"/change-button-value"}
                    className="block px-4 py-2 text-sm text-left hover:bg-blue-600 capitalize"
                    role="menuitem"
                  >
                    Set Button Values
                  </Link>
                  <Link
                    to={"/change-password"}
                    className="block px-4 py-2 text-sm text-left hover:bg-blue-600 capitalize"
                    role="menuitem"
                  >
                    Change Password
                  </Link>
                  <Link
                    to={"/"}
                    className="block px-4 py-2 text-sm text-left hover:bg-blue-600 capitalize"
                    role="menuitem"
                    onClick={() =>
                      dispatch(
                        handelLogin({ login: false, hidePublicRoutes: false })
                      )
                    }
                  >
                    logout
                  </Link>
                </div>
              </div>
            </Transition>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex bg-[#0289cd] justify-between items-center  text-white">
        <h1 className="text-4xl font-bold pb-1">
          <img src="/assets/daimond.png" alt="" className="w-[150px] p-2" />
        </h1>
        <div className="w-1/2 relative">
          <div className="flex items-center justify-end gap-6">
            <span className="material-symbols-rounded  hide_part font-extrabold text-3xl">
              search
            </span>
            <div className="font-bold hidden md:block">Rules</div>
            <div className="flex flex-col">
              <div className="hide_part">
                Balance: <span>0.01</span>
              </div>
              <div className="-mt-1 hide_part">
                Exposure: <span>0</span>
              </div>
            </div>
            <Dropdown title={"Demvrok"} ml />
          </div>
          <marquee behavior="scroll" direction="left" className="absolute z-0">
            PAKISTAN SUPER LEAGUE 🏏 : ADVANCE BETS AVAILABLE IN OUR EXCHANGE.
            SPORTS EVENT :- TEN
          </marquee>
        </div>
      </div>
      <div className=" w-full mobie_sidebar bg-[#2b2828] flex gap-2 overflow-scroll scrollbar-hidden">
        {routesData.map((item, i) => {
          return (
            <Link
              key={i}
              to={item.to}
              className="text-white  inline-block whitespace-nowrap  border-b-2 border-transparent hover:border-white p-1 m-2  pb-0 sm:text-sm text-xs font-bold header-bottom"
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
