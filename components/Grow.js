import React from "react";
import {
  Box,
  Text,
  Link,
  Button,
  Heading,
  Image,
  Flex,
} from "@chakra-ui/react";

const Grow = () => {
  return (
    <Box
      overflowX="hidden"
      width="100%"
      py={{ base: 8, md: 16 }}
      px={{ base: 4, md: 8 }}
      textAlign="center"
      bgGradient="radial-gradient(circle, rgba(255, 206, 34, 0.5) 0%, rgba(255, 255, 255, 1) 100%)"
      color="rgba(0, 0, 0, 0.8)"
      fontFamily="sans-serif"
    >
      <Heading
        fontSize={{ base: "4xl", md: "5xl" }}
        fontWeight="bold"
        color="#333333"
        mb={2}
      >
        Grow Your Business
      </Heading>
      <Text fontSize={{ base: "5xl", md: "6xl" }} color="#FFAE34" mb={6}>
        In 3 Simple Steps
      </Text>

      <Flex
        justifyContent="center"
        alignItems="stretch"
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: 8, md: 16 }}
      >
        {/* Step 1 */}
        <Box
          textAlign="center"
          display="flex"
          flexDirection="column"
          alignItems="center"
          p={6}
          bg="white"
          borderRadius="md"
          boxShadow="md"
          flex="1"
        >
          <Image
            src="/gr1.svg"
            alt="Step 1"
            boxSize="250px"
            mb={4}
            borderRadius="10px"
            border="4px solid #FFAE34"
          />
          <Heading
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="bold"
            mb={2}
          >
            STEP 1: Schedule Your FREE Audit
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} fontStyle="italic">
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
          p={6}
          bg="white"
          borderRadius="md"
          boxShadow="md"
          flex="1"
        >
          <Image
            src="/gr2.svg"
            alt="Step 2"
            boxSize="250px"
            mb={4}
            borderRadius="10px"
            border="4px solid #FFAE34"
          />
          <Heading
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="bold"
            mb={2}
          >
            STEP 2: Get Your 90 Days Growth Roadmap
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} fontStyle="italic">
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
          p={6}
          bg="white"
          borderRadius="md"
          boxShadow="md"
          flex="1"
        >
          <Image
            src="/gr3.svg"
            alt="Step 3"
            boxSize="250px"
            mb={4}
            borderRadius="10px"
            border="4px solid #FFAE34"
          />
          <Heading
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="bold"
            mb={2}
          >
            STEP 3: Implement the Strategies and… Boom
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} fontStyle="italic">
            At the end of the call, you will walk away with a proven strategy
            that&apos;s custom-made to help you grow your business.
          </Text>
        </Box>
      </Flex>
      <Flex align="center" justify="center">
        <Link href="https://tidycal.com/mintu/30-mins-discovery" isExternal>
          <Button px={20} py={6} mt={10} colorScheme="orange" fontSize="lg">
            Schedule Your Free Audit
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Grow;
