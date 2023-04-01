import React from "react";
import Carousel from "../../../components/publicComponents/Carousel";
import Footer from "../../../components/publicComponents/Footer";
import Header from "../../../components/publicComponents/Header";
import PlayingCards from "../../../components/publicComponents/PlayingCards";
import CatogoryIcon from "./CatogoryIcon";

export default function JackpotScreen() {
  return (
    <div className="LiveCasinoScreen">
      <div className="live-casino-container">
        <Header />
        <Carousel />
        <CatogoryIcon />
        <div className="casino_games_header  flex mt-5 items-center">
          <span className="material-symbols-rounded text-yellow-300 text-3xl rotate-[270deg] mr-3 ml-3 ">
            arrow_circle_up
          </span>
          <span className="font-semibold text-white text-2xl ">Jackpot</span>
        </div>
        <PlayingCards />
        <Footer />
      </div>
    </div>
  );
}