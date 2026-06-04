import DeveloperMortgage from "@/components/DeveloperMortgage";
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
        slug={`Developer-Based Mortgage Solutions`}
        title={`Developer-Based Mortgage Solutions`}
        desc={`Secure your dream property with ease through flexible financing options designed to fit your budget — offered directly by trusted developers. Enjoy a seamless buying experience with affordable installment plans`}
        btntext={`Get Free Consultation`}
        btntext2={`Check Eligibility`}
        img={`/newvector.webp`}
      />
      <MortgageSection />
      <DeveloperMortgage />
      <FaqSections />
    </>
  );
};

export default page;
