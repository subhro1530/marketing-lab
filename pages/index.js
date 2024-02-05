// pages/index.js
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Partners from "@/components/Partners";
import Reviews from "@/components/Reviews";
import Quote from "@/components/Quote";
import Solution from "@/components/Solution";
import Trust from "@/components/Trust";
import Grow from "@/components/Grow";
import Footer from "@/components/Footer";
import Questions from "@/components/Question";
import Services from "@/components/Services";
import Results from "@/components/Results";

const Home = () => {
  return (
    <ChakraProvider>
      <Navbar />
      <HeroSection />
      <Partners />
      <Reviews />
      <Quote />
      <Solution />
      <Questions />
      <Trust />
      <Services />
      <Results />
      <Grow />
      <Footer />
      {/* Add other components or sections here as needed */}
    </ChakraProvider>
  );
};

export default Home;
