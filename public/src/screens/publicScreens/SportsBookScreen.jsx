import React from "react";
import Header from "./../../components/publicComponents/Header";
import SportBookBetSlip from "./SportBookBetSlip";
import SportBookCarousel from "./SportBookCarousel";
import "../../css/SportsBookScreen.css";
import MatchCardSlider from "../../components/publicComponents/MatchCardSlider";
import SportBookSidebar from "../../components/publicComponents/SportBookSidebar";
import MatchTableSlider from "../../components/publicComponents/MatchTableSlider";
import Footer from "../../components/publicComponents/Footer";

export default function SportsBookScreen() {
  return (
    <div className="sport_section">
      <Header />
      <div className="flex">
        <div className="hidden xl:block">
          <SportBookSidebar />
        </div>
        <div className="xl:w-[calc(100%_-_288px_-_360px)] w-full">
          <SportBookCarousel />
          <MatchCardSlider />
          <MatchTableSlider />
        </div>
        <SportBookBetSlip />
      </div>
      <Footer />
    </div>
  );
}
