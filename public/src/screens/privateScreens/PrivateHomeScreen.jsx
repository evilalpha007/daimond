import React, { useState } from "react";
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import PrivateMiddleware from "../../components/protectedComponents/PrivateMiddleware";
import PrivatePulseBanner from "../../components/protectedComponents/PrivatePulseBanner";
import PrivateTopToggleList from "../../components/protectedComponents/PrivateTopToggleList";
import {
  useGetCricketMatchesQuery,
  useGetSoccerMatchesQuery,
  useGetTennisMatchesQuery,
} from "../../store/services/mainApi";

export default function PrivateHomeScreen() {
  const [options, setoptions] = useState([
    { title: "InPlay", active: true },
    { title: "Cricket", active: false },
    { title: "Soccer", active: false },
    { title: "Tennis", active: false },
    { title: "Horse Racing", active: false },
    { title: "GreyHOund Racing", active: false },
    { title: "Kabaddi", active: false },
    { title: "Politics", active: false },
    { title: "Casino", active: false },
    { title: "Int.Casino", active: false },
  ]);
  const cricketMatch = useGetCricketMatchesQuery();
  const soccerMatch = useGetSoccerMatchesQuery();
  const tennisMatch = useGetTennisMatchesQuery();

  if (
    cricketMatch.isFetching ||
    soccerMatch.isFetching ||
    tennisMatch.isFetching
  ) {
    return <Loader />;
  }
  if (tennisMatch.error || cricketMatch.error || soccerMatch.error) {
    return <Error />;
  }

  return (
    <div>
      <PrivatePulseBanner />
      <PrivateTopToggleList options={options} setoptions={setoptions} />
      <PrivateMiddleware
        cricketMatch={cricketMatch.data}
        soccerMatch={soccerMatch.data}
        tennisMatch={tennisMatch.data}
        activeApi={options}
      />
    </div>
  );
}
