import React from "react";
import PrivateMiddleware from "../../components/protectedComponents/PrivateMiddleware";
import PrivatePulseBanner from "../../components/protectedComponents/PrivatePulseBanner";

export default function PrivatePoliticsScreen() {
  return (
    <>
      <PrivatePulseBanner />
      <PrivateMiddleware activeName="Politics" />;
    </>
  );
}
