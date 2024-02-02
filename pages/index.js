// pages/index.js
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Partners from "@/components/Partners";
import Reviews from "@/components/Reviews";
import Quote from "@/components/Quote";
import Solution from "@/components/Solution";
import Trust from "@/components/Trust";

const Home = () => {
  return (
    <ChakraProvider>
      <Navbar />
      <HeroSection />
      <Partners />
      <Reviews />
      <Quote />
      <Solution />
      <Trust />
      {/* Add other components or sections here as needed */}
    </ChakraProvider>
  );
};

export default Home;
