import React from "react";
import HeroSections from "../components/sections/HeroSections";
import WelcomeSections from "../components/sections/WelcomeSections";
import Testimonials from "../components/sections/Testimonials";
import HowItWorks from "../components/sections/HowitWork";
import ServicesSlider from "../components/sections/ServiceSlider";
import FreeInstallation from "../components/sections/FreeInstallation";
import SolarBenefits from "../components/sections/SolarBenefits";

const Home = () => {
  return(
    <main className="home-page">
      <HeroSections />
      <WelcomeSections />
      <ServicesSlider />
      <HowItWorks />
      <FreeInstallation />
      <SolarBenefits/>
      <Testimonials />
    </main>
  )
};

export default Home;
