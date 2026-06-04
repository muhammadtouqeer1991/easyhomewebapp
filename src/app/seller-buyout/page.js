import MortgageInfo from "@/components/MortgageInfo";
import MortgageSection from "@/components/MortgageSection";
import PremiumHero from "@/components/PremiumHero";
import Readyunlock from "@/components/Readyunlock";
import FAQSection from "@/components/FAQSection";
import React from "react";
import FaqSections from "@/components/FaqSections";
import PremiumHeros from "@/components/PremiumHeros";

const page = () => {
  return (
    <>
      <PremiumHeros
        slug={`Seller Buyout`}
        title={`Seller Buyout`}
        desc={`Stepping into property ownership or taking over an existing property doesn’t have to be complicated or overwhelming. With the right financing solution, the process becomes smoother, more flexible, and tailored to your unique financial situation. Instead of trying to fit into rigid loan structures`}
        btntext={`Request a Free Consultation`}
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
