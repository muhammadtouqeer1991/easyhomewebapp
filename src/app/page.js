import CreativeContact from "@/components/CreativeContact";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Homeintro from "@/components/Homeintro";
import MortgageCalculator from "@/components/MortgageCalculator";
import MortgageSection from "@/components/MortgageSection";
import OurTeam from "@/components/OurTeam";
import Readyunlock from "@/components/Readyunlock";
import ServicesSlider from "@/components/ServicesSlider";
import TeamSlider from "@/components/TeamSlider";
import WhyChooseUs from "@/components/WhyChooseUs";
import React from "react";

const page = () => {
  return (
    <>
      <Homeintro />
      <MortgageCalculator />
      <MortgageSection />
      <WhyChooseUs />
      <Readyunlock />
      <ServicesSlider />
      <FAQSection img={"/faqmen.png"} />
    </>
  );
};

export default page;
