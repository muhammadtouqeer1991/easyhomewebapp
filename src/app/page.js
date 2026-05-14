import ContentScrollSection from "@/components/ContentScrollSection";
import FAQSection from "@/components/FAQSection";
import FaqSections from "@/components/FaqSections";
import HeroSection from "@/components/HeroSection";
import Homeintro from "@/components/Homeintro";
import MortgageCalculator from "@/components/MortgageCalculator";
import MortgageCalculators from "@/components/MortgageCalculators";
import MortgageJourney from "@/components/MortgageJourney";
import MortgageSection from "@/components/MortgageSection";
import MortgageSolutions from "@/components/MortgageSolutions";
import Readyunlock from "@/components/Readyunlock";
import ServicesSlider from "@/components/ServicesSlider";
import TrustedHomebuyersSection from "@/components/TrustedHomebuyersSection";
import WhoWeHelp from "@/components/WhoWeHelp";
import WhyChooseUs from "@/components/WhyChooseUs";
import WhyEasyHome from "@/components/WhyEasyHome";
import React from "react";

const page = () => {
  return (
    <>
      <HeroSection />
      {/* <Homeintro /> */}
      {/* <MortgageCalculator /> */}
      <MortgageSection />
      <MortgageCalculators />
      <MortgageSolutions />
      <MortgageJourney />
      <WhyEasyHome />
      <WhoWeHelp />
      <TrustedHomebuyersSection />
      <FaqSections />

      {/* <WhyChooseUs /> */}
      {/* <ContentScrollSection /> */}
      {/* <Readyunlock /> */}
      {/* <ServicesSlider /> */}
      {/* <FAQSection img={"/faqmen.png"} /> */}
    </>
  );
};

export default page;
