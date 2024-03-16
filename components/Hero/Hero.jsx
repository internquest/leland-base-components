import React from "react";
import Landing from "./Landing/Landing";
import LandingBanner from "./Landing/LandingBanner";
import PopularCategories from "./PopularCategories/PopularCategories";
import CoachingServices from "./CoachingServices/CoachingServices";
import GoalSection from "./Goals/GoalSection";

const Hero = () => {
  return (
    <div className="flex w-full flex-col">
      <Landing/>
      <LandingBanner/>
      <PopularCategories/>
      <CoachingServices/>
      <GoalSection/>
    </div>
  );
};

export default Hero;
