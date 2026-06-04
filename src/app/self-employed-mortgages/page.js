import MortgageInfo from "@/components/MortgageInfo";
import MortgageSection from "@/components/MortgageSection";
import PremiumHero from "@/components/PremiumHero";
import Readyunlock from "@/components/Readyunlock";
import FAQSection from "@/components/FAQSection";
import React from "react";
import PremiumHeros from "@/components/PremiumHeros";
import FaqSections from "@/components/FaqSections";

const page = () => {
  return (
    <>
      <PremiumHeros
        slug={`Self Employed Mortgage`}
        title={`Self Employed Mortgage`}
        desc={`At Windsor Premier Mortgage Brokers, we understand the unique financial profile of self-employed individuals in the UAE. Whether you own a business, operate as a freelancer, or are part of a partnership, our self-employed mortgage solutions are designed to provide flexible, competitive financing – even when traditional income documents may not apply.`}
        btntext={`Get Free Consultation`}
        btntext2={`Check Eligibility`}
        img={`/newvector.webp`}
      />
      <MortgageSection />
      <MortgageInfo />
      <FaqSections />
    </>
  );
};

export default page;
