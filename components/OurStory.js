import React from "react";
import { Box, Heading, Text, useBreakpointValue } from "@chakra-ui/react";

const OurStory = () => {
  const fontSize = useBreakpointValue({ base: "md", md: "xl" });

  return (
    <Box bg="#fea022" color="white" py={12} px={4}>
      <Box maxW="800px" mx="auto" textAlign="center">
        <Heading mb={8} fontSize={{ base: "3xl", md: "5xl" }} fontWeight="">
          Our Story
        </Heading>
        <Text fontSize={fontSize} mb={8}>
          Based in vibrant Bangalore 🌆 and Kolkata 🏙, our dynamic team thrives
          on urban energy and diversity, shaping creative strategies inspired by
          these pulsating cities. With experience as our guiding star ⭐,
          we&apos;re dedicated to delivering authentic value and real results.
          Our approach? Fluff-Free Digital Marketing - cutting through noise
          with clear, impactful strategies. Are you a business owner seeking
          growth through advertising? Join us on a success-driven journey.
        </Text>
        <Text fontSize={fontSize}>
          We&apos;re here to elevate your digital presence. Creativity 🎨,
          innovation 💡, and strategic prowess fuel our mission to propel your
          brand. No matter your location, whether the tech hub of Bangalore or
          cultural core of Kolkata, we&apos;re equipped to drive your marketing
          goals. Every decision we make is anchored in measurable outcomes 📊,
          ensuring your success. Ready to invest in growth? Let&apos;s embark on
          a digital marketing adventure together! 🚀💼🌟
        </Text>
      </Box>
    </Box>
  );
};

export default OurStory;
