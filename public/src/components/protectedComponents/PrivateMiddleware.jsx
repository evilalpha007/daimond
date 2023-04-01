import React from "react";
import PrivateCasinoScreen from "./../../screens/privateScreens/PrivateCasinoScreen";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handelActiveMatch } from "../../store/features/eventSlice";

const PrivateMiddleware = ({
  activeName,
  cricketMatch,
  soccerMatch,
  tennisMatch,
  activeApi,
}) => {
  const dispatch = useDispatch();
  soccerMatch = soccerMatch;
  tennisMatch = tennisMatch;

  // soccerMatch = soccerMatch?.map((item, i) => {
  //   let market_runner_json = JSON.parse(item.market_runner_json);
  //   let new_runner_json = JSON.parse(item.new_runner_json);
  //   item = { ...item, market_runner_json, new_runner_json };

  //   return item;
  // });
  // tennisMatch = tennisMatch?.map((item, i) => {
  //   let market_runner_json = JSON.parse(item.market_runner_json);
  //   let new_runner_json = JSON.parse(item.new_runner_json);
  //   item = { ...item, market_runner_json, new_runner_json };
  //   return item;
  // });
  let data = [];
  activeApi?.map((ele) => {
    if (ele.active && ele.title === "InPlay") {
      data = [cricketMatch, soccerMatch, tennisMatch];
      let mergedArray = cricketMatch.concat(soccerMatch);
      let allMerged = mergedArray.concat(tennisMatch);
      data = allMerged.filter((ele) => {
        return ele?.inPlay === "True" || ele?.inPlay;
      });
    } else if (ele.active && ele.title === "Cricket") {
      data = cricketMatch;
    } else if (ele.active && ele.title === "Soccer") {
      data = soccerMatch;
    } else if (ele.active && ele.title === "Tennis") {
      data = tennisMatch;
    }
  });

  return (
    <div className="bg-white Cricket-table  w-full">
      <div className="cricket_table_part m-2">
        {activeName && (
          <span className="p-1.5 px-4 inline-block mt-[2rem] border-r-[1px] border-black cursor-pointer bg-blue-900 text-white ">
            {activeName}
          </span>
        )}

        <div className="flex justify-end items-center mb-2">
          <div className=" mr-2 font-semibold">View by:</div>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="TIME">TIME</option>
            <option value="CA">COMPETITIONS</option>
          </select>
        </div>

        <div className="cricket_table_head flex  py-1 justify-between border-t-2 border-[#dee2e6">
          <div className="text-1xl font-semibold w-[60%]">Game</div>
          <div className="head_part flex justify-between text-center w-[40%]">
            <div className="w-[170px] text-center font-bold">1</div>
            <div className="w-[170px] text-center font-bold">X</div>
            <div className="w-[170px] text-center font-bold">2</div>
          </div>
        </div>
        {data &&
          data.map((ele, i) => {
            return (
              <div
                key={i}
                className="match_table  flex justify-between border-t-2 border-[#dee2e6] items-center"
              >
                <div className="match_table_name w-[60%] flex justify-between items-center">
                  <Link
                    onClick={() =>
                      dispatch(
                        handelActiveMatch({
                          activeMatch: ele,
                          eventApiAddress: ele?.eid ? ele?.eid : ele?.etid,
                        })
                      )
                    }
                    to={{
                      pathname: `/game-list/event/${
                        ele?.eid ? ele?.eid : ele?.etid
                      }/${ele?.gameId ? ele?.gameId : ele?.gmid}`,
                    }}
                  >
                    <h2 className="ml-1 p-[2px]">
                      {ele?.eventName?.split("/")[0]}
                      {ele?.eventName?.split("/")[1]}
                      {ele?.ename}/<span className="mx-3">{ele?.stime}</span>
                    </h2>
                  </Link>
                  <div className="icons_match_table flex gap-4 mx-4">
                    <div className="flex items-center">
                      {ele?.inPlay === "True" || ele?.inPlay ? (
                        <div className="bg-green-700 rounded-full w-[10px] h-[10px]"></div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="flex items-center w-[19px]">
                      {ele?.tv === "True" ? (
                        <span className="material-symbols-rounded  ">
                          desktop_windows
                        </span>
                      ) : (
                        <div className="w-[19px]"></div>
                      )}
                    </div>
                    <div>
                      {ele?.f === "True" ? "F" : <div className="w-2"></div>}
                    </div>
                    <div>BM</div>
                    <div>T</div>
                  </div>
                </div>
                {/* blue == back || pink == lay */}
                <div className="match_points flex gap-[.5px] items-center font-bold w-[40%]">
                  <div className="text-center p-[2px] w-full bg-[#00bbff]">
                    {ele?.back1
                      ? ele?.back1
                      : Array.isArray(ele?.market_runner_json)
                      ? ele?.market_runner_json[0]?.back[0]?.price
                      : ele?.section?.[0]?.odds
                      ? ele?.section[0]?.odds[0].otype === "back"
                        ? ele?.section[0]?.odds[0]?.odds
                        : ele?.section[0]?.odds[1].otype === "back"
                        ? ele?.section[0]?.odds[1].odds
                        : "0"
                      : "0"}
                    {/*  {ele?.section?.[0]?.odds
                      ? ele?.section[0]?.odds[0].otype === "back"
                        ? ele?.section[0]?.odds[0]?.odds
                        : ele?.section[0]?.odds[1].otype === "back"
                        ? ele?.section[0]?.odds[1].odds
                        : "0"
                  : "0"}*/}
                  </div>
                  <div className="text-center p-[2px] w-full bg-[#ffbac6]">
                    {ele?.lay1
                      ? ele?.lay1
                      : Array.isArray(ele?.market_runner_json)
                      ? ele?.market_runner_json[0]?.lay[0]?.price
                      : ele?.section?.[0]?.odds
                      ? ele?.section[0]?.odds[0].otype === "lay"
                        ? ele?.section[0]?.odds[0]?.odds
                        : ele?.section[0]?.odds[1].otype === "lay"
                        ? ele?.section[0]?.odds[1].odds
                        : "0"
                      : "0"}

                    {/*  {ele?.section?.[0]?.odds
                      ? ele?.section[0]?.odds[0].otype === "lay"
                        ? ele?.section[0]?.odds[0]?.odds
                        : ele?.section[0]?.odds[1].otype === "lay"
                        ? ele?.section[0]?.odds[1].odds
                        : "0"
                 : "0"} */}
                  </div>
                  <div className="text-center p-[2px] w-full bg-[#00bbff]">
                    {ele?.back11
                      ? ele?.back11
                      : Array.isArray(ele?.market_runner_json)
                      ? ele?.market_runner_json[0]?.back[1]?.price
                      : ele?.section?.[1]?.odds
                      ? ele?.section[1]?.odds[0].otype === "back"
                        ? ele?.section[1]?.odds[0]?.odds
                        : ele?.section[1]?.odds[1].otype === "back"
                        ? ele?.section[1]?.odds[1].odds
                        : "0"
                      : "0"}

                    {/* {ele?.back11
                      ? ele?.back11
                      : Array.isArray(ele?.section)
                      ? ele?.section[1]?.odds[0].otype === "back"
                        ? ele?.section[1]?.odds[0]?.odds
                        : ele?.section[1]?.odds[1].otype === "back"
                        ? ele?.section[1]?.odds[1].odds
                        : "0"
                      : "0"} */}
                  </div>
                  <div className="text-center p-[2px] w-full bg-[#ffbac6]">
                    {ele?.lay11
                      ? ele?.lay11
                      : Array.isArray(ele?.market_runner_json)
                      ? ele?.market_runner_json[0]?.lay[1]?.price
                      : ele?.section?.[1]?.odds
                      ? ele?.section[1]?.odds[0].otype === "lay"
                        ? ele?.section[1]?.odds[0]?.odds
                        : ele?.section[1]?.odds[1].otype === "lay"
                        ? ele?.section[1]?.odds[1].odds
                        : "0"
                      : "0"}

                    {/* {ele?.lay11
                      ? ele?.lay11
                      : Array.isArray(ele?.section)
                      ? ele?.section[1]?.odds[0].otype === "lay"
                        ? ele?.section[1]?.odds[0]?.odds
                        : ele?.section[1]?.odds[1].otype === "lay"
                        ? ele?.section[1]?.odds[1].odds
                        : "0"
                      : "0"} */}
                  </div>
                  <div className="text-center p-[2px] w-full bg-[#00bbff]">
                    {ele?.back12
                      ? ele?.back12
                      : Array.isArray(ele?.market_runner_json)
                      ? ele?.market_runner_json[0]?.back[2]?.price
                      : ele?.section?.[2]?.odds
                      ? ele?.section[2]?.odds[0].otype === "back"
                        ? ele?.section[2]?.odds[0]?.odds
                        : ele?.section[2]?.odds[1].otype === "back"
                        ? ele?.section[2]?.odds[1].odds
                        : "0"
                      : "0"}
                    {/* {ele?.back12
                      ? ele?.back12
                      : Array.isArray(ele?.section)
                      ? ele?.section[2]?.odds[0].otype === "back"
                        ? ele?.section[2]?.odds[0]?.odds
                        : ele?.section[2]?.odds[1].otype === "back"
                        ? ele?.section[2]?.odds[1].odds
                        : "0"
                      : "0"} */}
                  </div>
                  <div className="text-center p-[2px] w-full bg-[#ffbac6]">
                    {ele?.back12
                      ? ele?.back12
                      : Array.isArray(ele?.market_runner_json)
                      ? ele?.market_runner_json[0]?.lay[2]?.price
                      : ele?.section?.[2]?.odds
                      ? ele?.section[2]?.odds[0].otype === "lay"
                        ? ele?.section[2]?.odds[0]?.odds
                        : ele?.section[2]?.odds[1].otype === "lay"
                        ? ele?.section[2]?.odds[1].odds
                        : "0"
                      : "0"}

                    {/* {ele?.back12
                      ? ele?.back12
                      : Array.isArray(ele?.section)
                      ? ele?.section[2]?.odds[0].otype === "lay"
                        ? ele?.section[2]?.odds[0]?.odds
                        : ele?.section[2]?.odds[1].otype === "lay"
                        ? ele?.section[2]?.odds[1].odds
                        : "0"
                      : "0"} */}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <PrivateCasinoScreen />
    </div>
  );
};

export default PrivateMiddleware;
