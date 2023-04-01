import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const data = [
    {
      title: "Menu",
      subTitles: [
        { title: "Sportsbook", to: "" },
        { title: "In-Play", to: "" },
        { title: "Casino", to: "" },
        { title: "Live casino", to: "" },
        { title: "Live games", to: "" },
        { title: "Bonuses", to: "" },
        { title: "Instant games", to: "" },
      ],
    },
    {
      title: "Info",
      subTitles: [
        { title: "About us", to: "" },
        { title: "Affiliates", to: "" },
        { title: "F.A.Q.", to: "" },
        { title: "Responsible Gaming", to: "" },
      ],
      hiddenContent: [
        { title: "Privacy Policy", to: "" },
        { title: "Terms and Conditions", to: "" },
        { title: "Cookies Policy", to: "" },
        { title: "Betting rules", to: "" },
      ],
    },
    {
      displayContent: "hidden lg:block",
      title: "",
      subTitles: [
        { title: "Privacy Policy", to: "" },
        { title: "Terms and Conditions", to: "" },
        { title: "Cookies Policy", to: "" },
        { title: "Betting rules", to: "" },
      ],
    },
  ];

  return (
    <div className=" text-white bg-[#1d222f] sm:p-10 p-5">
      <div className="container mx-auto max-w-[1366px]">
        <div className="flex flex-col gap-8 md:gap-0 md:grid md:grid-rows-1">
          <div className="grid md:grid-cols-2 grid-cols-2 lg:grid-cols-3 ">
            {data.map(
              ({ title, subTitles, hiddenContent, displayContent }, i) => {
                return (
                  <div
                    key={i}
                    className={`footer_menu mx-2 ${
                      i === 2 && "mt-6"
                    } ${displayContent}`}
                  >
                    <div className="text-[#b9c5e1] font-bold opacity-50 text-lg mb-2">
                      {title}
                    </div>
                    <ul className={`footer-menu__list`}>
                      {subTitles.map(({ title, to }, i) => {
                        return (
                          <li key={i} className="mb-1">
                            <Link
                              to={to}
                              className="footer_menu_link text-[#b9c5e1] text-base font-normal"
                            >
                              {title}
                            </Link>
                          </li>
                        );
                      })}
                      <div className="lg:hidden">
                        {hiddenContent &&
                          hiddenContent.map(({ title, to }, i) => {
                            return (
                              <li key={i} className="mb-1">
                                <Link
                                  to={to}
                                  className="footer_menu_link text-[#b9c5e1] text-base font-normal"
                                >
                                  {title}
                                </Link>
                              </li>
                            );
                          })}
                      </div>
                    </ul>
                  </div>
                );
              }
            )}
          </div>
          <div className="flex items-center gap-4">
            <div className="w-[60px]">
              <img
                src="./assets/image/footer/greencc.png"
                className="w-[100px] object-contain"
                alt=""
              />
            </div>
            <div className="w-full">
              <h4 className="text-lg mb-2 text-white font-bold">
                drsgames.io - online sports betting casino
              </h4>
              <div>
                <p className="text-[#b9c5e1] text-sm">
                  This website is owned and operated by Abudantia B.V.,
                  registered under the laws of Curacao under registration number
                  126608, having its registered address at: Heelsumstraat 51
                  E-Commerce Park, Curacao, which holds an e-gaming sublicense #
                  8048/JAZ2014-034 issued by Antillephone N.V. Striking Stingray
                  Cyprus Limited, registered under the laws of Cyprus under
                  registration number HE 398271), having its registered office
                  at: Chytron, 30, 2nd floor, Flat/Office A22, 1075, Nicosia,
                  Cyprus, is a payment agent of Abudantia B.V.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-end col-span-2 sm:mt-8 flex-1">
            <img
              src="./assets/image/andoid-button.png"
              className="w-28 rounded-lg mr-3"
              alt=""
            />
            <img
              src="./assets/image/apple-button.png"
              className="w-28 rounded-lg"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-wrap container mx-auto justify-center mt-10">
          {[...new Array(19)].map((ele, i) => {
            return (
              <div key={i} className="mx-4 h-[35px] py-[6px] max-w-[100px]">
                <img
                  src={`./assets/image/footer/images/img_${i + 19}.svg`}
                  className="max-w-[100px] h-full object-contain"
                  alt=""
                />
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap container mx-auto justify-center my-10 mb-0">
          {[...new Array(19)].map((ele, i) => {
            return (
              <div key={i} className="mx-4 h-[35px] py-[6px] max-w-[100px] ">
                <img
                  src={`./assets/image/footer/images/img_${i + 1}.svg`}
                  className="max-w-[100px] h-full object-contain"
                  alt=""
                />
              </div>
            );
          })}
        </div>
        <div className="mob_footer">
          <div className="mob_footer-icon flex items-center flex-col">
            <span className="material-symbols-rounded">sports_basketball</span>
            <Link to="/sports-book">SportsBook</Link>
          </div>
          <div className="mob_footer-icon flex items-center flex-col">
            <span className="material-symbols-rounded">video_library</span>
            <Link to="/InPlayScreen">In Play</Link>
          </div>
          <div className="mob_footer-icon flex items-center flex-col">
            <span className="material-symbols-rounded">video_library</span>
            <span>In Play</span>
          </div>
          <div className="mob_footer-icon flex items-center flex-col">
            <span className="material-symbols-rounded">chat</span>
            <span>Support</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
