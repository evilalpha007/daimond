import React from "react";
import Header from "../../components/publicComponents/Header";
import Carousel from "../../components/publicComponents/Carousel";
import SubCard from "../../components/publicComponents/SubCard";
import Card from "../../components/publicComponents/Card";
import EditorChoice from "../../components/publicComponents/EditorChoice";
import PaymentCarousel from "../../components/publicComponents/PaymentCarousel";
import BlueImage from "../../components/publicComponents/BlueImage";
import Footer from "../../components/publicComponents/Footer";
import ThematicCategories from "./../../components/publicComponents/ThematicCategories";

export default function HomeScreen() {
  return (
    <>
      <Header />
      <Carousel />
      <SubCard />
      <Card />
      <EditorChoice />
      <PaymentCarousel />
      <ThematicCategories />
      <BlueImage />
      <Footer />
    </>
  );
}
