import React from 'react'
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { handelLogin } from "../../store/features/auth/authSlice";
import { Transition } from "@headlessui/react";

const BetHistory = () => {
  const dispatch = useDispatch();

  const routesData = [
    { title: "HOME", to: "/" },
    { title: "CRICKET", to: "/game-list/cricket" },
    { title: "SOCCER", to: "/game-list/soccer" },
    { title: "TENNIS", to: "/game-list/tennis" },
    { title: "HORSE RACING", to: "/game-list/horse-racing" },
    { title: "GREYHOUND RACING", to: "/game-list/grey-hound-racing" },
    { title: "KABADDI", to: "/game-list/kabddi" },
    { title: "POLITICS", to: "/game-list/politics" },
    { title: "CASINO", to: "/game-list/casino" },
    { title: "INT.CASINO", to: "/game-list/int-casino" },
  ];

  function Dropdown({ title, items, ml }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    return (
      <div>
        <div className="hide_part">
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
        <div className="profit_loss">
          <div className="profit_loss_inner mt-1 mx-1 p-2 bg-[#0f2462] ">
            <h2 className="text-white text-2xl"> Bet History</h2>
          </div>
          <div className="account_calendar p-2">
            <input
              type="date"
              className="border-[#ccc] p-2 border-[1px] text-[#555] mr-3 rounded"
              value="2000-05-05"
            />
            <input
              type="date"
              className="border-[#ccc] p-2 border-[1px] text-[#555]  mr-3 rounded"
              value="2000-05-05"
            />
            <select
              name="cars"
              className="w-[200px] border-[#ccc] p-2 border-[1px] text-[#555]  mr-3 rounded"
              id="cars"
            >
              <option value="volvo">All</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <button className="px-6 text-white capitalize rounded py-1  bg-[#3773cd]">
              submit
            </button>
          </div>
          <div className="flex flex-col">
            <div className="overflow-x-auto">
              <div className="p-1.5 w-full inline-block align-middle">
                <div className="overflow-hidden border rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="py-3 pl-4">
                          <div className="flex items-center h-5">
                            <label htmlFor="checkbox" className="sr-only">
                              Checkbox
                            </label>
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                          Sr No
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                          Credit
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                        >
                          Debit
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                        >
                          Balance
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                        >
                          Sports
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                        >
                          Remark
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        {/*  <td className="py-3 pl-4">
                                    <div className="flex items-center h-5">
                                      
                                      
                                    </div>
  </td>*/}
                      </tr>
                      <tr>
                        <td className="py-3 pl-4">
                          <div className="flex items-center h-5">
                            <label htmlFor="checkbox" className="sr-only">
                              Checkbox
                            </label>
                          </div>
                        </td>
                        <span className="mt-2"> No Data To Display</span>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default BetHistory;