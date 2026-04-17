import DeveloperMortgage from "@/components/DeveloperMortgage";
import MortgageSection from "@/components/MortgageSection";
import PremiumHero from "@/components/PremiumHero";
import Readyunlock from "@/components/Readyunlock";
import FAQSection from "@/components/FAQSection";
import React from "react";

const page = () => {
  return (
    <>
      <PremiumHero
        slug={`Self Employed Mortgage`}
        title={`Developer-Based Mortgage Solutions`}
        desc={`Secure your dream property with ease through flexible financing options designed to fit your budget — offered directly by trusted developers. Enjoy a seamless buying experience with affordable installment plans`}
        btntext={`Request a Free Consultation`}
        img={`/developernewvector.webp`}
      />
      <MortgageSection />
      <DeveloperMortgage />
      <Readyunlock />
      <FAQSection img={"/faqsecond.webp"} />
    </>
  );
};

export default page;
