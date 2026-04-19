import Firstimebuypageinfo from "@/components/Firstimebuypageinfo";
import MortgageSection from "@/components/MortgageSection";
import PremiumHero from "@/components/PremiumHero";
import Readyunlock from "@/components/Readyunlock";
import FAQSection from "@/components/FAQSection";
import React from "react";

const page = () => {
  return (
    <>
      <PremiumHero
        slug={`First-Time Buyer Mortgage`}
        title={`First-Time Buyer Mortgage Solutions`}
        desc={`Your First Home Starts Here — Let’s Make It Happen with Confidence, Comfort, and Complete Peace of Mind, Guiding You Every Step of the Way Toward Owning the Perfect Place You Can Truly Call Home.`}
        btntext={`Request a Free Consultation`}
        img={`/firstimenewvector.webp`}
      />
      <MortgageSection />
      <Firstimebuypageinfo />
      <Readyunlock />
      <FAQSection img={"/faqsecond.webp"} />
    </>
  );
};

export default page;
