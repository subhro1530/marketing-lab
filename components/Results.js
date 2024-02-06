import React from "react";
import { Box, Heading, Text, Button, VStack, Image } from "@chakra-ui/react";

const Results = () => {
  const sectionStyle = {
    background: "linear-gradient(45deg, #FFAE34, #FFF)",
  };

  return (
    <Box id="results" py={16} px={5} textAlign="center" style={sectionStyle}>
      <Heading
        fontSize={{ base: "4xl", md: "5xl" }}
        fontWeight=""
        color="#FFAE34"
      >
        Take a Look at How Our Result-Driven Approach Has Helped Our Clients
        Grow
      </Heading>
      <VStack spacing={8} mt={8}>
        <ResultCard
          image="cs1.png"
          heading="From Baby Steps to Giant Leaps: How Rosada Baby Rocked the Revenue Charts"
          description="Rosada is a brand engaged in designing, manufacturing and selling Personalised gifts."
        />
        <ResultCard
          image="cs2.png"
          heading="Dorje Achieves 103% Surge in Sessions, and 85% Return Customer Rate"
          description="We left our jobs to revive our family’s heritage Selim Hill Tea."
        />
        <ResultCard
          image="cs3.png"
          heading="Driving 12x Increased Revenue and An 342% Improved ROAS Within 4 Months"
          description="Indulgent. Luxurious. Organic – AULI isn’t just about the products that pamper."
        />
      </VStack>
    </Box>
  );
};

const ResultCard = ({ image, heading, description }) => (
  <Box
    bg="white"
    p={8}
    borderRadius="md"
    boxShadow="0px 4px 20px rgba(0, 0, 0, 0.1)"
    w={{ base: "90%", md: "80%", lg: "60%" }}
    transition="transform 0.3s ease-in-out"
    _hover={{
      transform: "scale(1.05)",
    }}
  >
    <Image
      height={400}
      width={400}
      src={image}
      alt="Result Image"
      style={{ width: "100%", borderRadius: "8px", marginBottom: "16px" }}
    />
    <Heading fontSize="2xl" fontWeight="" mb={4} color="#FFAE34">
      {heading}
    </Heading>
    <Text fontSize="lg" color="#333333">
      {description}
    </Text>
    <Button
      colorScheme="orange"
      size="md"
      mt={6}
      onClick={() => {
        // Handle button click
      }}
    >
      Learn More
    </Button>
  </Box>
);

export default Results;
