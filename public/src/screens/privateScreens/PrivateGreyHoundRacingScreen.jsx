import React from "react";
import PrivateMiddleOptionList from "../../components/protectedComponents/PrivateMiddleOptionList";
import PrivatePulseBanner from "../../components/protectedComponents/PrivatePulseBanner";

export default function PrivateGreyHoundRacingScreen() {
  return (
    <>
      <PrivatePulseBanner />
      <span className="p-1.5 px-4 mx-2 inline-block border-r-[1px] border-black cursor-pointer bg-blue-900 text-white ">
        GreyHound Racing
      </span>
      <PrivateMiddleOptionList />
    </>
  );
}
