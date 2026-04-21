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
        slug={`Mortgage Buyout`}
        title={`Mortgage Buyout Solutions`}
        desc={`Refinancing your mortgage isn’t just about changing your loan — it’s about improving your financial future. Whether you’re looking to reduce your monthly payments, secure a better interest rate, or gain more flexibility`}
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
