import React from "react";
import PrivateMiddleware from "../../components/protectedComponents/PrivateMiddleware";
import PrivatePulseBanner from "../../components/protectedComponents/PrivatePulseBanner";
import { useGetCricketMatchesQuery } from "../../store/services/mainApi";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

export default function PrivateCricketScreen() {
  const { data, isFetching, error } = useGetCricketMatchesQuery();
  if (isFetching) {
    return <Loader />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <>
      <PrivatePulseBanner />
      <PrivateMiddleware
        activeApi={[{ title: "Cricket", active: true }]}
        activeName="Cricket"
        cricketMatch={data}
      />
      ;
    </>
  );
}
