import React from "react";
import HeroSections from "../components/sections/HeroSections";
import WelcomeSections from "../components/sections/WelcomeSections";

const Home = () => {
  return(
    <main className="home-page">
      <HeroSections />
      <WelcomeSections />
    </main>
  )
};

export default Home;
