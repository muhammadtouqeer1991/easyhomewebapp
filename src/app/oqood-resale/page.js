import MortgageSection from "@/components/MortgageSection";
import PremiumHero from "@/components/PremiumHero";
import Readyunlock from "@/components/Readyunlock";
import FAQSection from "@/components/FAQSection";
import React from "react";
import Oopmortgageinfo from "@/components/Oopmortgageinfo";

const page = () => {
  return (
    <>
      <PremiumHero
        slug={`Oqood Resale Mortgage`}
        title={`Oqood Resale Mortgage Solutions`}
        desc={`At Windsor Premier Mortgage Brokers, we understand the unique financial profile of self-employed individuals in the UAE. Whether you own a business, operate as a freelancer, or are part of a partnership, our self-employed mortgage solutions are designed to provide flexible, competitive financing – even when traditional income documents may not apply.`}
        btntext={`Request a Free Consultation`}
        img={`/newvector.webp`}
      />
      <MortgageSection />
      <Oopmortgageinfo />
      <Readyunlock />
      <FAQSection img={"/faqsecond.webp"} />
    </>
  );
};

export default page;
