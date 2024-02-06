// pages/about.js

import React from "react";
import AboutUsHeader from "../components/AboutUsHeader";
import OurStory from "../components/OurStory";
import Statistics from "../components/Statistics";
import Team from "../components/Team";
import Navbar from "@/components/Navbar";
import Footer2 from "@/components/Footer2";

const About = () => {
  return (
    <>
      <Navbar />
      <AboutUsHeader />
      <OurStory />
      <Statistics />
      <Team />
      <Footer2 />
    </>
  );
};

export default About;
