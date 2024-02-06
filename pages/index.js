// pages/index.js
import { ChakraProvider } from "@chakra-ui/react";
const Navbar = dynamic(() => import("@/components/Navbar"), {
  ssr: false,
});
const HeroSection = dynamic(() => import("@/components/HeroSection"), {
  ssr: false,
});
const Partners = dynamic(() => import("@/components/Partners"), {
  ssr: false,
});
const Reviews = dynamic(() => import("@/components/Reviews"), {
  ssr: false,
});
const Quote = dynamic(() => import("@/components/Quote"), {
  ssr: false,
});
const Solution = dynamic(() => import("@/components/Trust"), {
  ssr: false,
});
const Trust = dynamic(() => import("@/components/Solution"), {
  ssr: false,
});
const Grow = dynamic(() => import("@/components/Grow"), {
  ssr: false,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
});
const Questions = dynamic(() => import("@/components/Questions"), {
  ssr: false,
});
const Services = dynamic(() => import("@/components/Services"), {
  ssr: false,
});
const Results = dynamic(() => import("@/components/Results"), {
  ssr: false,
});

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
