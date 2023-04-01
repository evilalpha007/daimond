import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import {
  handelBetTilt,
  handelMobileActiveBetTiltCard,
  handelMobileActiveBetTiltCardUpdate,
} from "../../../store/features/eventSlice";
import PrivateBetSlip from "../PrivateBetslip";
import MobCartBetSlip from "./../MobCartBetSlip";
import { io } from "socket.io-client";

const EventMatch = ({ apiData }) => {
  const [slideDiv, setSlideDiv] = useState(false);

  const handleClick = () => {
    setSlideDiv(!slideDiv);
  };

  const dispatch = useDispatch();
  const { activeMatch, eventApiAddress } = useSelector((state) => state.event);

  // 1 == soccer
  // 2 == tennis
  // 4 == cricket

  const location = useLocation();
  let gameId = "";
  if (eventApiAddress === 1 || eventApiAddress === 2) {
    gameId = "marketst/?gameid=" + activeMatch?.gmid;
  } else if (eventApiAddress == 4) {
    gameId =
      "market/?gameid=" +
      location.pathname.split("/")[location.pathname.split("/").length - 1];
  }

  if (gameId === "") {
    gameId = JSON.parse(localStorage.getItem("gameId"));
  }

  localStorage.setItem("gameId", JSON.stringify(gameId));
  console.log(apiData);

  let sportMarket = {
    sporttype:
      location.pathname.split("/")[location.pathname.split("/").length - 2],
    gameid:
      activeMatch?.gmid ||
      location.pathname.split("/")[location.pathname.split("/").length - 1],
  };

  sportMarket.gameid = Number(sportMarket.gameid);
  sportMarket.sporttype = Number(sportMarket.sporttype);

  const [data, setdata] = useState([]);

  let tempArrayForCricket = [];
  let tempArrayForSoccerTennis = [];
  useEffect(() => {
    const socket = io.connect("http://localhost:3000");

    socket.emit("clientreq", sportMarket);

    socket.on("resMarket", (resdata) => {
      if (resdata && !resdata?.status) {
        setdata(resdata);
      }
      if (gameId?.split("/")[0] == "marketst") {
        if (resdata?.data) {
          setdata(resdata.data);
        }
      }
    });

    if (apiData) {
      setdata(apiData);
    }
    if (gameId?.split("/")[0] == "marketst") {
      if (apiData?.data) {
        setdata(apiData?.data);
      }
    }

    if (Array.isArray(apiData?.t1)) {
      tempArrayForCricket = [...tempArrayForCricket, ...apiData?.t1[0]];
    }
    if (Array.isArray(apiData?.t2) && apiData?.t2[0]?.bm1) {
      tempArrayForCricket = [...tempArrayForCricket, ...apiData?.t2[0]?.bm1];
    }
    if (apiData?.t3) {
      tempArrayForCricket = [...tempArrayForCricket, ...apiData?.t3];
    }
    if (apiData?.t4) {
      tempArrayForCricket = [...tempArrayForCricket, ...apiData?.t4];
    }

    tempArrayForCricket = tempArrayForCricket.map((ele, i) => {
      return { id: ele, active: false, id: i };
    });
    if (tempArrayForCricket.length > 0) {
      dispatch(handelMobileActiveBetTiltCard(tempArrayForCricket));
    }

    let tempCounterSoccerTennis = -1;

    if (Array.isArray(apiData?.data)) {
      apiData?.data?.forEach((ele) => {
        ele?.section &&
          ele?.section.forEach((item) => {
            tempCounterSoccerTennis++;
            tempArrayForSoccerTennis.push({
              id: tempCounterSoccerTennis,
              active: false,
              ele: item,
            });
          });
      });
    }

    if (tempArrayForSoccerTennis.length > 0) {
      dispatch(handelMobileActiveBetTiltCard(tempArrayForSoccerTennis));
    }

    // Disconnect socket connection
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="EventMatch flex">
      <div className="h-[5vh] flex items-center   w-full newImg_headerMob text-white text-md bg-[#0289cd]">
        <div className="newImg_headerMob w-[100px] mr-7 ml-4">ODDS</div>
        <div className="newImg_headerMob   ml-[6rem]">Matched Bet (0)</div>
        <span className=" absolute right-0 mt-1 mr-2  " onClick={handleClick}>
          <span className="material-symbols-rounded">tv</span>
        </span>
      </div>

      <div
        className={` event_page mt-[2.325rem] md:w-[70%] w-[100%] pt-10 md:pt-0  content ${
          slideDiv ? "margin_bottom_slide" : ""
        }`}
      >
        <div className="match_header font_size_small m-1 p-3 text-white flex justify-between bg-[#0f2462]">
          <p>
            {activeMatch?.eventName?.split("/")[0]}
            {activeMatch?.ename?.split("/")[0]}
          </p>
          <p>
            {activeMatch?.eventName?.slice(0, -5).split("/")[1]}
            {activeMatch?.stime}
          </p>
        </div>
        <div className="evenetbanner m-1">
          <img src="/assets/image/banner/backgorund_cricket.jpeg" alt="" />
        </div>
        <CricketTable
          data={data}
          gameId={gameId}
          dispatch={dispatch}
          tempArrayForCricket={tempArrayForCricket}
        />
        {gameId?.split("/")[0] == "marketst" && (
          <>
            {data && (
              <DataTableVersionTwo dispatch={dispatch} data={data} hideData />
            )}
          </>
        )}
        {/* {gameId?.split("/")[0] == "marketst" && (
          <>
            {data && (
              <DataTableVersionTwo dispatch={dispatch} data={data} hideData />
            )}
          </>
        )} */}
      </div>
      <PrivateBetSlip />
    </div>
  );
};

function CricketTable({ gameId, dispatch, data }) {
  var counterCricketValue = -1;
  const [showModal1, setShowModal1] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);
  const [showModal3, setShowModal3] = React.useState(false);
  const [showModal4, setShowModal4] = React.useState(false);

  return (
    data?.status !== "something went wrong" &&
    gameId?.split("/")[0] == "market" && (
      <>
        {Array.isArray(data?.t1) && gameId?.split("/")[0] == "market" && (
          <>
            <div className="match_odss_header m-1 p-2 text-white flex justify-between bg-[#0f2462d9]">
              <p>Match Odds</p>
              <span
                className="material-symbols-rounded cursor-pointer"
                onClick={() => setShowModal1(true)}
              >
                info
              </span>
              {showModal1 ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-6xl">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                          <h3 className="text-3xl font-semibold">
                            Modal Title
                          </h3>
                          <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal1(false)}
                          >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                              ×
                            </span>
                          </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                          <p className="my-4 text-slate-500 text-lg leading-relaxed">
                            I always felt like I could do anything. That’s the
                            main thing people are controlled by! Thoughts- their
                            perception of themselves! They're slowed down by
                            their perception of themselves. If you're taught you
                            can’t do anything, you won’t do anything. I was
                            taught I could do everything.
                          </p>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                          <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal1(false)}
                          >
                            Close
                          </button>
                          <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal1(false)}
                          >
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </div>
            <div className="table_header  grid  grid-cols-10  p-1 gap-[2px]">
              <div className="text-[#17a2b8] font-bold sm:col-span-6 col-span-4 ">
                Min: - Max: 1
              </div>

              <div className="font-bold bg-[#72BBEF] text-center  col-span-3 sm:col-span-1 ">
                BACK
              </div>

              <div className="font-bold bg-[#FAA9BA] text-center  col-span-3 sm:col-span-1">
                LAY
              </div>
            </div>
            {data?.t1[0].map((ele, i) => {
              counterCricketValue++;
              return (
                <DataTableItem
                  ele={ele}
                  i={i}
                  hideData
                  hideDataPhone
                  dispatch={dispatch}
                  key={i}
                  counterCricketValue={counterCricketValue}
                />
              );
            })}
          </>
        )}
        {Array.isArray(data?.t2) && data?.t2[0]?.bm1 && (
          <>
            <div className="match_odss_header m-1 p-2 text-white flex justify-between bg-[#0f2462d9]">
              <p>BOOKMAKER</p>
              <span
                className="material-symbols-rounded cursor-pointer"
                onClick={() => setShowModal2(true)}
              >
                info
              </span>
              {showModal2 ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-6xl">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                          <h3 className="text-3xl font-semibold">
                            Modal Title
                          </h3>
                          <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal2(false)}
                          >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                              ×
                            </span>
                          </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                          <p className="my-4 text-slate-500 text-lg leading-relaxed">
                            I always felt like I could do anything. That’s the
                            main thing people are controlled by! Thoughts- their
                            perception of themselves! They're slowed down by
                            their perception of themselves. If you're taught you
                            can’t do anything, you won’t do anything. I was
                            taught I could do everything.
                          </p>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                          <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal2(false)}
                          >
                            Close
                          </button>
                          <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal2(false)}
                          >
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </div>
            <div className="table_header  grid  grid-cols-10  p-1 gap-[2px]">
              <div className="text-[#17a2b8] font-bold sm:col-span-6 col-span-4 ">
                Min: - Max: 1
              </div>

              <div className="font-bold bg-[#72BBEF] text-center  col-span-3 sm:col-span-1 ">
                BACK
              </div>

              <div className="font-bold bg-[#FAA9BA] text-center  col-span-3 sm:col-span-1">
                LAY
              </div>
            </div>
            {data?.t2[0]?.bm1 &&
              gameId?.split("/")[0] == "market" &&
              data?.t2[0]?.bm1.map((ele, i) => {
                counterCricketValue++;
                return (
                  <DataTableItem
                    ele={ele}
                    i={i}
                    hideData
                    hideDataPhone
                    dispatch={dispatch}
                    key={i}
                    counterCricketValue={counterCricketValue}
                  />
                );
              })}
          </>
        )}
        {Array.isArray(data?.t3) && data?.t3 && (
          <>
            <div className="match_odss_header m-1 p-2 text-white flex justify-between bg-[#0f2462d9]">
              <p>Fancy</p>
              <span
                className="material-symbols-rounded cursor-pointer"
                onClick={() => setShowModal3(true)}
              >
                info
              </span>
              {showModal3 ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-6xl">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                          <h3 className="text-3xl font-semibold">
                            Modal Title
                          </h3>
                          <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal3(false)}
                          >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                              ×
                            </span>
                          </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                          <p className="my-4 text-slate-500 text-lg leading-relaxed">
                            I always felt like I could do anything. That’s the
                            main thing people are controlled by! Thoughts- their
                            perception of themselves! They're slowed down by
                            their perception of themselves. If you're taught you
                            can’t do anything, you won’t do anything. I was
                            taught I could do everything.
                          </p>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                          <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal3(false)}
                          >
                            Close
                          </button>
                          <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal3(false)}
                          >
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </div>
            <div className="table_header  grid  grid-cols-10  p-1 gap-[2px]">
              <div className="text-[#17a2b8] font-bold sm:col-span-6 col-span-4 ">
                Min: - Max: 1
              </div>

              <div className="font-bold bg-[#72BBEF] text-center  col-span-3 sm:col-span-1 ">
                BACK
              </div>

              <div className="font-bold bg-[#FAA9BA] text-center  col-span-3 sm:col-span-1">
                LAY
              </div>
            </div>
            {data?.t3 &&
              gameId?.split("/")[0] == "market" &&
              data?.t3.map((ele, i) => {
                counterCricketValue++;
                return (
                  <DataTableItem
                    ele={ele}
                    i={i}
                    hideData
                    hideDataPhone
                    dispatch={dispatch}
                    key={i}
                    counterCricketValue={counterCricketValue}
                  />
                );
              })}
          </>
        )}
        {Array.isArray(data?.t4) && data?.t4 && (
          <>
            <div className="match_odss_header m-1 p-2 text-white flex justify-between bg-[#0f2462d9]">
              <p>Fancy</p>
              <span
                className="material-symbols-rounded cursor-pointer"
                onClick={() => setShowModal4(true)}
              >
                info
              </span>
              {showModal4 ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-6xl">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                          <h3 className="text-3xl font-semibold">
                            Modal Title
                          </h3>
                          <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal4(false)}
                          >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                              ×
                            </span>
                          </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                          <p className="my-4 text-slate-500 text-lg leading-relaxed">
                            I always felt like I could do anything. That’s the
                            main thing people are controlled by! Thoughts- their
                            perception of themselves! They're slowed down by
                            their perception of themselves. If you're taught you
                            can’t do anything, you won’t do anything. I was
                            taught I could do everything.
                          </p>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                          <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal4(false)}
                          >
                            Close
                          </button>
                          <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal4(false)}
                          >
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </div>
            <div className="table_header  grid  grid-cols-10  p-1 gap-[2px]">
              <div className="text-[#17a2b8] font-bold sm:col-span-6 col-span-4 ">
                Min: - Max: 1
              </div>

              <div className="font-bold bg-[#72BBEF] text-center  col-span-3 sm:col-span-1 ">
                BACK
              </div>

              <div className="font-bold bg-[#FAA9BA] text-center  col-span-3 sm:col-span-1">
                LAY
              </div>
            </div>
            {data?.t4 &&
              gameId?.split("/")[0] == "market" &&
              data?.t4.map((ele, i) => {
                counterCricketValue++;
                return (
                  <DataTableItem
                    ele={ele}
                    i={i}
                    hideData
                    hideDataPhone
                    dispatch={dispatch}
                    key={i}
                    counterCricketValue={counterCricketValue}
                  />
                );
              })}
          </>
        )}
      </>
    )
  );
}

