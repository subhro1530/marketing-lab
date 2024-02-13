import React from "react";
import {
  Box,
  Heading,
  Text,
  useBreakpointValue,
  Flex,
  Button,
  Link,
} from "@chakra-ui/react";
import { MdKeyboardArrowRight } from "react-icons/md";

const OurStory = () => {
  const fontSize = useBreakpointValue({ base: "md", md: "xl" });

  return (
    <Box
      bg="#f5f5f5"
      color="gray.700"
      py="100px"
      px={4}
      textAlign="center"
      mb={0}
      width="100vw"
      mx="auto"
    >
      <Box maxW="800px" mx="auto" textAlign="left">
        <Heading mb={8} fontSize={{ base: "3xl", md: "5xl" }} color="#fe9022">
          About Us
        </Heading>
        <Text fontSize={fontSize} mb={4} color="gray.600">
          Based out of Kolkata, MarketingLab is a performance marketing agency
          that helps D2C brands scale on their website and marketplaces.
        </Text>
        <Text fontSize={fontSize} mb={4} color="gray.600">
          We&apos;re NOT a website development agency or a social media agency
          that also does Performance Marketing.
        </Text>
        <Text fontSize={fontSize} mb={4} color="gray.600">
          We do ONLY Performance Marketing and our numbers and client results
          prove that we&apos;re super good at it.
        </Text>
        <Text fontSize={fontSize} mb={4} color="gray.600">
          With experience as our guiding star ⭐, we&apos;re dedicated to
          delivering authentic value and real results. Our approach? Fluff-Free
          Performance Marketing - cutting through noise with clear, impactful
          strategies.
        </Text>
        <Text fontSize={fontSize} mb={4} color="gray.600">
          Every decision we make is data driven and anchored in measurable
          outcomes, ensuring your success. Ready to invest in growth?
        </Text>
        <Flex align="center" justify="center">
          <Link href="https://tidycal.com/mintu/30-mins-discovery" isExternal>
            <Button
              px={20}
              py={10}
              mt={10}
              colorScheme="orange"
              rightIcon={<MdKeyboardArrowRight />}
              fontSize={fontSize}
            >
              Let&apos;s Talk!
            </Button>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default OurStory;
