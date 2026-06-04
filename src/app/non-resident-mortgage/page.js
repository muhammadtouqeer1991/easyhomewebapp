import MortgageSection from "@/components/MortgageSection";
import PremiumHero from "@/components/PremiumHero";
import Readyunlock from "@/components/Readyunlock";
import UaeProperty from "@/components/UaeProperty";
import FAQSection from "@/components/FAQSection";
import React from "react";
import PremiumHeros from "@/components/PremiumHeros";
import FaqSections from "@/components/FaqSections";

const page = () => {
  return (
    <>
      <PremiumHeros
        slug={`Non-Resident Mortgage`}
        title={`Non-Resident Mortgage in the UAE`}
        desc={`Invest in UAE Real Estate—From Anywhere in the World`}
        btntext={`Get Free Consultation`}
        btntext2={`Check Eligibility`}
        img={`/newvector.webp`}
      />
      <MortgageSection />
      <UaeProperty />
      <FaqSections />
    </>
  );
};

export default page;
