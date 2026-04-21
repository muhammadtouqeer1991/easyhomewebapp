import AffiliateAuth from "@/components/AffiliateAuth";
import MortgageSection from "@/components/MortgageSection";
import PremiumHero from "@/components/PremiumHero";
import React from "react";

const page = () => {
  return (
    <>
      <PremiumHero
        slug={`Broker Affiliate`}
        title={`Broker Affiliate`}
        desc={`earning potential by connecting clients with trusted mortgage and property financing solutions. Whether you are an independent broker, real estate consultant, or financial advisor, this program gives you the opportunity`}
        btntext={`Request a Free Consultation`}
        img={`/newvector.webp`}
      />
      <MortgageSection />
      <AffiliateAuth />
    </>
  );
};

export default page;