const DataTableItem = ({
  ele,
  i,
  hideData,
  hideDataPhone,
  dispatch,
  counterCricketValue,
}) => {
  const { mobileActiveBetTiltCard } = useSelector((state) => state.event);

  return (
    <React.Fragment key={i}>
      <div className="grid grid-cols-10 py-[1px] px-1 gap-[2px]">
        <div className=" sm:col-span-4 col-span-4  bg-[#f2f2f2] text-sm p-1">
          <div className="text-left cursor-pointer font-bold">{ele?.nat}</div>

          {/* <div className="text-right cursor-pointer">0.20</div> */}
        </div>

        <div className="col-span-3 font_size_small flex justify-end gap-[2px]">
          {!hideData && (
            <>
              <div
                className={`bg-[#b2d7f1]  text-center p-1    w-full  ${
                  hideDataPhone && "hide_part"
                }`}
                // onClick={() =>
                //   dispatch(
                //     handelBetTilt({
                //       activeMatch: ele,
                //       color: "#72bbef",
                //       oddValue: ele?.b3,
                //     })
                //   )
                // }
              >
                <div className=" font-bold cursor-pointer">{ele?.b3}</div>
                <div className="text-[10px] cursor-pointer">{ele?.bs3}</div>
              </div>
              <div
                className={`bg-[#92c9f0] text-center p-1  w-full ${
                  hideDataPhone && "hide_part"
                } `}
                // onClick={() =>
                //   dispatch(
                //     handelBetTilt({
                //       activeMatch: ele,
                //       color: "#72bbef",
                //       oddValue: ele?.b2,
                //     })
                //   )
                // }
              >
                <div className=" font-bold cursor-pointer">{ele?.b2}</div>
                <div className="text-[10px] cursor-pointer">{ele?.bs2}</div>
              </div>
            </>
          )}
          <div
            className={`bg-[#72bbef] text-center p-1   w-full `}
            onClick={() => {
              dispatch(
                handelBetTilt({
                  activeMatchEvent: ele,
                  color: "#72bbef",
                  oddValue: ele?.b1,
                })
              );
              dispatch(
                handelMobileActiveBetTiltCardUpdate(counterCricketValue)
              );
            }}
          >
            <div className=" font-bold cursor-pointer">{ele?.b1}</div>
            <div className="text-[10px] cursor-pointer">{ele?.bs1}</div>
          </div>
        </div>

        <div className="col-span-3 font_size_small flex gap-[2px]">
          <div
            className="bg-[#faa9ba] text-center p-1 w-full  "
            onClick={() => {
              dispatch(
                handelBetTilt({
                  activeMatchEvent: ele,
                  color: "#faa9ba",
                  oddValue: ele?.l1,
                })
              );
              dispatch(
                handelMobileActiveBetTiltCardUpdate(counterCricketValue)
              );
            }}
          >
            <div className=" font-bold cursor-pointer">{ele?.l1}</div>
            <div className="text-[10px] cursor-pointer">{ele?.ls1}</div>
          </div>
          {!hideData && (
            <>
              <div
                className={`bg-[#f8bcc8] text-center p-1  w-full  ${
                  hideDataPhone && "hide_part"
                }`}
                // onClick={() =>
                //   dispatch(
                //     handelBetTilt({
                //       activeMatch: ele,
                //       color: "#faa9ba",
                //       oddValue: ele?.l2,
                //     })
                //   )
                // }
              >
                <div className=" font-bold cursor-pointer">{ele?.l2}</div>
                <div className="text-[10px] cursor-pointer">{ele?.ls2}</div>
              </div>

              <div
                className={`bg-[#f6ced6] text-center p-1 w-full    ${
                  hideDataPhone && "hide_part"
                }`}
                // onClick={() =>
                //   dispatch(
                //     handelBetTilt({
                //       activeMatch: ele,
                //       color: "#faa9ba",
                //       oddValue: ele?.l3,
                //     })
                //   )
                // }
              >
                <div className=" font-bold cursor-pointer">{ele?.l3}</div>
                <div className="text-[10px] cursor-pointer">{ele?.ls3}</div>
              </div>
            </>
          )}
        </div>
      </div>
      {mobileActiveBetTiltCard[counterCricketValue]?.active && (
        <div>
          <MobCartBetSlip />
        </div>
      )}
    </React.Fragment>
  );
};

