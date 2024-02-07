// pages/about.js

import React from "react";
import dynamic from "next/dynamic";
const AboutUsHeader = dynamic(() => import("@/components/AboutUsHeader"), {
  ssr: false,
});
const Navbar = dynamic(() => import("@/components/Navbar"), {
  ssr: false,
});
const Statistics = dynamic(() => import("@/components/Statistics"), {
  ssr: false,
});
const OurStory = dynamic(() => import("@/components/OurStory"), {
  ssr: false,
});
const Team = dynamic(() => import("@/components/Team"), {
  ssr: false,
});
const Footer2 = dynamic(() => import("@/components/Footer2"), {
  ssr: false,
});

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
