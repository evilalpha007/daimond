import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

function Dropdown({ title, items, ml }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
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
              {items ? (
                items.map(({ title, to, func }) => {
                  return (
                    <Link
                      key={to}
                      to={to}
                      className="block px-4 py-2 text-sm text-left hover:bg-blue-600 capitalize"
                      role="menuitem"
                      func
                    >
                      {title}
                    </Link>
                  );
                })
              ) : (
                <Link
                  className="block px-4 py-2 text-sm  hover:bg-gray-100"
                  role="menuitem"
                >
                  No item
                </Link>
              )}
            </div>
          </div>
        </Transition>
      </button>
    </div>
  );
}

export default Dropdown;
