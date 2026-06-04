import PremiumHero from "@/components/PremiumHero";
import WhyChoose from "@/components/WhyChoose";
import FAQSection from "@/components/FAQSection";
import React from "react";
import MortgageSection from "@/components/MortgageSection";
import Readyunlock from "@/components/Readyunlock";
import PremiumHeros from "@/components/PremiumHeros";
import FaqSections from "@/components/FaqSections";

const page = () => {
  return (
    <>
      <PremiumHeros
        slug={`Residential Mortgage`}
        title={`Residential Mortgage`}
        desc={`Whether you’re buying your first home, upgrading, or investing in property, Windsor Premier Mortgage Brokers offers tailored mortgage solutions for UAE residents that simplify the journey from property search to ownership.`}
        btntext={`Get Free Consultation`}
        btntext2={`Check Eligibility`}
        img={`/newvector.webp`}
      />
      <MortgageSection />
      <WhyChoose
        img={`https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop`}
      />
      <FaqSections />
    </>
  );
};

export default page;
