// pages/index.js
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Partners from "@/components/Partners";
import Reviews from "@/components/Reviews";

const Home = () => {
  return (
    <ChakraProvider>
      <Navbar />
      <HeroSection />
      <Partners />
      <Reviews/>
      {/* Add other components or sections here as needed */}
    </ChakraProvider>
  );
};

export default Home;
