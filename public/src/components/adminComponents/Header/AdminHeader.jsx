import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { handelAdminLogin } from "../../../store/features/auth/authSlice";
import Dropdown from "../../Dropdown";

export default function AdminHeader() {
  const reports = [
    { title: "Account's statement", to: "/admin/reports/account-statement" },
    { title: "exposure details", to: "/admin/reports/exposure-details" },
    { title: "current bets", to: "/admin/reports/current-bets" },
    { title: "general report", to: "/admin/reports/general-report" },
    { title: "game report", to: "/admin/reports/game-report" },
    { title: "casino report", to: "/admin/reports/casino-report" },
    { title: "profit and loss", to: "/admin/reports/profit-loss" },
    {
      title: "casino report result",
      to: "/admin/reports/casino-result-report",
    },
  ];
  const liveMarket = [
    { title: "3 cards judgement", to: "/admin/live-game/3-cards-judgement" },
    { title: "andar bahar", to: "/admin/live-game/andar-bahar" },
    { title: "baccarat", to: "/admin/live-game/baccarat" },
    { title: "binary", to: "/admin/live-game/binary" },
    { title: "bollywood", to: "/admin/live-game/bollywood" },
    { title: "card 32", to: "/admin/live-game/card-32" },
    { title: "casino queen", to: "/admin/live-game/casino-queen" },
    { title: "casino war", to: "/admin/live-game/casino-war" },
    { title: "cricket casino", to: "/admin/live-game/cricket-casino" },
    { title: "dart", to: "/admin/live-game/dart" },
    { title: "dragon tiger", to: "/admin/live-game/dragon-tiger" },
    { title: "live poker", to: "/admin/live-game/live-poker" },
    { title: "lottery", to: "/admin/live-game/lottery" },
    { title: "lucky 7", to: "/admin/live-game/lucky-7" },
    { title: "race 20", to: "/admin/live-game/race-20" },
    { title: "slot game", to: "/admin/live-game/slot-game" },
    { title: "sport", to: "/admin/live-game/sport" },
    { title: "teen patti", to: "/admin/live-game/teen-patti" },
    { title: "virtual sports", to: "/admin/live-game/virtual-sports" },
    { title: "worli", to: "/admin/live-game/worli" },
  ];
  return (
    <div>
      <div className="flex  bg-blue-500 h-14 p-2 text-white items-center justify-between ">
        <div className="flex gap-2 items-center">
          <Link to="/admin">
            <img src="/assets/daimond.png" alt="" className="w-[100px] p-2" />
          </Link>
          <span className=" material-symbols-rounded text-3xl cursor-pointer">
            menu
          </span>
          <Link to={"/admin/list-of-clients"}>
            <div className="cursor-pointer font-semibold hover:bg-blue-700 p-2 px-3 rounded transition-colors">
              List of Clients
            </div>
          </Link>
          <Link to="/admin/market-analysis">
            <div className="cursor-pointer font-semibold hover:bg-blue-700 p-2 px-3 rounded transition-colors">
              Market Analysis
            </div>
          </Link>
          <Dropdown title="Live Market" items={liveMarket} />
          <Dropdown title="Reports" items={reports} />
        </div>
        <div className="flex items-center gap-3">
          <CustomDropDown title={"Demvrok"} />
          <input
            type="text"
            name=""
            id=""
            placeholder="All Clients"
            className="px-3 p-2 focus:outline-none text-black rounded-sm"
          />
        </div>
      </div>
    </div>
  );
}

function CustomDropDown({ title, ml }) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const user = [
    { title: "Security Auth Verification", to: "admin/security-auth" },
    { title: "change password", to: "admin/change-password" },
    { title: "logout", to: "admin/_" },
  ];
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative  z-50">
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
                to={"admin/security-auth"}
                className="block px-4 py-2 text-sm text-left hover:bg-blue-600 capitalize"
                role="menuitem"
              >
                Security Auth Verification
              </Link>
              <Link
                to={"admin/change-password"}
                className="block px-4 py-2 text-sm text-left hover:bg-blue-600 capitalize"
                role="menuitem"
              >
                change password
              </Link>
              <Link
                to={"/admin"}
                className="block px-4 py-2 text-sm text-left hover:bg-blue-600 capitalize"
                role="menuitem"
                onClick={() =>
                  dispatch(handelAdminLogin({ adminLogin: false }))
                }
              >
                logout
              </Link>
            </div>
          </div>
        </Transition>
      </button>
    </div>
  );
}

// addidng the record
// add select and multi select
