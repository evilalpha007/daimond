import React from "react";
import Header from "../../components/publicComponents/Header";
import SportBookSidebar from "../../components/publicComponents/SportBookSidebar";
import SportBookBetSlip from "./SportBookBetSlip";
import MatchTableSlider from "../../components/publicComponents/MatchTableSlider";
import MatchCardSlider from "../../components/publicComponents/MatchCardSlider";
import AllInPlay from "../../components/publicComponents/AllInPlay";
import Footer from "../../components/publicComponents/Footer";

const InPlayScreen = () => {
  return (
    <div className="h-screen overflow-scroll w-screen">
      <Header />
      {/* xl:grid xl:grid-cols-[280px_1fr_200px] */}
      <div className="flex w-screen h-full overflow-scroll">
        {/* side bar  */}

        <div className="hidden xl:block">
          <SportBookSidebar />
        </div>
        {/* main content */}
        <div className="xl:w-[calc(100%_-_288px_-_360px)] w-full">
          <MatchCardSlider />
          <AllInPlay />
          <MatchTableSlider />
        </div>
        {/* bet slip aside  */}
        <div className="xl:block hidden -ml-5">
          <SportBookBetSlip />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InPlayScreen;
