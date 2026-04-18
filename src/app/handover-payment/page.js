import MortgageSection from "@/components/MortgageSection";
import PremiumHero from "@/components/PremiumHero";
import PropertyFinanceSection from "@/components/PropertyFinanceSection";
import Readyunlock from "@/components/Readyunlock";
import Whychoosehandover from "@/components/Whychoosehandover";
import FAQSection from "@/components/FAQSection";
import React from "react";

const page = () => {
  return (
    <>
      <PremiumHero
        slug={`Handover payment`}
        title={`Handover payment`}
        desc={`Secure Financing for Your Final Property Payment with Ease and Confidence, Offering Flexible Plans, Hassle-Free Approval, and Direct Support`}
        btntext={`Request a Free Consultation`}
        img={`/payhereImg.webp`}
      />
      <MortgageSection />
      <PropertyFinanceSection />
      <Whychoosehandover />
      <Readyunlock />
      <FAQSection img={"/faqsecond.webp"} />
    </>
  );
};

export default page;
