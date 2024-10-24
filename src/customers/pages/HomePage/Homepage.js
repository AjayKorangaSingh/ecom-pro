import React from "react";
import { MainCarousel } from "../../components/homeCarosale.js/MainCarousel";
import HomeSectionCarosel from "../../components/homeSectionCarosale/HomeSectionCarosel";
import { mens } from "../../../data/mens_kurta";

const Home = () => {
  return (
    <>
      <MainCarousel />
      <div className="space-y-10 py-20 flex flex-col justify-center">
        <HomeSectionCarosel data={mens} section="mens kurta"/>
        <HomeSectionCarosel data={mens} section="womens kurta"/>
      </div>
    </>
  );
};

export default Home;
