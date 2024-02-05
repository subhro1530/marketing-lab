// grow.js

import React from "react";
import { Box, Text, Heading, Image, Flex } from "@chakra-ui/react";

const Grow = () => {
  return (
    <Box
      p={{ base: 4, md: 8 }}
      textAlign="center"
      bg="gray.100"
      color="rgba(0, 0, 0, 0.8)"
    >
      <Heading
        fontSize={{ base: "2xl", md: "4xl" }}
        fontWeight="bold"
        color="#333333"
        mb={2}
      >
        Grow Your Business
      </Heading>
      <Text fontSize={{ base: "2xl", md: "5xl" }} color="#FFAE34" mb={6}>
        In 3 Simple Steps
      </Text>

      <Flex
        justifyContent="center"
        alignItems="flex-start"
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: 4, md: 8 }}
      >
        {/* Step 1 */}
        <Box
          textAlign="center"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Image
            src="/gr1.svg"
            alt="Step 1"
            boxSize="250px"
            mt={5}
            mb={10}
            borderRadius="10px"
            border="4px solid orange"
          />
          <Heading fontSize="2xl" fontWeight="bold" mb={2} paddingX={4}>
            STEP 1: Schedule Your FREE Audit
          </Heading>
          <Text paddingX={4} fontStyle="italic">
            Our goal with this call is simple, to understand your business
            better and to equip you with real-world strategies which will help
            you grow your business.
          </Text>
        </Box>

        {/* Step 2 */}
        <Box
          textAlign="center"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Image
            src="/gr2.svg"
            alt="Step 2"
            boxSize="250px"
            mb={4}
            mt={10}
            borderRadius="10px"
            border="4px solid orange"
          />
          <Heading fontSize="2xl" fontWeight="bold" mb={2} paddingX={4}>
            STEP 2: Get Your 90 Days Growth Roadmap
          </Heading>
          <Text paddingX={4} fontStyle="italic">
            No shiny objects and no unrealistic promises here. We show you a 90
            days realistic roadmap keeping in mind how to get the highest ROAS
            and get higher repeat buyer %.
          </Text>
        </Box>

        {/* Step 3 */}
        <Box
          textAlign="center"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Image
            src="/gr3.svg"
            alt="Step 3"
            boxSize="250px"
            mb={4}
            mt={10}
            borderRadius="10px"
            border="4px solid orange"
          />
          <Heading fontSize="2xl" fontWeight="bold" mb={2} paddingX={4}>
            STEP 3: Implement the Strategies and… Boom
          </Heading>
          <Text paddingX={4} fontStyle="italic">
            At the end of the call, you will walk away with a proven strategy
            that&apos;s custom-made to help you grow your business.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Grow;
