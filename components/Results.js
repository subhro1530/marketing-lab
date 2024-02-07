import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";

const Results = () => {
  const sectionStyle = {
    background:
      "radial-gradient(circle, rgba(255, 206, 34, 0.5) 0%, rgba(255, 255, 255, 1) 100%)",
  };

  return (
    <Box id="results" py={16} px={5} textAlign="center" style={sectionStyle}>
      <Heading
        fontSize={{ base: "4xl", md: "5xl" }}
        fontWeight=""
        color="gray.700"
        mb={8}
      >
        Take a Look at How Our Result-Driven Approach Has Helped Our Clients
        Grow
      </Heading>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap={8}
        justifyContent="center"
      >
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
      </Grid>
    </Box>
  );
};

const ResultCard = ({ image, heading, description }) => (
  <Box
    bg="white"
    p={8}
    borderRadius="md"
    boxShadow="0px 4px 20px rgba(0, 0, 0, 0.1)"
    transition="transform 0.3s ease-in-out"
    _hover={{
      transform: "scale(1.05)",
    }}
  >
    <Image src={image} alt="Result Image" borderRadius="8px" mb={4} />
    <Heading fontSize="xl" fontWeight="" mb={4} color="#FFAE34">
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
