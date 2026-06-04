import ContactPage from "@/components/ContactPage";
import MortgageSection from "@/components/MortgageSection";
import PremiumHero from "@/components/PremiumHero";
import React from "react";
import MortgageContactSection from "../../components/MortgageContactSection";
import GetInTouchSection from "@/components/GetInTouchSection";
import ContactMortgageSection from "@/components/ContactMortgageSection";
import FaqcontactSection from "@/components/FaqcontactSection";

const page = () => {
  return (
    <>
      <MortgageContactSection />
      <GetInTouchSection />
      <ContactMortgageSection />
      <FaqcontactSection />
      {/* <ContactPage /> */}
    </>
  );
};

export default page;
