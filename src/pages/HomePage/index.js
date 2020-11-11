import React from "react";
import InfoSection from "../../components/InfoSection";
import { homeObjOne, homeObjTwo, homeObjFour, homeObjThree } from "./data";

const HomePage = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default HomePage;
