import React from "react";
import HeroSections from "../components/sections/HeroSections";
import WelcomeSections from "../components/sections/WelcomeSections";
import Testimonials from "../components/sections/Testimonials";
import HowItWorks from "../components/sections/HowitWork";
import ServicesSlider from "../components/sections/ServiceSlider";
import FreeInstallation from "../components/sections/FreeInstallation";
import SolarBenefits from "../components/sections/SolarBenefits";
import Contact from "../components/sections/Contact";
import Wychoose from "../components/sections/WhyChoose";

const Home = () => {
  return(
    <main className="home-page">
      <HeroSections />
      <WelcomeSections />
      <ServicesSlider />
      <HowItWorks />
      <FreeInstallation />
      <SolarBenefits/>
      <Wychoose />
      <Testimonials />
      <Contact/>
    </main>
  )
};

export default Home;
