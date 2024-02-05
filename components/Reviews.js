// reviews.js

import React from "react";
import { Box, Heading, VStack, Text, HStack, Image } from "@chakra-ui/react";

const ReviewCard = ({ imageSrc, heading, paragraph, name, designation }) => (
  <Box
    bg="gray.200"
    color="rgba(80, 0, 0, 0.8)"
    bgColor="orange.100"
    p="3% 4%"
    borderRadius="md"
    textAlign="center"
    display="flex"
    justifyContent="center"
    flexDirection="column"
    alignItems="center"
    transition="0.5s ease-in-out transform"
    _hover={{ transform: "scale(1.1)" }}
    mt={4}
    mx={5}
    w={{ base: "82vw", md: "100vw" }}
    overflow="hidden"
  >
    <Image
      src={imageSrc}
      alt="Reviewer"
      border="5px solid rgba(100,50,0,0.9)"
      boxSize="90px"
      borderRadius="full"
    />
    <Heading fontSize="3xl" fontWeight="bold" mt={2} mb={4}>
      {heading}
    </Heading>
    <Text fontSize="md" fontWeight="normal">
      {paragraph}
    </Text>
    <Text fontSize="sm" fontWeight="bold" fontStyle="italic" mt={5}>
      {name}
      <Text as="span" fontWeight="normal">
        , {designation}
      </Text>
    </Text>
  </Box>
);

const Reviews = () => {
  return (
    <Box
      bg="white"
      p={{ base: 4, md: 8 }}
      textAlign="center"
      color="rgba(0, 0, 0, 0.8)"
      mt={8}
    >
      <VStack spacing={4} align="center">
        <Heading fontSize={{ base: "xl", md: "3xl" }} fontWeight="bold" pb={0}>
          EVERY AGENCY PROMISES THE MOON
        </Heading>
        <Text
          fontSize={{ base: "2xl", md: "5xl" }}
          mt={-4}
          pb={2}
          color="#FFAE34"
          display="inline-block"
        >
          BUT FALLS FLAT IN A COUPLE OF MONTHS
        </Text>
        <Text>
          Here&apos;s How MarketingLab Is Different In Our Clients&apos; Words
        </Text>

        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          align="center"
          mt={8}
          w="100%"
        >
          {/* Review Cards */}
          <ReviewCard
            imageSrc="/person1.png"
            heading="Treating brands as long term partners instead of clients"
            paragraph="This is very important. Most agencies would say-- 'This is what YOU need to do.' From Day 1, Marketing Lab told us-- 'Ok guys, this is what WE are going to do.' This matters."
            name="Sparsh Agarwal"
            designation="DORJE TEAS"
          />
          <ReviewCard
            imageSrc="/person2.png"
            heading="Great sales that he has generated for our company"
            paragraph="I was astonished to see great sales that he has generated for our company, as compared to other marketing agencies I've worked in the past. I'd recommend him to anyone, for his skills and resources!"
            name="Vaibhav Kothari"
            designation="OMVAI"
          />
          <ReviewCard
            imageSrc="/person3.png"
            heading="Extremely result-oriented and focused"
            paragraph="MarketingLab is extremely result-oriented and focused on driving real business outcomes. And it started showing from the very first day. I have struggled so much with getting the perfect partner that I was almost immediately impressed."
            name="Aishwarya"
            designation="AULI LIFESTYLE"
          />
        </Box>
      </VStack>
    </Box>
  );
};

export default Reviews;
