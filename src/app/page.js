import FaqSections from "@/components/FaqSections";
import HeroSection from "@/components/HeroSection";
import MortgageCalculators from "@/components/MortgageCalculators";
import MortgageJourney from "@/components/MortgageJourney";
import MortgageSection from "@/components/MortgageSection";
import MortgageSolutions from "@/components/MortgageSolutions";
import TrustedHomebuyersSection from "@/components/TrustedHomebuyersSection";
import WhoWeHelp from "@/components/WhoWeHelp";
import WhyEasyHome from "@/components/WhyEasyHome";
import React from "react";

const page = () => {
  return (
    <>
      <HeroSection />
      <MortgageSection />
      <MortgageCalculators />
      <MortgageSolutions />
      <MortgageJourney />
      <WhyEasyHome />
      <WhoWeHelp />
      <TrustedHomebuyersSection />
      <FaqSections />
    </>
  );
};

export default page;
