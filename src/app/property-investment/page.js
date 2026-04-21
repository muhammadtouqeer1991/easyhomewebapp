import MortgageInfo from "@/components/MortgageInfo";
import MortgageSection from "@/components/MortgageSection";
import PremiumHero from "@/components/PremiumHero";
import Readyunlock from "@/components/Readyunlock";
import FAQSection from "@/components/FAQSection";
import React from "react";

const page = () => {
  return (
    <>
      <PremiumHero
        slug={`Property Investment`}
        title={`Property Investment in the UAE`}
        desc={`Real estate has long been one of the most reliable and rewarding ways to build lasting wealth. With the right strategy, property investment can generate steady income, appreciate in value over time, and provide a strong`}
        btntext={`Request a Free Consultation`}
        img={`/newvector.webp`}
      />
      <MortgageSection />
      <MortgageInfo />
      <Readyunlock />
      <FAQSection img={"/faqsecond.webp"} />
    </>
  );
};

export default page;
