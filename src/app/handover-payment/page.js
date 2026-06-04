import MortgageSection from "@/components/MortgageSection";
import PremiumHero from "@/components/PremiumHero";
import PropertyFinanceSection from "@/components/PropertyFinanceSection";
import Readyunlock from "@/components/Readyunlock";
import Whychoosehandover from "@/components/Whychoosehandover";
import FAQSection from "@/components/FAQSection";
import React from "react";
import FaqSections from "@/components/FaqSections";
import PremiumHeros from "@/components/PremiumHeros";

const page = () => {
  return (
    <>
      <PremiumHeros
        slug={`Handover payment`}
        title={`Handover payment`}
        desc={`Secure Financing for Your Final Property Payment with Ease and Confidence, Offering Flexible Plans, Hassle-Free Approval, and Direct Support`}
        btntext={`Get Free Consultation`}
        btntext2={`Check Eligibility`}
        img={`/newvector.webp`}
      />
      <MortgageSection />
      <PropertyFinanceSection />
      <Whychoosehandover />
      <FaqSections />
    </>
  );
};

export default page;
