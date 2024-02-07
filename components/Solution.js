// solution.js

import React from "react";
import { Box, Text, Heading, Image, Flex } from "@chakra-ui/react";

const Solution = () => {
  return (
    <Box
      p={{ base: 4, md: 8 }}
      textAlign="center"
      bgImage="url('bg1.png')"
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
        <Box m={4}>
          <Image src="/sol1.svg" alt="Broken Funnel" boxSize="250px" />
          <Text
            fontSize="lg"
            mt={2}
            fontWeight="bold"
            borderBottom="2px solid orange"
            borderTop="2px solid orange"
            borderLeft="2px solid orange"
            borderRight="2px solid orange"
          >
            BROKEN FUNNEL
          </Text>
        </Box>
        <Box m={4}>
          <Image src="/sol2.svg" alt="Abandoned Carts" boxSize="250px" />
          <Text
            fontSize="lg"
            mt={2}
            fontWeight="bold"
            borderBottom="2px solid orange"
            borderTop="2px solid orange"
            borderLeft="2px solid orange"
            borderRight="2px solid orange"
          >
            ABANDONED CARTS
          </Text>
        </Box>
        <Box m={4}>
          <Image src="/sol3.svg" alt="Failing ROAS" boxSize="250px" />
          <Text
            fontSize="lg"
            mt={2}
            fontWeight="bold"
            borderBottom="2px solid orange"
            borderTop="2px solid orange"
            borderLeft="2px solid orange"
            borderRight="2px solid orange"
          >
            FAILING ROAS
          </Text>
        </Box>
        <Box m={4}>
          <Image
            src="/sol4.svg"
            alt="Too Dependent on Credit"
            boxSize="250px"
          />
          <Text
            fontSize="lg"
            mt={2}
            fontWeight="bold"
            borderBottom="2px solid orange"
            borderTop="2px solid orange"
            borderLeft="2px solid orange"
            borderRight="2px solid orange"
          >
            TOO DEPENDENT ON CRED
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Solution;
