import React from "react";
import PrivatePulseBanner from "../../components/protectedComponents/PrivatePulseBanner";
import { useGetSoccerMatchesQuery } from "../../store/services/mainApi";
import PrivateMiddleware from "../../components/protectedComponents/PrivateMiddleware";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

export default function PrivateSoccerScreen() {
  const { data, isFetching, error } = useGetSoccerMatchesQuery();

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
        activeName="Soccer"
        activeApi={[{ title: "Soccer", active: true }]}
        soccerMatch={data}
      />
      ;
    </>
  );
}
