import DeveloperMortgageAbout from "@/components/DeveloperMortgageAbout";
import MortgageSection from "@/components/MortgageSection";
import OurTeam from "@/components/OurTeam";
import PremiumHero from "@/components/PremiumHero";
import TeamSlider from "@/components/TeamSlider";
import UaePropertyAbout from "@/components/UaePropertyAbout";
import WhychoosehandoverAbout from "@/components/WhychoosehandoverAbout";
import React from "react";

const page = () => {
  return (
    <>
      <PremiumHero
        slug={`About Us`}
        title={`About Us`}
        desc={`Navigating the mortgage landscape in the UAE can feel complex, but with the right partner by your side, it becomes a seamless and rewarding experience. As your trusted mortgage partner, we are committed`}
        btntext={`Request a Free Consultation`}
        img={`/newvector.webp`}
      />
      <MortgageSection />
      <DeveloperMortgageAbout />
      <UaePropertyAbout />
      <WhychoosehandoverAbout />
      <TeamSlider />
    </>
  );
};

export default page;
