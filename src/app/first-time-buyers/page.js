import Firstimebuypageinfo from "@/components/Firstimebuypageinfo";
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
        slug={`First-Time Buyer Mortgage`}
        title={`First-Time Buyer Mortgage Solutions`}
        desc={`Your First Home Starts Here — Let’s Make It Happen with Confidence, Comfort, and Complete Peace of Mind, Guiding You Every Step of the Way Toward Owning the Perfect Place You Can Truly Call Home.`}
        btntext={`Get Free Consultation`}
        btntext2={`Check Eligibility`}
        img={`/newvector.webp`}
      />
      <MortgageSection />
      <Firstimebuypageinfo />
      <FaqSections />
    </>
  );
};

export default page;
