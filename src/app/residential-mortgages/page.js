import PremiumHero from "@/components/PremiumHero";
import WhyChoose from "@/components/WhyChoose";
import FAQSection from "@/components/FAQSection";
import React from "react";
import MortgageSection from "@/components/MortgageSection";
import MortgageCalculator from "@/components/MortgageCalculator";
import Readyunlock from "@/components/Readyunlock";

const page = () => {
  return (
    <>
      <PremiumHero
        slug={`Residential Mortgage`}
        title={`Resident Mortgage`}
        desc={`Whether you’re buying your first home, upgrading, or investing in property, Windsor Premier Mortgage Brokers offers tailored mortgage solutions for UAE residents that simplify the journey from property search to ownership.`}
        btntext={`Request a Free Consultation`}
        img={`/mortageresiden.webp`}
      />
      <MortgageSection />
      <WhyChoose />
      <Readyunlock />
      <FAQSection img={"/faqsecond.webp"} />
    </>
  );
};

export default page;
