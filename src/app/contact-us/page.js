import ContactPage from "@/components/ContactPage";
import MortgageSection from "@/components/MortgageSection";
import PremiumHero from "@/components/PremiumHero";
import React from "react";

const page = () => {
  return (
    <>
      <PremiumHero
        slug={`Contact Us`}
        title={`Contact Us`}
        desc={`Navigating the mortgage landscape in the UAE can feel complex, but with the right partner by your side, it becomes a seamless and rewarding experience. As your trusted mortgage partner, we are committed`}
        btntext={`Request a Free Consultation`}
        img={`/newvector.webp`}
      />
      <MortgageSection />
      <ContactPage />
    </>
  );
};

export default page;
