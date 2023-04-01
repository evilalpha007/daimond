import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [languageOpenToggle, setLanguageOpenToggle] = useState(false);
  const data = [
    {
      name: "Sports Book",
      to: "/sports-book",
      icon: "./assets/icons/sportsBook.svg",
    },
    {
      name: "In-Play",
      to: "/InPlayScreen",
      icon: "./assets/icons/inPlay.svg",
    },
    {
      name: "Casino",
      to: "/casino",
      icon: "./assets/icons/casino.svg",
    },
    {
      name: "Live Casino",
      to: "/casino/live-casino",
      icon: "./assets/icons/liveCasino.svg",
    },
    {
      name: "Bonuses",
      to: "/bonuses",
      icon: "./assets/icons/bonuses.svg",
    },
  ];
  const bottomData = [
    { title: "About us", to: "" },
    { title: "Terms and Conditions", to: "" },
    { title: "F.A.Q.", to: "" },
    { title: "Responsible Gaming", to: "" },
    { title: "Cookies Policy", to: "" },
  ];

  return (
    <div className="flex">
      <div onClick={() => setIsOpen(!isOpen)} className="lg:hidden flex">
        <span className="material-symbols-rounded">menu</span>
      </div>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(!isOpen)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full w-64">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="-translate-x-full"
                  enterTo="-translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div
                      className="z-40 w-64 h-screen p-4 overflow-y-auto  bg-gray-800"
                      tabIndex={-1}
                      aria-labelledby="drawer-navigation-label"
                    >
                      <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        data-drawer-hide="drawer-navigation"
                        aria-controls="drawer-navigation"
                        className="text-gray-400 bg-transparent  rounded-lg text-sm p-1.5 absolute top-2.5 left-2.5 inline-flex items-center hover:bg-gray-600 hover:text-white"
                      >
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="sr-only">Close menu</span>
                      </button>
                      <div className="py-4 overflow-y-auto mt-6">
                        <ul className="space-y-2">
                          {data.map((ele, i) => {
                            return (
                              <li key={i}>
                                <NavLink
                                  to={ele.to}
                                  className="flex items-center p-2 text-base font-normal  rounded-lg text-white  hover:bg-gray-700"
                                >
                                  <img src={ele.icon} alt="icon" />
                                  <span className="ml-3 font-semibold text-lg">
                                    {ele.name}
                                  </span>
                                </NavLink>
                              </li>
                            );
                          })}
                          <div className="py-6 gap-3 flex flex-col border-[1px] border-r-0 border-l-0 border-[#4f586f]">
                            <li>
                              <button className="cursor-pointer btn-primary p-2 w-full rounded-full px-5 text-black font-bold">
                                Sign up
                              </button>
                            </li>
                            <li>
                              <button className="p-2 cursor-pointer rounded-full w-full px-5 border-[#3ccc87] border-[1px] font-bold text-white bg-[#3ccc87]">
                                Login
                              </button>
                            </li>
                          </div>

                          {/* <div>
                            <div
                              onClick={() =>
                                setLanguageOpenToggle(!languageOpenToggle)
                              }
                              className='flex items-center justify-between py-4'>
                              <div className='flex'>
                                <img
                                  src='./assets/icons/english.svg'
                                  alt=''
                                  className='w-6 h-6 mr-3'
                                />
                                <span className='text-[#b9c5e1] font-semibold'>
                                  English
                                </span>
                              </div>
                              <span className='material-symbols-rounded text-[#b9c5e1]'>
                                {languageOpenToggle
                                  ? "keyboard_arrow_up"
                                  : "expand_more"}
                              </span>
                            </div>
                            {languageOpenToggle && (
                              <div className='flex justify-between flex-col py-4 bg-[#1d222f] rounded-lg'>
                                <div className='flex p-4'>
                                  <img
                                    src='./assets/icons/english.svg'
                                    alt=''
                                    className='w-6 h-6 mr-3'
                                  />
                                  <span className='text-[#b9c5e1] font-semibold'>
                                    English
                                  </span>
                                </div>
                                <div className='flex p-4'>
                                  <img
                                    src='./assets/icons/hindi.svg'
                                    alt=''
                                    className='w-6 h-6 mr-3'
                                  />
                                  <span className='text-[#b9c5e1] font-semibold'>
                                    हिन्दी
                                  </span>
                                </div>
                              </div>
                            )}
                            </div>*/}

                          {bottomData.map((element, index) => {
                            return (
                              <li key={index}>
                                <Link
                                  to={element.to}
                                  className="text-[#b9c5e1] text-base"
                                >
                                  {element.title}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
