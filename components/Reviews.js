import React from "react";
import { Box, Heading, VStack, Text, Image, Center } from "@chakra-ui/react";

const ReviewCard = ({
  imageSrc,
  heading,
  paragraph,
  name,
  designation,
  ...rest
}) => (
  <Box
    bg="orange.100" // translucent orange background
    color="orange.700"
    px={4}
    py={12}
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
    overflow="hidden"
    height={{ base: "auto" }} // constant height
    width={{ base: "90%", md: "30%" }} // constant width
    {...rest}
  >
    <Image
      src={imageSrc}
      alt="Reviewer"
      border="3px solid "
      boxSize="90px"
      borderRadius="full"
    />
    <Heading
      fontSize={{ base: "xl", md: "3xl" }}
      fontWeight="bold"
      mt={2}
      mb={4}
    >
      {heading}
    </Heading>
    <Text fontSize={{ base: "md", md: "lg" }} fontWeight="normal">
      {paragraph}
    </Text>
    <Text
      fontSize={{ base: "sm", md: "md" }}
      fontWeight="bold"
      fontStyle="italic"
      mt={5}
    >
      {name}
      <Text as="span" fontWeight="normal">
        , {designation}
      </Text>
    </Text>
  </Box>
);

const Reviews = () => {
  return (
    <Center>
      <Box
        bgImage={{ base: "url('/bg4.png')", md: "url('/bg4.png')" }} // background image
        bgSize="cover" // cover the entire container
        px={10}
        pb={20}
        pt={40}
        bgPosition="fixed"
        textAlign="center"
        color="rgba(0, 0, 0, 0.8)"
        mt={0} // removed margin top
        maxWidth="100vw"
        height={{ base: "auto", md: "auto" }}
      >
        <VStack spacing={4} align="center">
          <Heading
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="bold"
            pb={0}
          >
            EVERY AGENCY PROMISES THE MOON
            <Text
              fontSize={{ base: "2xl", md: "5xl" }}
              pb={2}
              color="#FFAE34"
              display="inline-block"
            >
              BUT FALLS FLAT IN A COUPLE OF MONTHS
            </Text>
          </Heading>

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
    </Center>
  );
};

export default Reviews;
