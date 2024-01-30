// components/Partners.js

import React, { useState, useEffect } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import ImageSlider from "./ImageSlider"; // Correct import path

const Partners = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Generate an array of image paths based on the provided naming convention
  const partnerImages = Array.from(
    { length: 11 },
    (_, index) => `1-${index + 1}.png`
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % partnerImages.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [activeIndex, partnerImages.length]);

  return (
    <Box bg="gray.100" p={8}>
      <Heading fontSize="xl" color="gray.800" mb={4}>
        GROWTH PARTNERS TO SOME OF TOP D2C BRANDS IN INDIA
        <Text fontSize="sm" color="gray.500">
          INCLUDING 12 SHARK TANK BRANDS
        </Text>
      </Heading>

      <ImageSlider images={partnerImages} activeIndex={activeIndex} />

      <Box textAlign="center" mt={4}>
        {partnerImages.map((_, index) => (
          <Box
            key={index}
            as="span"
            display="inline-block"
            mx={1}
            w="4"
            h="4"
            borderRadius="full"
            bg={index === activeIndex ? "blue.500" : "gray.300"}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Partners;
