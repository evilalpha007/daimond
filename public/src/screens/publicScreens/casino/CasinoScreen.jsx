import React from "react";
import Header from "../../../components/publicComponents/Header";
import Carousel from "../../../components/publicComponents/Carousel";
import Card from "../../../components/publicComponents/Card";
import EditorChoice from "../../../components/publicComponents/EditorChoice";
import Footer from "../../../components/publicComponents/Footer";
import CatogoryIcon from "./CatogoryIcon";

export default function CasinoScreen() {
  return (
    <div>
      <div className="casino ">
        <Header />
        <Carousel />
        <CatogoryIcon />
        <Card />
        <Card />
        <EditorChoice />
        <EditorChoice />
        <Footer />
      </div>
    </div>
  );
}
