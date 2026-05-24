import ContentScrollSection from "@/components/ContentScrollSection";
import FAQSection from "@/components/FAQSection";
import FaqSections from "@/components/FaqSections";
import HeroSection from "@/components/HeroSection";
import Homeintro from "@/components/Homeintro";
import MortgageCalculator from "@/components/MortgageCalculator";
import MortgageCalculators from "@/components/MortgageCalculators";
import MortgageJourney from "@/components/MortgageJourney";
import MortgageSection from "@/components/MortgageSection";
import MortgageServices from "@/components/MortgageServices";
import MortgageSolutions from "@/components/MortgageSolutions";
import PremiumHero from "@/components/PremiumHero";
import PremiumHeros from "@/components/PremiumHeros";
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
      <PremiumHeros
        slug={`About Us`}
        title={`Mortgage Services Designed Around Your Needs`}
        desc={`From first-time homebuyers to investors and business owners — we help you find the right mortgage solutions in Dubai with expert guidance and faster approvals.`}
        btntext={`Get Free Consultation`}
        btntext2={`Check Eligibility`}
        img={`/newvector.webp`}
      />
      <MortgageServices />
      <WhyEasyHome />
      <MortgageJourney />
      <TrustedHomebuyersSection />
      <FaqSections />
    </>
  );
};

export default page;