function DataTableVersionTwo({ data, dispatch, hideData, hideDataPhone }) {
  const [showModal5, setShowModal5] = React.useState(false);
  let counter = -1;
  return (
    Array.isArray(data) &&
    data?.map((ele, i) => {
      if (!ele?.section) {
        return;
      }

      return (
        <React.Fragment key={ele?.mid || i}>
          <div className="match_odss_header m-1 p-2 text-white flex justify-between bg-[#0f2462d9]">
            <p>{ele?.mname}</p>

            {/* alpha */}
            <span
              className="material-symbols-rounded"
              onClick={() => setShowModal5(true)}
            >
              info
            </span>
            {showModal5 ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-6xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start  justify-between p-5 border-b bg-blue-600 border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold text-white">
                          Match Rules
                        </h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal5(false)}
                        >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex-auto">
                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                          TENNIS Match Odds :- If 1st set has been not completed
                          at the time of the retirement or disqualification,
                          then all bets relating to that individual match will
                          be void.
                        </p>
                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                          FOOTBALL Match Odds :- All bets apply to the relevant
                          full 'regular time' period including stoppage time.
                          Any extra-time and/or penalty shoot-out is not
                          included. For the cancellation of a goal, due to VAR,
                          bets matched between the time of the goal being scored
                          and the time at which the video assistant referee
                          finishes the review will be voided. For the
                          cancellation of a red card, due to VAR, bets matched
                          after the time at which the video assistant referee
                          commences the review will be voided.
                        </p>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal5(false)}
                        >
                          Close
                        </button>
                        <button
                          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal5(false)}
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </div>
          <div className="table_header  grid  grid-cols-10  p-1 px-2 gap-[2px]">
            <div className="text-[#17a2b8] font-bold sm:col-span-6 col-span-4 ">
              Min: - Max: 1
            </div>

            <div className="font-bold bg-[#72BBEF] text-center  col-span-3 sm:col-span-1 ">
              BACK
            </div>

            <div className="font-bold bg-[#FAA9BA] text-center  col-span-3 sm:col-span-1">
              LAY
            </div>
          </div>
          {ele?.section &&
            ele?.section.map((item, i) => {
              counter++;
              return (
                <DataTableItemVersionTwo
                  key={i}
                  item={item}
                  i={i}
                  hideData={hideData}
                  hideDataPhone={hideDataPhone}
                  dispatch={dispatch}
                  counter={counter}
                />
              );
            })}
        </React.Fragment>
      );
    })
  );
}

