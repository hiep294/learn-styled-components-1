import React from "react";
import InfoSection from "../../components/InfoSection";
import Pricing from "../../components/Pricing";
import { homeObjOne, homeObjTwo, homeObjFour, homeObjThree } from "./data";

const HomePage = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Pricing />
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default HomePage;
