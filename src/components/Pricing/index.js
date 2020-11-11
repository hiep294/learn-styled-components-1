import React from "react";
import { IconContext } from "react-icons";
import { GiRock } from "react-icons/gi";
import {
  PricingCard,
  PricingCardCost,
  PricingCardFeature,
  PricingCardFeatures,
  PricingCardIcon,
  PricingCardInfo,
  PricingCardLength,
  PricingCardPlan,
  PricingContainer,
  PricingHeading,
  PricingSection,
  PricingWrapper,
} from "./index.elements";
import { Button } from "../../globalStyles";

const Pricing = () => {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer>
            <PricingCardItem />
            <PricingCardItem />
            <PricingCardItem />
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
};

export default Pricing;

const PricingCardItem = () => {
  return (
    <PricingCard to="/sign-up">
      <PricingCardInfo>
        <PricingCardIcon>
          <GiRock />
        </PricingCardIcon>
        <PricingCardPlan>Started Pack</PricingCardPlan>
        <PricingCardCost>$99.99</PricingCardCost>
        <PricingCardLength>per month</PricingCardLength>
        <PricingCardFeatures>
          <PricingCardFeature>100 New Users</PricingCardFeature>
          <PricingCardFeature>$10,000 Budget</PricingCardFeature>
          <PricingCardFeature>Retargeting analytics</PricingCardFeature>
        </PricingCardFeatures>
        <Button primary>Choose Plan</Button>
      </PricingCardInfo>
    </PricingCard>
  );
};
