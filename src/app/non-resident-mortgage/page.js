import MortgageSection from "@/components/MortgageSection";
import PremiumHero from "@/components/PremiumHero";
import Readyunlock from "@/components/Readyunlock";
import UaeProperty from "@/components/UaeProperty";
import FAQSection from "@/components/FAQSection";
import React from "react";

const page = () => {
  return (
    <>
      <PremiumHero
        slug={`Non-Resident Mortgage`}
        title={`Non-Resident Mortgage in the UAE`}
        desc={`Invest in UAE Real Estate—From Anywhere in the World`}
        btntext={`Request a Free Consultation`}
        img={`/nonmortgage.webp`}
      />
      <MortgageSection />
      <UaeProperty />
      <Readyunlock />
      <FAQSection img={"/faqsecond.webp"} />
    </>
  );
};

export default page;
