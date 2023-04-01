import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { handelMobileActiveBetTiltCard } from "../../../store/features/eventSlice";
import { useGetGameIdMarketQuery } from "../../../store/services/mainApi";
import EventMatch from "./EventMatch";

export default function ParentEventMatch() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { activeMatch, eventApiAddress } = useSelector((state) => state.event);

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

  const { data, error, isFetching } = useGetGameIdMarketQuery(gameId);
  if (isFetching) return <> Loading... </>;
  if (error) return <>Error</>;

  return <EventMatch apiData={data} />;
}