const DataTableItemVersionTwo = ({
  item,
  i,
  hideData,
  hideDataPhone,
  dispatch,
  counter,
}) => {
  const { mobileActiveBetTiltCard } = useSelector((state) => state.event);

  return (
    <React.Fragment key={i && i}>
      <div className="grid relative grid-cols-10 py-[1px] px-1 gap-[2px]">
        <div className=" sm:col-span-4 col-span-4  bg-[#f2f2f2] text-sm p-1">
          <div className="text-left cursor-pointer font-bold">{item?.nat}</div>

          {/* <div className="text-right cursor-pointer">0.20</div> */}
        </div>

        <div className="col-span-3  font_size_small flex justify-end gap-[2px]">
          {!hideData && (
            <>
              <div
                className={`bg-[#b2d7f1]  text-center p-1    w-full  ${
                  hideDataPhone && "hide_part"
                } ${item.gstatus === "suspend" && "suspended"}`}
                // onClick={() =>
                //   dispatch(
                //     handelBetTilt({
                //       activeMatch: item,
                //       color: "#72bbef",
                //       oddValue: item?.b3,
                //     })
                //   )
                // }
              >
                <div className=" font-bold cursor-pointer">
                  {Array.isArray(item?.odds) &&
                    item?.odds?.map(({ oname, odds }) => {
                      if (oname === "back3") return odds;
                    })}
                </div>
                <div className="text-[10px] cursor-pointer">
                  {Array.isArray(item?.odds) &&
                    item?.odds?.map(({ oname, size }) => {
                      if (oname === "back3") return size;
                    })}
                </div>
              </div>
              <div
                className={`bg-[#92c9f0] text-center p-1  w-full ${
                  hideDataPhone && "hide_part"
                } `}
                // onClick={() =>
                //   dispatch(
                //     handelBetTilt({
                //       activeMatch: item,
                //       color: "#72bbef",
                //       oddValue: item?.b2,
                //     })
                //   )
                // }
              >
                <div className=" font-bold cursor-pointer">
                  {Array.isArray(item?.odds) &&
                    item?.odds?.map(({ oname, odds }) => {
                      if (oname === "back2") return odds;
                    })}
                </div>
                <div className="text-[10px] cursor-pointer">
                  {Array.isArray(item?.odds) &&
                    item?.odds?.map(({ oname, size }) => {
                      if (oname === "back2") return size;
                    })}
                </div>
              </div>
            </>
          )}
          <div
            className={`bg-[#72bbef] text-center p-1 w-full `}
            onClick={() => {
              dispatch(
                handelBetTilt({
                  activeMatchEvent: item,
                  color: "#72bbef",
                  oddValueSoccerTennis:
                    Array.isArray(item?.odds) &&
                    item?.odds?.filter(({ oname, odds }) => {
                      if (oname === "back1") return odds;
                    }),
                })
              );
              dispatch(handelMobileActiveBetTiltCardUpdate(counter));
            }}
          >
            <div className=" font-bold cursor-pointer">
              {Array.isArray(item?.odds) &&
                item?.odds?.map(({ oname, odds }) => {
                  if (oname === "back1") return odds;
                })}
            </div>
            <div className="text-[10px] cursor-pointer">
              {Array.isArray(item?.odds) &&
                item?.odds?.map(({ oname, size }) => {
                  if (oname === "back2") return size;
                })}
            </div>
          </div>
        </div>

        <div className="col-span-3 font_size_small flex gap-[2px]">
          <div
            className="bg-[#faa9ba] text-center p-1 w-full"
            onClick={() => {
              dispatch(
                handelBetTilt({
                  activeMatchEvent: item,
                  color: "#faa9ba",
                  oddValueSoccerTennis:
                    Array.isArray(item?.odds) &&
                    item?.odds?.filter(({ oname, odds }) => {
                      if (oname === "lay1") return odds;
                    }),
                })
              );
              dispatch(handelMobileActiveBetTiltCardUpdate(counter));
            }}
          >
            <div className=" font-bold cursor-pointer">
              {Array.isArray(item?.odds) &&
                item?.odds?.map(({ oname, odds }) => {
                  if (oname === "lay1") return odds;
                })}
            </div>
            <div className="text-[10px] cursor-pointer">
              {Array.isArray(item?.odds) &&
                item?.odds?.map(({ oname, size }) => {
                  if (oname === "lay1") return size;
                })}
            </div>
          </div>
          {!hideData && (
            <>
              <div
                className={`bg-[#f8bcc8] text-center p-1  w-full  ${
                  hideDataPhone && "hide_part"
                }`}
                // onClick={() =>
                //   dispatch(
                //     handelBetTilt({
                //       activeMatch: item,
                //       color: "#faa9ba",
                //       oddValue: item?.l2,
                //     })
                //   )
                // }
              >
                <div className=" font-bold cursor-pointer">
                  {Array.isArray(item?.odds) &&
                    item?.odds?.map(({ oname, odds }) => {
                      if (oname === "lay2") return odds;
                    })}
                </div>
                <div className="text-[10px] cursor-pointer">
                  {Array.isArray(item?.odds) &&
                    item?.odds?.map(({ oname, odds }) => {
                      if (oname === "lay2") return odds;
                    })}
                </div>
              </div>

              <div
                className={`bg-[#f6ced6] text-center p-1 w-full ${
                  hideDataPhone && "hide_part"
                }`}
                // onClick={() =>
                //   dispatch(
                //     handelBetTilt({
                //       activeMatch: item,
                //       color: "#faa9ba",
                //       oddValue: item?.l3,
                //     })
                //   )
                // }
              >
                <div className=" font-bold cursor-pointer">
                  {Array.isArray(item?.odds) &&
                    item?.odds?.map(({ oname, odds }) => {
                      if (oname === "lay3") return odds;
                    })}
                </div>
                <div className="text-[10px] cursor-pointer">
                  {Array.isArray(item?.odds) &&
                    item?.odds?.map(({ oname, size }) => {
                      if (oname === "lay3") return size;
                    })}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      {mobileActiveBetTiltCard[counter]?.active && (
        <div>
          <MobCartBetSlip />
        </div>
      )}
    </React.Fragment>
  );
};

export default EventMatch;

// function DataTable({
//   data,
//   dispatch,
//   title,
//   hideData,
//   hideDataPhone,
//   gameId,
//   counterCricketValue,
// }) {
//   const [showModal, setShowModal] = React.useState(false);
//   return (
//     <>
//       <div className="match_odss_header m-1 p-2 text-white flex justify-between bg-[#0f2462d9]">
//         <p>{title}</p>
//         <span
//           className="material-symbols-rounded cursor-pointer"
//           onClick={() => setShowModal(true)}
//         >
//           info
//         </span>
//         {showModal ? (
//           <>
//             <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
//               <div className="relative w-auto my-6 mx-auto max-w-6xl">
//                 {/*content*/}
//                 <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
//                   {/*header*/}
//                   <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
//                     <h3 className="text-3xl font-semibold">Modal Title</h3>
//                     <button
//                       className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
//                       onClick={() => setShowModal(false)}
//                     >
//                       <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
//                         ×
//                       </span>
//                     </button>
//                   </div>
//                   {/*body*/}
//                   <div className="relative p-6 flex-auto">
//                     <p className="my-4 text-slate-500 text-lg leading-relaxed">
//                       I always felt like I could do anything. That’s the main
//                       thing people are controlled by! Thoughts- their perception
//                       of themselves! They're slowed down by their perception of
//                       themselves. If you're taught you can’t do anything, you
//                       won’t do anything. I was taught I could do everything.
//                     </p>
//                   </div>
//                   {/*footer*/}
//                   <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
//                     <button
//                       className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                       type="button"
//                       onClick={() => setShowModal(false)}
//                     >
//                       Close
//                     </button>
//                     <button
//                       className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                       type="button"
//                       onClick={() => setShowModal(false)}
//                     >
//                       Save Changes
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
//           </>
//         ) : null}
//       </div>
//       <div className="table_header  grid  grid-cols-10  p-1 gap-[2px]">
//         <div className="text-[#17a2b8] font-bold sm:col-span-6 col-span-4 ">
//           Min: - Max: 1
//         </div>

//         <div className="font-bold bg-[#72BBEF] text-center  col-span-3 sm:col-span-1 ">
//           BACK
//         </div>

//         <div className="font-bold bg-[#FAA9BA] text-center  col-span-3 sm:col-span-1">
//           LAY
//         </div>
//       </div>
//       {data &&
//         gameId?.split("/")[0] == "market" &&
//         data.map((ele, i) => {
//           counterCricketValue++;
//           return (
//             <DataTableItem
//               ele={ele}
//               i={i}
//               hideData={hideData}
//               hideDataPhone={hideDataPhone}
//               dispatch={dispatch}
//               key={i}
//               counterCricketValue={counterCricketValue}
//             />
//           );
//         })}
//     </>
//   );
// }
