import React from "react";
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import PrivatePulseBanner from "../../components/protectedComponents/PrivatePulseBanner";
import { useGetTennisMatchesQuery } from "../../store/services/mainApi";
import PrivateMiddleware from "./../../components/protectedComponents/PrivateMiddleware";

export default function PrivateTennisScreen() {
  const { data, isFetching, error } = useGetTennisMatchesQuery();
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
        activeName="Tennis"
        activeApi={[{ title: "Tennis", active: true }]}
        tennisMatch={data}
      />
      ;
    </>
  );
}
