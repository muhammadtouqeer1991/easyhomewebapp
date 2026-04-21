import ContentScrollSection from "@/components/ContentScrollSection";
import FAQSection from "@/components/FAQSection";
import Homeintro from "@/components/Homeintro";
import MortgageCalculator from "@/components/MortgageCalculator";
import MortgageSection from "@/components/MortgageSection";
import Readyunlock from "@/components/Readyunlock";
import ServicesSlider from "@/components/ServicesSlider";
import WhyChooseUs from "@/components/WhyChooseUs";
import React from "react";

const page = () => {
  return (
    <>
      <Homeintro />
      <MortgageCalculator />
      <MortgageSection />
      <WhyChooseUs />

      <ContentScrollSection />
      <Readyunlock />
      <ServicesSlider />
      <FAQSection img={"/faqmen.png"} />
    </>
  );
};

export default page;
