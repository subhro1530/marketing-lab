import React from "react";
import { Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";

const Statistics = () => {
  return (
    <Box
      // py={12}
      height="auto"
      textAlign="center"
      fontFamily="monteserrat,sans-serif"
      position="relative" // Ensure relative positioning for child elements
    >
      {/* Dark background image */}
      <Box
        position="fixed"
        top="90"
        left="0"
        width="100vw"
        overflowX="hidden"
        height="100%"
        zIndex="-1"
        backgroundImage="url('bg001.png')" // Replace 'dark-bg.jpg' with your image path
        backgroundSize="cover"
        backgroundPosition="center"
        opacity="0.8"
      />

      {/* Content */}
      <Box
        bg="rgba(0,0,20,.5)"
        height="auto"
        py="150px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading mb={8} fontSize={{ base: "3xl", md: "5xl" }} color="orange">
          Statistics
        </Heading>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 4 }}
          spacing={8}
          mx="auto"
          maxW="1000px"
        >
          <StatCard
            title="Clients Served"
            fontWeight={200}
            value="247"
            colorScheme="blue"
          />
          <StatCard
            title="Average ROAS"
            fontWeight={200}
            value="3.23x"
            colorScheme="green"
          />
          <StatCard
            title="Revenue Generated"
            value="43.2 cr"
            colorScheme="purple"
          />
          <StatCard
            title="Shark Tank Brands"
            fontWeight={200}
            value="12"
            colorScheme="teal"
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
};

const StatCard = ({ title, value, colorScheme }) => {
  return (
    <Box
      p={4}
      bg="rgb(255,255,255,0.9)"
      transition="0.2s ease-in-out"
      cursor="pointer"
      _hover={{ bg: "rgb(255,255,255,1)" }}
      borderRadius="md"
      boxShadow="md"
      borderWidth="1px"
      borderColor="gray.200"
    >
      <Text fontSize="lg" fontWeight="bold" mb={2}>
        {title}
      </Text>
      <Text fontSize="5xl" color={`${colorScheme}.500`} fontWeight="bold">
        {value}
      </Text>
    </Box>
  );
};

export default Statistics;
