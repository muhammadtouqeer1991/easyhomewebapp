import MortgageInfo from "@/components/MortgageInfo";
import MortgageSection from "@/components/MortgageSection";
import PremiumHero from "@/components/PremiumHero";
import Readyunlock from "@/components/Readyunlock";
import FAQSection from "@/components/FAQSection";
import React from "react";
import PremiumHeros from "@/components/PremiumHeros";
import FaqSections from "@/components/FaqSections";
import Equalityreleaseinfo from "@/components/Equalityreleaseinfo";

const page = () => {
  return (
    <>
      <PremiumHeros
        slug={`Equity Release`}
        title={`Equity Release Mortgage Solutions`}
        desc={`Your property is more than just a place to live — it’s a powerful financial asset. Over time, as property values increase and your mortgage balance decreases, you build equity. This equity can be used to your advantage`}
        btntext={`Request a Free Consultation`}
        btntext2={`Check Eligibility`}
        img={`/newvector.webp`}
      />
      <MortgageSection />
      <Equalityreleaseinfo />
      <FaqSections />
    </>
  );
};

export default page;
