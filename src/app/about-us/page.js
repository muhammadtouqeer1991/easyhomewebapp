import DeveloperMortgageAbout from "@/components/DeveloperMortgageAbout";
import FaqSections from "@/components/FaqSections";
import MortgageJourney from "@/components/MortgageJourney";
import MortgageSection from "@/components/MortgageSection";
import OurTeam from "@/components/OurTeam";
import PremiumHero from "@/components/PremiumHero";
import PremiumHeros from "@/components/PremiumHeros";
import TeamSlider from "@/components/TeamSlider";
import TrustedHomebuyersSection from "@/components/TrustedHomebuyersSection";
import UaePropertyAbout from "@/components/UaePropertyAbout";
import WhoWeHelp from "@/components/WhoWeHelp";
import WhychoosehandoverAbout from "@/components/WhychoosehandoverAbout";
import WhychoosehandoverAbout2 from "@/components/WhychoosehandoverAbout2";
import WhyEasyHome from "@/components/WhyEasyHome";
import React from "react";

const page = () => {
  return (
    <>
      <PremiumHeros
        slug={`About Us`}
        title={`Helping You Find the Right Mortgage in Dubai`}
        desc={`Simple, transparent, and stress-free mortgage solutions for homebuyers, expats, and investors across the UAE.`}
        btntext={`Get Free Consultation`}
        btntext2={`Check Eligibility`}
        img={`/newvector.webp`}
      />
      <WhychoosehandoverAbout2 />
      <MortgageSection />
      <WhyEasyHome />
      <WhoWeHelp />
      <TrustedHomebuyersSection />
      <FaqSections />
    </>
  );
};

export default page;
