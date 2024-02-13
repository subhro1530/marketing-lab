import React from "react";
import {
  Box,
  Text,
  Heading,
  Image,
  Flex,
  Button,
  Center,
} from "@chakra-ui/react";

const Solution = () => {
  return (
    <Box
      p={{ base: 4, md: 8 }}
      textAlign="center"
      bgImage={{ base: "bg11.png", md: "url('/bg1.png')" }}
      width="100vw"
      overflowX="hidden"
      backgroundSize="cover"
      color="rgba(0, 0, 0, 0.66)"
      height={{ base: "auto", md: "auto" }}
    >
      <Text mt={10} mb={4} fontSize="18px" color="orange">
        Problems? We have Solution
      </Text>
      <Heading
        fontSize={{ base: "xl", md: "3xl" }}
        fontWeight="bold"
        mt={2}
        textTransform="uppercase"
      >
        MOST OF D2C BUSINESS OWNERS FACE
        <Text
          fontSize={{ base: "4xl", md: "5xl" }}
          color="orange"
          fontWeight="500"
          display="block"
          mt={2}
          mb={10}
        >
          {" "}
          ONE OR MORE OF THESE
        </Text>
      </Heading>

      <Flex
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        mt={8}
        gap={20}
        mb={5}
      >
        {/* Solution Images */}
        <Center flexDirection="column">
          <Box m={4}>
            <Image
              borderRadius={20}
              src="/sol1.svg"
              ml={{ base: "10px" }}
              alt="Broken Funnel"
              boxSize={{ base: "150px", md: "250px" }}
            />
            <Text
              fontSize="lg"
              mt={2}
              borderRadius={10}
              px={3}
              py={2}
              fontWeight="bold"
              borderBottom="2px solid orange"
              borderTop="2px solid orange"
              borderLeft="2px solid orange"
              borderRight="2px solid orange"
            >
              NO SCALABILITY
            </Text>
          </Box>
        </Center>

        <Center flexDirection="column">
          <Box m={4}>
            <Image
              borderRadius={20}
              ml={{ base: "10px" }}
              src="/sol2.svg"
              alt="Abandoned Carts"
              boxSize={{ base: "150px", md: "250px" }}
            />
            <Text
              fontSize="lg"
              mt={2}
              borderRadius={10}
              px={3}
              py={2}
              fontWeight="bold"
              borderBottom="2px solid orange"
              borderTop="2px solid orange"
              borderLeft="2px solid orange"
              borderRight="2px solid orange"
            >
              TERRIBLE ROAS
            </Text>
          </Box>
        </Center>

        <Center flexDirection="column">
          <Box m={4}>
            <Image
              ml={{ base: "15px" }}
              borderRadius={20}
              src="/sol3.svg"
              alt="Failing ROAS"
              boxSize={{ base: "150px", md: "250px" }}
            />
            <Text
              fontSize="lg"
              mt={2}
              borderRadius={10}
              px={3}
              py={2}
              fontWeight="bold"
              borderBottom="2px solid orange"
              borderTop="2px solid orange"
              borderLeft="2px solid orange"
              borderRight="2px solid orange"
            >
              NO PROFITABILITY
            </Text>
          </Box>
        </Center>
      </Flex>
      {/* Button */}
    </Box>
  );
};

export default Solution;
